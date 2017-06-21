var webpack = require('webpack');
var path = require('path');
var extractTextWebPackPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new extractTextWebPackPlugin({
	filename: 'styles.css'
});
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		//publicPath: 'dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.scss$/,
			use: extractPlugin.extract({
				use: ['css-loader', 'sass-loader']
				//fallback: "style-loader",
      			//use: "css-loader"
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
		},
		{
			test: /\.html$/,
			use: ['html-loader']
		},
		{
			test: /\.(jpg|png)$/,
			use: {
				loader:'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'img/',
					//publicPath: 'img/'
				}
			}
		}
		]
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin({/* .. */}),
		extractPlugin,
		new htmlWebpackPlugin({
			template: 'src/index.html'
		}),
		//-- Webpack 3
		new webpack.optimize.ModuleConcatenationPlugin()
	]
}