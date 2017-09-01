const path = require('path');
const webpack = require('webpack');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './public/js/pages/index.jsx',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './public/dist')
	},
	// plugins: [
	// 	new HTMLWebpackPlugin({
	// 		title: 'Code Splitting'
	// 	}),
	// 	new webpack.optimize.CommonsChunkPlugin({
	// 		name: 'common'
	// 	})
	// ],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
	            loader: "babel-loader",
	            exclude: [/node_modules/],
	            query: {
	                presets: ['es2015', 'react']
	            }
	        }
		]
	}
};