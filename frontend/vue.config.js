
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 9100;

module.exports = {
  publicPath: './',
  devServer: {
    hot: true,
    disableHostCheck: true,
    host: 'localhost',
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  /**
   * 链式操作 (高级)
   * Vue CLI 内部的 webpack 配置是通过 webpack-chain 维护的。这个库提供了一个 webpack
   * 原始配置的上层抽象，使其可以定义具名的 loader 规则和具名插件，并有机会在后期进入这些规则并对它们的选项进行修改。
   * @param config
   */
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  }
};
