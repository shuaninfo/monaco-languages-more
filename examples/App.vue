<template>
	<div id="app">
		<div style="padding: 3px 5px;margin-bottom: 10px; background-color: white;">
			<p style="color: red;">暂时只支持：PromQL、Oracle、Redis</p>
		</div>
		<div class="tools">
			<select id="select-languages" v-model="language" @change="selectChangeHandler">
				<option v-for="(item, i) in selects" :key="i" :value="item.value">{{ item.label }}</option>
			</select>
			<button @click="saveHistoryHandle">保存History</button>
			<button @click="removeHistoryHandle">清除History</button>
			<button @click="loadHistoryHandle">加载本地History</button>
			<button @click="printInfoHandle">打印必要信息</button>
			<button @click="inserText">插入测试</button>
			<button @click="formatSQL()">代码格式化</button>
		</div>
		<div id="monaco-editor"></div>
	</div>
</template>

<script>
import * as monaco from 'monaco-editor';
// 不推荐 需要在package.json把name改为monaco-languages-more-dev，在能npm i -D monaco-languages-more

// import * as languages from '../dist/index.min.js';
import * as languages from '../src/index.js';

import EditStackElement from './stackelement.js';

const sqlfmt = (sql) => {
    const loc = document.location;
    const base = loc.protocol + "//" + loc.host;
    const url = base + "/sqlfmt?sql=" + encodeURIComponent(sql);
    return fetch(url).then((response) => {
      return response.text();
    });
  };
export default {
	name: 'App',
	async created() {
    monaco
		monaco.languages.registerDocumentFormattingEditProvider("sql", {
		      async provideDocumentFormattingEdits(model) {
		        var formatted = await sqlfmt(model.getValue());
		        return [
		          {
		            range: model.getFullModelRange(),
		            text: formatted,
		          },
		        ];
		      }
		    });
		languages.about();
		// ,'promql', 也可以使用别名如：custom-redis可以替换为redis
		// suggest自动提示
		languages.init(['oracle', 'promql' ,'mongodb','custom-redis'], {suggest:true});
		console.log('根据别名获取ID：', languages.getLanguage('custom-redis'));
    const langAll = monaco.languages.getLanguages()
		console.log('获取所有的: ',langAll);
    let mysqlLangDef =  langAll.filter(item=>item.id == 'mysql')[0]
    console.log('mysql语言定义:', mysqlLangDef)
    mysqlLangDef.loader().then(resp=>{
      console.log('mysql语言 loading: ', resp)
    })

		console.log('============================================');

		console.log('============================================');
		
	},
	mounted() {
		let $dom = document.getElementById('monaco-editor');
		this.value = this.get(this.valueKey);
		console.log('根据别名查询到id：',languages.getLanguageId('Redis'))
		
		// ==============================
		this.editor = monaco.editor.create($dom, {
			value: this.value,
			// monaco-editor-webpack-plugin 配置 https://github.com/microsoft/monaco-editor-webpack-plugin/issues/32
			language: this.language,
			wordWrap: 'on',
			theme: 'vs', // 默认
			automaticLayout: true,
			selectionHighlight: true,
		});
		
		/* 		成功*/
		this.editor.onDidChangeModelContent(e => {
			// 只 更新数据状态及保存本地缓存
			let len = this.editor.getModel()['_commandManager'].past.length
			// console.log('插入测试：', len)
			this.value = this.editor.getValue();
			window.localStorage.setItem(this.valueKey, this.value);
			this.saveHistoryHandle();
		});
	},
	methods: {
		formatSQL(){
			console.log('格式化代码')
			this.editor.getAction('editor.action.formatDocument').run();
		},
		selectChangeHandler() {
			console.log('language: ', this.editor.getModel().getModeId());
			let model = this.editor.getModel();
			monaco.editor.setModelLanguage(model, this.language);
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
			// console.log('===: ',historyObj)
			
			let _history = JSON.stringify(historyObj);
			let size = unescape(encodeURIComponent(_history)).length / 1024;
			let valueSize = unescape(encodeURIComponent(this.value)).length / 1024;

			window.localStorage.setItem(this.historyKey, _history);

			// console.log('保存历史记录成功：', size, 'kb ',valueSize,'kb ', ' 长度：',historyObj.past.length,historyObj.future.length);
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
		inserText(){
			let selection = this.editor.getSelection();
			// this.editor.setValue(`${Math.random()}`)
			this.editor.executeEdits(null, [{
			      range: selection,
			      text: `${Math.random()}`,
			      forceMoveMarkers: true
			    }]);
		},
	},
	data() {
		return {
			value: '',
			historyKey: '__history',
			valueKey: '_value',
			stateKey: '_stateKey',
			modelKey: '_modelKey',
			editor: null,
			language: 'mongodb',
			selects: [
				{ label: 'custom-redis', value: 'custom-redis' },
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
