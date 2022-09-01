import {
    functionExt
} from './_ext/function.js';

import {
    getEditStack,
    setEditStack
} from './_ext/func.js'

import {
    promLanguageDefinition
} from './promql/promql.contribution';
import {
    oracleLanguageDefinition
} from './oracle/oracle.contribution';
import {
    redisLanguageDefinition
} from './redis/redis.contribution';

import {
    mongodbLanguageDefinition
} from './mongodb/mongodb.contribution';


// 统一导出语言配置
export {
    functionExt,
    getEditStack,
    setEditStack,
    promLanguageDefinition,
    oracleLanguageDefinition,
    redisLanguageDefinition,
    mongodbLanguageDefinition
};

/**
 * 语言包已经支持的语言
 */
// export const languages = ['oracle','promql','radis','mongodb']
export const definitions = {
    // key 为Definition.id
    'promql': promLanguageDefinition,
    'oracle': oracleLanguageDefinition,
    'redis': redisLanguageDefinition,
    'mongodb': mongodbLanguageDefinition
}
// 补充别名，不建议直接使用
// 格式：{语言ID: 别名数组}
export var _aliases = {
    'go': ['go', 'golang', 'GO', 'GOLANG'],
    'redis': ['redis', 'Redis', 'REDIS']
}

export const defaultConfig = {
    langs: Object.keys(definitions), // 注册语言
    suggest: false, // 自动提示
    aliases: {
        // 'custom-redis': []
    } // 补充别名，在定义的基础上添加
}
// TODO: 使用Object.defineProperty定义languages属性不可改？？

// TODO: 获取monaco自带的语言包配置信息
// monaco.languages.getLanguages()

// TODO: 修改monaco自带语言包的信息，比如：每个语言添加一个语言名称的方法，如：mysql在functions添加mysql


export const setAliases = function (aliases, append) {
    if (!append) {
        // false|undefined
        _aliases = aliases;
    } else {
        _aliases = Object.assign(_aliases, aliases);
    }
    return _aliases;
}

/**
 * 根据输入的别名获取language id。
 * <p> 如：js ==> JavaScript </p>
 * <p>
 * 优化1：https://gitee.com/fulus/codes/x4gtwnkofisdm7h8qey0131
 * 优化2：保存别名数组：一个源数据，一个忽略大小写的数据
 * </p>
 *
 * @param {String} alias 别名
 * @param {boolean} ignoreCase 是否忽略大小写，可以为undefined
 */
export const getLanguage = function (alias, ignoreCase) {
    console.log(alias, ignoreCase, 'getLanguage 1')
    // 当前monaco支持的语言，请在init之后再调用
    // 先从definitions中过去，如果没有再从monaco.languages中获取，防止本地别名和monaco中的重复
    let result = _getByDefinition(definitions, alias, ignoreCase)
    if (result) {
        return result
    }
    let langs = monaco.languages.getLanguages();
    result = _getByDefinition(langs, alias, ignoreCase)
    return result
}

function _getByDefinition(langs, alias, ignoreCase) {
    let lowerCaseAlias = alias.toLowerCase()
    let result = null
    for (let i in langs) {
        // 根据别名获取ID，
        // 来源langs.alias和自定义_aliases
        let lang = langs[i];
        if (lang.id == alias || (!!ignoreCase && lang.id.toLowerCase() == lowerCaseAlias)) {
            return lang;
        }
        let currentAliases = null;
        lang.aliases = lang.aliases || []
        if (!!_aliases[lang.id]) {
            currentAliases = lang.aliases.concat(_aliases[lang.id])
        } else {
            currentAliases = [...lang.aliases]
        }

        let flag = currentAliases.filter(langAlias => {
            return langAlias == alias || (!!ignoreCase && langAlias.toLowerCase() == lowerCaseAlias)
        }).length > 0;
        if (flag) {
            result = lang;
            break;
        }


    }


    return result;
}

// 同上方的方法
export const getLanguageId = function (alias, ignoreCase) {
    let lang = getLanguage(alias, ignoreCase);
    return !!lang ? lang.id : null;
}

