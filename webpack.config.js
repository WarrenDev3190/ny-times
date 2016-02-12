var webpack = require('webpack'),
	path    = require('path');


	module.exports = {
		entry: path.join(__dirname, 'app/src/index'),
		output: {
			path: path.join(__dirname, 'public/dist'),
			filename: 'bundle.js',
			publicPath: '/static/'
		},
		devTools: ['eval-source-maps'],
		plugins: [new webpack.NoErrorsPlugin()],
		module: {
			loaders : [
				{
					test: /\.js?$/,
					loaders: ['babel'],
					include: path.join(__dirname, 'app/src'),
					exclude: /node_modules/
				},
				{
					test: /\.scss?$/,
					loaders: ['style','css','sass']
				}
			]
		}
	}