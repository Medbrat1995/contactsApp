var path = require('path');
var webpack = require("webpack");

module.exports = {
	entry: './app.js',
	output:{
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	
	plugins:[
	new webpack.optimize.UglifyJsPlugin(),
	],
	
	module: {
		rules: [{
		test: /\.js$/,
		exclude: /node_modules/,
		use:{
			loader:'babel-loader',
			options:{presets:['env']}
		}
	}],
	}
};