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
			},
			{
				// if one loader needs to be fed into another they can be chained 
				loaders: ["style-loader", "css-loader", "sass-loader"],
				// only need to process sass files
				test: /\.scss$/
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
