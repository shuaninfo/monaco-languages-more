const path = require('path')

function resolve(dir) {
	return path.join(__dirname, '.', dir)
}
require("@babel/core").transform("code", {
	plugins: ["@babel/plugin-proposal-class-properties"]
});
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './src/index.js' : '/',
	outputDir: 'dist',
	assetsDir: 'static',
	productionSourceMap: false,
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'monaco languages more'
		}
	},
	//   transpileDependencies: ['highlight.js'],
	chainWebpack(config) {
		config.resolve.alias
			.set('~', resolve('examples'))
			.set('@dist', resolve('dist'));
	},
	configureWebpack: {
		performance: {
			hints: false
		},
		module: {
			// TODO https://www.cnblogs.com/lanlanJser/p/11894044.html
			rules: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
				options: {
					"presets": ["@babel/preset-env"]
				}
			}]
		}
	}

}
