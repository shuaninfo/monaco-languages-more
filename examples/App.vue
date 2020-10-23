<template>
	<div id="app">
		<select id="languages" v-model="language" @change="selectChangeHandler" style="min-width: 200px; margin-bottom: 10px;">
			<option v-for="(item, i) in selects" :value="item.value">{{ item.label }}</option>
		</select>
		<div id="monaco-editor"></div>
	</div>
</template>

<script lang="ts">
import * as monaco from 'monaco-editor';
// import * as languages from '../dist/index.js';
import * as languages from '../src/index.js';
export default {
	name: 'App',
	components: {},
	created() {
		// oracleLanguageDefinition
		// 	promLanguageDefinition
		console.log(languages)
		languages.about()
		languages.register()
		// let promLanguageDefinition = languages.promLanguageDefinition;
		
		// const languageId = promLanguageDefinition.id;
		// monaco.languages.register(promLanguageDefinition);
		// monaco.languages.onLanguage(languageId, () => {
		// 	promLanguageDefinition.loader().then(mod => {
		// 		// 高亮
		// 		monaco.languages.setMonarchTokensProvider(languageId, mod.language);
		// 		// 配置
		// 		monaco.languages.setLanguageConfiguration(languageId, mod.languageConfiguration);
				
		// 		// 自动提示
		// 		monaco.languages.registerCompletionItemProvider(languageId, mod.completionItemProvider);
		// 	});
		// });
	},
	mounted() {
		let $dom = document.getElementById('monaco-editor');
		this.editor = monaco.editor.create($dom, {
			language: 'promql',
			wordWrap: 'on',
			theme: 'vs', // 默认
			automaticLayout: true,
			selectionHighlight: true
		});
	},
	methods: {
		selectChangeHandler() {
			console.log('language: ', this.language);
			// TODO 更改自动提示
		},
		auto(language) {
			// TODO 设置激动提示
		}
	},
	data() {
		return {
			editor: null,
			language: '',
			selects: [{ label: 'Oracle', value: 'oracle' }, { label: 'mmsql', value: 'mmsql' }, { label: 'mongodb', value: 'mongodb' }, { label: 'radis', value: 'radis' }]
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