/**
 * 废弃
 * @deprecated
 * @param {Object} alias
 * @param {Object} ignoreCase
 */
export async function getLanguageConfig(alias, ignoreCase) {
    let lang = getLanguage(alias, ignoreCase);
    if (!!lang) {
        let result = await lang.loader();
        return result;
    }
    return null
}


export const about = function () {
    console.info('monaco语言包，现支持：', Object.keys(definitions).join('、'))
}


/**
 * 注册monaco支持的语言
 * @param {Array} langs 注册的语言数组 - 支持alias
 * @param {Object|null} config suggest: 是否注册自动提示
 * @return {Object|null} 根据langs获取languages配置，数据格式同languages
 */
export const init = function (langs, config) {
    if (config) {
        Object.assign(defaultConfig, config);
    }
    if (!langs || !(langs instanceof Array) || langs.length == 0) {
        console.error('[language-more] init(arg0, arg1)请使用正确的参数列表：arguments(Array, Object|null)')
        return false
    }
    return register(langs, defaultConfig.suggest);
};

/**
 * TODO: 注册monaco支持的语言
 * @param {Array} langs 注册的语言数组 - 支持alias
 * @param {Boolean} isAutoComplete 是否注册自动提示
 * @return {Object} 根据langs获取languages配置，数据格式同languages
 */
export const register = function (langs, isAutoComplete) {
    if (!monaco) {
        console.error('[language-more] monaco is ', monaco, ' 请导入monaco')
        return;
    }
    if (!langs || !(langs instanceof Array) || langs.length == 0) {
        console.warn('[language-more] register(arg0, arg1)请使用正确的参数列表：arguments(Array, Boolean)')
    }

    let registerDefinitions = {}
    if (langs[0] == 'all') {
        // 全部
        registerDefinitions = definitions
    } else {
        // 部分
        for (let i in langs) {
            // 传入的参数
            let alias = langs[i]
            for (let key in definitions) {
                let definition = definitions[key];
                // id 或 别名
                if (definition.id == alias || definition.aliases.indexOf(alias) > -1) {
                    registerDefinitions[key] = definition
                }
            } // end for(...)
        } // end for(langs)
    }

    // 循环注册 _register()
    for (let key in registerDefinitions) {
        // 注册进入monaco
        _register(registerDefinitions[key], isAutoComplete)
    }
    // 如果没有注册，则返回为null
    return Object.keys(registerDefinitions).length == 0 ? null : registerDefinitions
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
            monaco.languages.setLanguageConfiguration(languageId, mod.conf);

            // 自动提示
            if (!!isAutoComplete) {
                // mod.language.keywords
                monaco.languages.registerCompletionItemProvider(languageId, {
                    provideCompletionItems: (model, position) => {
                        const word = model.getWordUntilPosition(position)
                        const range = {
                            startLineNumber: position.lineNumber,
                            endLineNumber: position.lineNumber,
                            startColumn: word.startColumn,
                            endColumn: word.endColumn
                        };
                        let keyword = _provideItem(mod.language.keywords, 'Keyword', range, languageId)
                        let operator = _provideItem(mod.language.operators, 'Operator', range, languageId)
                        let builtinFunction = _provideItem(mod.language.builtinFunctions, 'Function', range, languageId)
                        let suggestions = [...keyword, ...operator, ...builtinFunction]

                        console.log('触发自动提示：', suggestions.length)

                        return {
                            suggestions
                        };
                    },
                    triggerCharacters: ['.']
                });
            }
        });
    });
}


// 提示对象构造函数
const _provideItem = (obj, kind, range, lang = 'sql') => {
    let insertTextRules = lang == 'mongodb' ?
        monaco.languages.CompletionItemInsertTextRule.KeepWhitespace :
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet

    return obj.map(value => {
        return {
            label: value,
            insertText: !!functionExt[value] ? `${value}${functionExt[value]}` : value,
            kind: monaco.languages.CompletionItemKind[kind],
            insertTextRules,
            range
        }
    })
}
