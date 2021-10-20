const path = require('path');
const webpack = require("webpack");
const sourcePath = __dirname + '/src';
const destinationPath = __dirname + '/dist';

var config = module.exports = {
	mode:"production",
	entry: {
		app: ["./contextual.js"]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
    	filename: 'contextual.min.js',
		library: 'contextual',
		library: {
		  name: 'contextual',
		  type: 'var',
		  export: 'contextual',
		},
		hashFunction: "xxhash64"
	},
	module:{
		rules:[
			{
                test   : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader',
				options: {
					useRelativePath:true,
					name: 'fonts/[name].[ext]'
				}
           	},
           	{
                test   : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader',
				options: {
					useRelativePath:true,
					name: 'fonts/[name].[ext]'
				}
           	},
           	{
                test   : /\.(jpeg|jpg|png(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader',
				options: {
					useRelativePath:true,
					name: 'img_inner/[name].[ext]'
				}
           	},
           	{ 
				test: /\.scss$/, 
				loader: "sass-loader"
			},
           	{
				test: /\.css$/, 
				loader: "style-loader"
			},
			{
				test: /\.css$/, 
				loader: "css-loader"
			},
			{
			  test: /\.m?js$/,
			  exclude: /(node_modules|bower_components)/,
			  use: {
				loader: 'babel-loader',
				options: {
				  presets: ['@babel/preset-env']
				}
			  }
			}
		]
	},
};
