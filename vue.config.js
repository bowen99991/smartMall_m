const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/smartMall_m/' // 你的GitHub仓库名称
    : '/',
  // 其他配置选项...
  outputDir: 'dist',
  assetsDir: 'static'
})
