const path = require('path');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');

function resolve(dir) { //- 获取绝对路径
	return path.join(__dirname, dir)
}
module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'index.min.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: "umd"
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': resolve('src'),
		}
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
			}
		]
	},
	plugins: [
		// new ProgressBarPlugin()
	]
}
