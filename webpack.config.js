var HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');

var webpackConfig = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.ejs"
		})
	]
};

module.exports = webpackConfig;
