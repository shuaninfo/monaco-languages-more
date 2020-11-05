const path = require('path');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');

function resolve(dir) { //- 获取绝对路径
	return path.join(__dirname, '.', dir)
}

module.exports = {
	entry: [
		'./src/index.js'
	],
	mode: 'production',
	output: {
		filename: 'index.min.js',
		path: path.join(__dirname, 'dist'),
		publicPath: './',
		// 无效，不会配置
		// library: "languages",
		libraryTarget: "umd"
	},
	// devtool: 'source-map',
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': path.resolve(__dirname, './src'),
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
				exclude: /node_modules/,
				options: {
					presets: [
						// "@babel/preset-env",
					],
					plugins: [
						// "@babel/plugin-proposal-class-properties",
						// "@babel/plugin-transform-runtime",
						// "@babel/plugin-transform-modules-umd",
						// "@babel/plugin-syntax-dynamic-import",
					]
				}

				// exclude: [
				// 	path.resolve(__dirname, "node_modules")
				// ],
				// options: {
				// 	"presets": ["@babel/preset-env"]
				// }
			}
		]
	},
	plugins: []
}
