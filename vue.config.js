module.exports = {
  outputDir: 'docs',
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
  // devServer: {
  //   historyApiFallback: {
  //     rewrites: [
  //       { from: /\/index/, to: '/index.html' }, // index.html に飛ばす
  //       { from: /\/app/, to: '/app.html' }
  //     ]
  //   }
  // },
}
