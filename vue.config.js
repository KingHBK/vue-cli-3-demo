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
  }
}