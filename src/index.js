import {promLanguageDefinition} from './promql/promql.contribution';


// 统一导出语言配置
export {promLanguageDefinition};

// export * from './oracle/oracle.contribution';

/**
 * 语言包已经支持的语言
 */
// export const languages = ['oracle','promql','radis','mongodb']
export const languages = {
	// key 为Definition.id
	'oracle': {
		'aliases': promLanguageDefinition.aliases
	}
}
// TODO 获取monaco自带的语言包配置信息
// monaco.languages.getLanguages()

// TODO 修改monaco自带语言包的信息，比如：每个语言添加一个语言名称的方法，如：mysql在functions添加mysql
// 

export const about = function(){
	console.log('monaco语言包，现支持：', Object.keys(languages).join('、'))
}

/** TODO 注册monaco支持的语言
 * @param {Array} languages 注册的语言数组
 * @param {Boolean} isAutoComplete 是否注册自动提示
 */
export const register = function(languages, isAutoComplete){
	if(!monaco){
		console.error('[language-more] monaco is ', monaco,' 请导入monaco')
		return;
	}
	if(!languages || typeof languages != 'Array' || languages.length > 0){
		console.warn('[language-more] register(arg0, arg1)请使用正确的参数列表：arguments(Array, Boolean)')
	}
	// console.log('执行register ： ', promLanguageDefinition,monaco)
	const languageId = promLanguageDefinition.id;
	monaco.languages.register(promLanguageDefinition);
	monaco.languages.onLanguage(languageId, () => {
		promLanguageDefinition.loader().then(mod => {
			// 高亮
			monaco.languages.setMonarchTokensProvider(languageId, mod.language);
			// 配置
			monaco.languages.setLanguageConfiguration(languageId, mod.languageConfiguration);
			
			// 自动提示
			monaco.languages.registerCompletionItemProvider(languageId, mod.completionItemProvider);
		});
	});
}

