module.exports = {
  productionSourceMap: false,
  pages: {
    app: {
      entry: "src/main.ts",
      template: "public/app.html",
      filename: "app.html",
      title: "iAiA"
    }
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/404.html" }]
    }
  }
};
