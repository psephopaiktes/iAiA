module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/index.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    app: {
      entry: 'src/app.ts',
      template: 'public/app.html',
      filename: 'app/index.html'
    },
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: '/index.html' },
        { from: /\/app/, to: '/app.html' }
      ]
    }
  },
}
