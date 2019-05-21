const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,

  devServer: {
    open: false,
    proxy: {
      '/api': {
        target: 'https://...com',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api' : '/' }
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/common.less')
      ]
    }
  }
}
