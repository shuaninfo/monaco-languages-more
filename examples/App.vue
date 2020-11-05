<template>
	<div id="app">
		<div style="padding: 3px 5px;margin-bottom: 10px; background-color: white;">
			<p style="color: red;">暂时只支持：PromQL、Oracle、Redis</p>
		</div>
		<div class="tools">
			<select id="select-languages" v-model="language" @change="selectChangeHandler">
				<option v-for="(item, i) in selects" :value="item.value">{{ item.label }}</option>
			</select>
			<button @click="saveHistoryHandle">保存History</button>
			<button @click="removeHistoryHandle">清除History</button>
			<button @click="loadHistoryHandle">加载本地History</button>
			<button @click="printInfoHandle">打印必要信息</button>
		</div>
		<div id="monaco-editor"></div>
	</div>
</template>

<script>
import * as monaco from 'monaco-editor';
// 不推荐 需要在package.json把name改为monaco-languages-more-dev，在能npm i -D monaco-languages-more

import * as languages from '../dist/index.min.js';
// import * as languages from '../src/index.js';

import EditStackElement from './stackelement.js';
export default {
	name: 'App',
	async created() {
		// configeDefinition
		console.log('languages: ',languages)
		console.log('window.languages: ',window.languages)
		languages.about();
		// ,'promql'
		languages.init(['oracle', 'promql' ,'redis'], true);
		// console.log('languages._aliases: ',languages._aliases)
		// languages.setAliases({name:'xxx'})
		// console.log('languages._aliases： ',languages._aliases)
		// console.log('获取：',monaco.languages.getLanguages())

		console.log('============================================');
		// let getLang = 'redis';
		// let lang = languages.getLanguage(getLang, true);
		// lang.loader().then(e => {
		// 	console.log(getLang, '配置：', e);
		// });
		// let result = await lang.loader();
		// console.log('[同步] ', getLang, '配置：', lang,result);
		
		// console.log('monaco现在支持 redis:', languages.getLanguage('redis', true));

		console.log('============================================');
		
	},
	mounted() {
		let $dom = document.getElementById('monaco-editor');
		this.value = this.get(this.valueKey);
		console.log('根据别名查询到id：',languages.getLanguageId('Redis'))
		let model = monaco.editor.createModel(this.value, this.language);
		this.editor = monaco.editor.create($dom, {
			wordWrap: 'on',
			theme: 'vs', // 默认
			automaticLayout: true,
			selectionHighlight: true,
			model: model
		});
		// console.log('model:', model, this.editor);
		/* 		成功*/
		this.editor.onDidChangeModelContent(e => {
			// console.log(this.editor.getModel())
			// console.log('e： ',e)
			// 只 更新数据状态及保存本地缓存
			this.value = this.editor.getValue();
			window.localStorage.setItem(this.valueKey, this.value);
			this.saveHistoryHandle();
			// 保存历史记录
			// setTimeout(() => {
			// 	this.saveHistoryHandle();
			// }, 100);
		});
	},
	methods: {
		selectChangeHandler() {
			console.log('language: ', this.editor.getModel().getModeId());
			let model = this.editor.getModel();
			monaco.editor.setModelLanguage(model, this.language);
			// let lang = languages.getLanguage(this.language, true);
			// lang.loader().then(e => {
			// 	console.log(this.language, '配置：', e);
			// });
			// console.log(this.editor.getModel().getModeId());
		},
		get(key) {
			let result = window.localStorage.getItem(key);
			if (key == this.valueKey) {
				return result;
			}
			return !!result ? JSON.parse(result) : null;
		},
		// 清除history
		removeHistoryHandle() {
			window.localStorage.removeItem(this.historyKey);
			console.log('成功清除history...');
		},
		// 保存history
		saveHistoryHandle() {
			let model = this.editor.getModel();
			// let historyObj = {
			// 	past: model['_commandManager'].past.slice(-10),
			// 	future: model['_commandManager'].future.slice(-10)
			// };
			
			// 推荐使用方法，在getEditStack时设置数量
			let historyObj = languages.getEditStack(model, 50)
			console.log('===: ',historyObj)
			
			let _history = JSON.stringify(historyObj);
			let size = unescape(encodeURIComponent(_history)).length / 1024;
			let valueSize = unescape(encodeURIComponent(this.value)).length / 1024;

			window.localStorage.setItem(this.historyKey, _history);

			console.log('保存历史记录成功：', size, 'kb ',valueSize,'kb ', ' 长度：',historyObj.past.length,historyObj.future.length);
		},
		// 加载hostory
		loadHistoryHandle() {
			let history = this.get(this.historyKey);
			if (history) {
				// 新建一个model
				// let model = monaco.editor.createModel(this.value, this.language);
				let model = this.editor.getModel()
				
				// TODO 改为
				languages.setEditStack(model, history)
				
				// if (history.past && history.past.length) {
				// 	console.log('past...');
				// 	model['_commandManager'].past.push(...history.past.map(data => new EditStackElement(data)));
				// }
				// if (history.future && history.future.length) {
				// 	console.log('future	...');
				// 	model['_commandManager'].future.push(...history.future.map(data => new EditStackElement(data)));
				// }
				console.log('加载成功...');
			}
		},
		printInfoHandle() {
			console.log('model: ', this.editor.getModel());
			console.log('editor: ', this.editor);
		},
		auto(language) {
			// TODO 设置激动提示
		}
	},
	data() {
		return {
			value: '',
			historyKey: '__history',
			valueKey: '_value',
			stateKey: '_stateKey',
			modelKey: '_modelKey',
			editor: null,
			language: 'custom-redis',
			selects: [
				{ label: 'redis', value: 'custom-redis' },
				{ label: 'SQL', value: 'sql' },
				{ label: 'Oracle', value: 'oracle' },
				{ label: 'PromQL', value: 'promql' },
				{ label: 'mmsql', value: 'mmsql' },
				{ label: 'mongodb', value: 'mongodb' },
				{ label: 'xx', value: 'xx' }
			]
		};
	}
};
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	background-color: #e7eaed;
}
#app {
	padding: 50px;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
#monaco-editor {
	height: 700px;
}
.tools {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
}
.tools #select-languages {
	min-width: 200px;
}
.tools button {
	margin-left: 20px;
}
</style>
