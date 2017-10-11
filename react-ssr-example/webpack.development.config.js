const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new ExtractTextPlugin('style.css')
];

module.exports = [
	{
		name: 'client',
		target: 'web',
		entry: './app/Client.jsx',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'client.js',
			publicPath: '/static/',
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		devtool: 'eval-source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
        {
          test: /(\.css|\.scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'postcss-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ]
          })
        }
			],
		},
    plugins: plugins
	},
	{
		name: 'server',
		target: 'node',
		entry: './server/Server.jsx',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			publicPath: '/static/',
		},
		devtool: 'eval-source-map',
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
        {
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: "isomorphic-style-loader",
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'postcss-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ]
					})
				}
			],
		},
    plugins: plugins
	}
];
