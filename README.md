

> webpack配置问题：

### 使用方法

```javascript
// v1.2.0
import * as languages  from 'monaco-languages-more';

// v1.1.0 到 1.1.2 window.languages
import languages from 'monaco-languages-more';

// v1.0.0
import * as languages  from 'monaco-languages-more';
```





@see examples/App.vue

> 基于：[monaco-promql](https://github.com/prometheus-community/monaco-promql)
>
> support： oracle、promql、custom-redis

```shell
git clone https://gitee.com/browsers/monaco-languages-more.git

cd monaco-languages-more

# 安装依赖
npm i

# 运行
npm run dev

# 打包
npm run build:lib
```

![操作示例](./_images/index.gif)



#### 对外方法 | API

```javascript
// 必须先引入monaco
import * as monaco from 'monaco-editor';

// import languages from 'monaco-languages-more';
import languages from '../src/index.js';
// arg0: 注册语言
// arg1: 是否开启自动提示
languages.init(['oracle','promql'], true)


// ========================================================================
// monaco editor所支持的语言 + monaco-languages-more
// 支持别名 - alias
let getLang = 'Redis'
// 获取语言配置
// arg0: 别名
// arg1：是否忽略大小写
let lang = languages.getLanguage(getLang, true);
lang.loader().then((e)=>{
    console.log(getLang,'config：',e)
});

// ========================================================================
// 根据别名获取languageId
// arg0: 别名
// arg1：是否忽略大小写
let languageId = languages.getLanguageId('OraCle', true);


// ========================================================================
// 自定义别名
//export var _aliases = {
//	'go': ['go', 'golang', 'GO', 'GOLANG'],
//	'redis': ['redis', 'Redis', 'REDIS']
//}
//export const setAliases = function(aliases, append) {
//	if (!append) {
//		// false|undefined
//		_aliases = aliases;
//	} else {
//		_aliases = Object.assign(_aliases, aliases);
//	}
//	return _aliases;
//}

// arg0: 别名配置
// arg2: 是否追加。false
languages.setAliases({'go':['go','golang']}, true)

```





## 如何保存操作历史记录

> 目的：页面刷新后任然可以进行撤销操作(ctrl+z, ctrl+y)

1、保存编辑器中的文本：editorInstance.getValue()

2、保存操作历史：

```javascript
// 保存localStorage或其他
let model = this.editorInstance.getModel()
// arg1: 50，保存前50的操作历史，
let historyObj =languages.getEditStack(model, 50)

// ==== 约等价于 ====
let historyStr = JSON.stringify({
     currentOpenStackElement: model['_commandManager'].currentOpenStackElement
     past: model['_commandManager'].past,
     future: model['_commandManager'].future
});
```

3、刷新页面后载入操作历史**（也需要载入之前编辑器里的代码）**

```javascript
// editorInstance设置value

// 获取
let historyObj = // 从localStorage获取并转换为对象
let model = this.editor.getModel()		
// 设置操作历史
languages.setEditStack(model, historyObj)


// ==== 约等于 ====
if(historyObj.past && history.past.length) {
  model['_commandManager'].past.push(...historyObj.past.map(data => new EditStackElement(data)));
}
if(historyObj.future && history.future.length) {
  model['_commandManager'].future.push(...historyObj.future.map(data => new EditStackElement(data)));
}
if(historyObj.currentOpenStackElement){
	model['_commandManager'].currentOpenStackElement = new EditStackElement(historyObj.currentOpenStackElement)
}
```

4、自定义**EditStackElement**类，在第三步中使用

```javascript
export default class EditStackElement {
 	beforeVersionId;
 	beforeCursorState;
 	afterCursorState;
 	afterVersionId = -1;
 	editOperations = [];
 	constructor(json) {
 		for (let key in json) {
 			this[key] = json[key];
 		}
 	}
 	undo(model) {
 		for (var i = this.editOperations.length - 1; i >= 0; i--) {
 			this.editOperations[i] = {
 				operations: model.applyEdits(this.editOperations[i].operations)
 			};
 		}
 	} // end undo
 	redo(model) {
 		for (var i = 0; i < this.editOperations.length; i++) {
 			this.editOperations[i] = {
 				operations: model.applyEdits(this.editOperations[i].operations)
 			};
 		}
 	} // end redo
 }

```

