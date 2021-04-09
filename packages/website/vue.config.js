module.exports = {
  chainWebpack: config => {
    // MD Loader
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader-v16')
      .end()
      .use('md-loader')
      .loader('./md-loader/index.js')
      .end()
  }
}