module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    app: {
      entry: 'src/main.ts',
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
