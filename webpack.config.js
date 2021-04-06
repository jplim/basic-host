const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			options: {
				presets: ["@babel/env"]
			}
		}, {
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		}]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 8084,
		publicPath: 'http://localhost:8084/dist/',
		hotOnly: true,
		proxy: {
			'/nsc/config': {
				// target: 'https://rizinginnovation-playground-sap-netw-gis-srv.cfapps.us10.hana.ondemand.com',
				// target: 'https://rizinginnovation-playground-sap-nsaa-srv.cfapps.us10.hana.ondemand.com/netgeoconfig/get(clientId=%2776785e66-3032-4a27-b53f-4373dd135ce0%27)',
				target: 'https://gist.githubusercontent.com/jplim/66e94dcc6fddcce7dd3b3070a5ea2e1c/raw/b2711cc104fcf66ee80de86f18f3762ade56892e/config.json',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/nsc/config': ''
				}
			}
		}
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}; 