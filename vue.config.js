const getPages = require('./src/utils/getPages.js').getPages
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // indexPath: 'index.html',
  // filenameHashing: true,
  pages: getPages(),
  productionSourceMap: false,
  devServer: {
    index: 'page1.html',
    open: true,
    port: 1234
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        options.limit = 1234
        return options
      })
  },
  configureWebpack: config => {

  },
  css: {
    // extract: true, // 提取css文件为单独文件, 默认生产true, 开发false, 跟css热更新冲突, 一般开发环境不开.
    sourceMap: true, // 开启css源文件映射, 方便调试开发
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/variables.scss";
        `, // 注册全局scss文件变量,以免单个文件多次重复引入
      }
    },
  }

}