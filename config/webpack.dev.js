const commonPaths = require("./common-paths");

const  devServer = require('./devServer');

const webpack = require("webpack");

const globalVar = {
  API_URL:'http://172.18.233.52:8080/wispi',
  SERVER_URL:'http://172.18.233.52:8080',
  LOGIN_URL:'http://172.18.233.52:8080/cas/login'
}

const config = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.js`,
  },
  output: {
    filename: 'afu/[name].[hash].js',
  },
  // resolve: {
  //   alias: {
  //     "react-dom": "@hot-loader/react-dom",
  //   },
  // },
  devtool: "inline-source-map",
  // module: {
  //   rules: [
  //     ,
  //   ],
  // },
  plugins:
  // [new webpack.HotModuleReplacementPlugin()],
  [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(globalVar.API_URL),
      LOGIN_URL: JSON.stringify(globalVar.LOGIN_URL),
      SERVER_URL: JSON.stringify(globalVar.SERVER_URL),
      PRO_MODE:false,
      MOCK_MODE:false,
    })
  ],

  devServer,
};

module.exports = config;
