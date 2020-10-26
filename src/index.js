import {
	promLanguageDefinition
} from './promql/promql.contribution';
import {
	oracleLanguageDefinition
} from './oracle/oracle.contribution';


// 统一导出语言配置
export {
	promLanguageDefinition,
	oracleLanguageDefinition
};

/**
 * 语言包已经支持的语言
 */
// export const languages = ['oracle','promql','radis','mongodb']
export const languages = {
	// key 为Definition.id
	'promql': promLanguageDefinition,
	'oracle': oracleLanguageDefinition,
}
// TODO 使用Object.defineProperty定义languages属性不可改？？

// TODO 获取monaco自带的语言包配置信息
// monaco.languages.getLanguages()

// TODO 修改monaco自带语言包的信息，比如：每个语言添加一个语言名称的方法，如：mysql在functions添加mysql
// 

/**
 * 根据输入的别名获取language id。
 * <p> 如：js ==> JavaScript </p>
 * <p>
 * 优化：https://gitee.com/fulus/codes/x4gtwnkofisdm7h8qey0131
 * </p>
 * 
 * @param {String | Array} alias 
 */
export const getId = function(alias) {}

export const about = function() {
	console.log('monaco语言包，现支持：', Object.keys(languages).join('、'))
}

/** TODO 注册monaco支持的语言
 * @param {Array} langs 注册的语言数组 - 支持alias
 * @param {Boolean} isAutoComplete 是否注册自动提示
 * @return {Object} 根据langs获取languages配置，数据格式同languages
 */
export const register = function(langs, isAutoComplete) {
	if (!monaco) {
		console.error('[language-more] monaco is ', monaco, ' 请导入monaco')
		return;
	}
	if (!langs || typeof langs != 'Array' || langs.length > 0) {
		console.warn('[language-more] register(arg0, arg1)请使用正确的参数列表：arguments(Array, Boolean)')
	}
	let result = {}
	if (langs[0] == 'all') {
		// 全部
		result = languages
	} else {
		// 部分
		for (let i in langs) {
			let alia = langs[i]
			for (let key in languages) {
				let item = languages[key]
				if (item.aliases.indexOf(alia)) {
					result[key] = item
				}
			} // end languages
		} // end langs
	}

	// 循环注册 _register()
	for (let key in result) {
		_register(result[key], isAutoComplete)
	}
	return result
}

/**
 * @param {Object} definition
 * @param {Object} isAutoComplete
 */
function _register(definition, isAutoComplete) {
	let languageId = definition.id;
	monaco.languages.register(definition);
	monaco.languages.onLanguage(languageId, () => {
		definition.loader().then(mod => {
			// 高亮
			monaco.languages.setMonarchTokensProvider(languageId, mod.language);
			// 配置
			monaco.languages.setLanguageConfiguration(languageId, mod.languageConfiguration);

			// 自动提示
			if (!!isAutoComplete) {
				// TODO 判断当前语言
				monaco.languages.registerCompletionItemProvider(languageId, mod.completionItemProvider);
			}
		});
	});
}
