const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './public/js/pages/index.jsx',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './public/dist')
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
	            loader: "babel-loader",
	            exclude: [/node_modules/],
	            query: {
	                presets: ['es2015', 'react']
	            }
	        }, {
	        	test: /\.(s)?[ac]ss$/,
	        	use: ExtractTextPlugin.extract({
	        		fallback: 'style-loader',
	        		use: ['css-loader', 'sass-loader']
	        	})
	        }
		],
	},
	plugins: [
		new ExtractTextPlugin({ filename: 'main.bundle.css' })
	]
};