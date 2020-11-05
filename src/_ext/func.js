import EditStackElement from './_stackelement.js';

// 提供一些其他方法

const _key = '_commandManager'
export const getEditStack = function(model, limit) {
	if (!model || !model[_key]) {
		console.warn('[languages] getEditStack 参数错误，[model, limit]', model, limit)
		return null
	}
	if (typeof limit === 'number' && !isNaN(limit)) {
		return {
			currentOpenStackElement: model[_key].currentOpenStackElement,
			past: model[_key].past.slice(-limit),
			future: model[_key].future.slice(-limit)
		}
	} else {
		return {
			currentOpenStackElement: model[_key].currentOpenStackElement,
			past: model[_key].past,
			future: model[_key].future
		}
	}

}
export const setEditStack = function(model, stack, limit) {
	if (!model || !model[_key] || !stack) {
		console.warn('[languages] getEditStack 参数错误，[model, stack, limit]', model, stack, limit)
		return false
	}
	if (stack.past && stack.past.length) {
		let result = _create(stack.past, limit)
		model[_key].past.push(...result)
	}
	if (stack.future && stack.future.length) {
		let result = _create(stack.future, limit)
		model[_key].future.push(...result);
	}
	if(stack.currentOpenStackElement){
		model[_key].currentOpenStackElement = new EditStackElement(stack.currentOpenStackElement)
	}
	return true;
}

function _create(list, limit) {
	let result = null
	if (typeof limit === 'number' && !isNaN(limit)) {
		// 限制条数
		result = list.slice(-limit).map(data => new EditStackElement(data))
	} else {
		// 全部
		result = list.map(data => new EditStackElement(data))
	}
	return result
}
