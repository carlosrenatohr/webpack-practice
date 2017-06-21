var webpack = require('webpack');
var path = require('path');
var extractTextWebPackPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new extractTextWebPackPlugin({
	filename: 'styles.css'
});

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.scss$/,
			use: extractPlugin.extract({
				use: ['css-loader', 'sass-loader']
			})
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
	        	options: {
	          		presets: ['env']
	        	}
	        }
		}
		]
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin({/* .. */}),
		extractPlugin
	]
}