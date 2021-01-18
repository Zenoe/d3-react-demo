const commonPaths = require('./common-paths');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const globalVar = {
  API_URL:'https://wis.ruijie.com.cn/pi',
  SERVER_URL:'https://wis.ruijie.com.cn',
  LOGIN_URL: 'https://wis.ruijie.com.cn/cas',
}
const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: 'afu/[name].[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(globalVar.API_URL),
      LOGIN_URL: JSON.stringify(globalVar.LOGIN_URL),
      SERVER_URL: JSON.stringify(globalVar.SERVER_URL),
      PRO_MODE:true,
      MOCK_MODE:false,
    })
  ],
};

module.exports = config;
