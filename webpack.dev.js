const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		https:true,
		compress:false,
		port:44390,
		host:'127.0.0.1',
		hot:true,
		liveReload:true,
		writeToDisk: true,
		serveIndex: true,
	}
});
