/*eslint-disable */
const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)//正则匹配
      .include.add(dir).end() // 只要dir下即'src/assets/内包含的icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录

  }
}