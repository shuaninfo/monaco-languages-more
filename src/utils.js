export const customImport = (key) => {
	return new Promise(resolve => {
		resolve(require(`./${key}/${key}.js`));
	})
}
