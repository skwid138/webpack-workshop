var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	// entry can be a string for single entry point or an object for multiple entry points
	// webpack builds out dependencies based on this file down
	entry: "./src/index.js", 
	// defines where the application file is placed after it's been bundled
	// the file created is what will be used for production code
	output: {
		// where to put the build file
		path: "build",
		// what name to give the build file
		filename: "bundle.js"
	},
	// this can contain many properties to customize webpack
	module: {
		// define how I want installed loaders to process info
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
