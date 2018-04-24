const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './app/main.ts',
	output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.ts$/, 
			loaders: [
				{loader: 'ts-loader'}, 'angular2-template-loader'
				]
		},
		{
			test: /\.ts$/,
			loader: 'webpack-replace',
			query: {
				search: 'moduleID: module.id,',
				replace: ''
			}
		},
		{
			test: /\.html$/,
			loader: 'html-loader'
		},

		{
			test: /\.css$/,
			loader: 'raw-loader'
		}
		]
	},
	resolve:{
		extensions: ['*','.js', '.ts']
	}
};