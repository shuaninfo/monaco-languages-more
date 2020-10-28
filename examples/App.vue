<template>
	<div id="app">
		<div style="padding: 3px 5px;margin-bottom: 10px; background-color: white;">
			<p style="color: red;">暂时只支持：PromQL、Oracle</p>
		</div>
		<select id="languages" v-model="language" @change="selectChangeHandler" style="min-width: 200px; margin-bottom: 10px;">
			<option v-for="(item, i) in selects" :value="item.value">{{ item.label }}</option>
		</select>
		<div id="monaco-editor"></div>
	</div>
</template>

<script>
import * as monaco from 'monaco-editor';
import * as languages from '../dist/index.min.js';
// import * as languages from '../src/index.js';
export default {
	name: 'App',
	components: {},
	created() {
		// configeDefinition
		console.log(languages)
		languages.about();
		// 
		languages.init(['oracle','promql'], true)
		// console.log('languages._aliases: ',languages._aliases)
		// languages.setAliases({name:'xxx'})
		// console.log('languages._aliases： ',languages._aliases)
		// console.log('获取：',monaco.languages.getLanguages())
		console.log('============================================')
		let getLang = 'Redis'
		let lang = languages.getLanguage(getLang, true);
		lang.loader().then((e)=>{
			console.log(getLang,'配置：',e)
		})
	},
	mounted() {
		let $dom = document.getElementById('monaco-editor');
		this.editor = monaco.editor.create($dom, {
			value:`abs()`,
			language: this.language, // oracle
			wordWrap: 'on',
			theme: 'vs', // 默认
			automaticLayout: true,
			selectionHighlight: true
		});
	},
	methods: {
		selectChangeHandler() {
			console.log('language: ', this.editor.getModel().getModeId());
			let model = this.editor.getModel()
			monaco.editor.setModelLanguage(model, this.language)
			console.log(this.editor.getModel().getModeId())
		},
		auto(language) {
			// TODO 设置激动提示
		}
	},
	data() {
		return {
			editor: null,
			language: 'oracle',
			selects: [{ label: 'SQL', value: 'sql' },{ label: 'Oracle', value: 'oracle' },{ label: 'PromQL', value: 'promql' }, { label: 'mmsql', value: 'mmsql' }, { label: 'mongodb', value: 'mongodb' }, { label: 'radis', value: 'radis' }]
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
</style>
