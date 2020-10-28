const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vxe-table/v4/' : '/',
  outputDir: 'docs',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'monaco languages more'
    }
  },
//   transpileDependencies: ['highlight.js'],
  chainWebpack (config) {
    config.resolve.alias
	  .set('~', resolve('examples'))
	  .set('@dist',resolve('dist'));
  }
}
