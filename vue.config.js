module.exports = {
  // productionSourceMap: false,
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
  },
  css: {
    loaderOptions: {
      scss: {
        data: '@import "@/style/common.scss";'
      }
    }
  },
  configureWebpack: {
    devtool: "source-map"
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({});
  }
};
