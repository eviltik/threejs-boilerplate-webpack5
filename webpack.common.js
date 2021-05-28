const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm

module.exports = {
	entry: {
		//'main':'./src/js/main.js',
		//'worker-canvastext':'/src/js/workers/canvasText.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		clean:true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns:[
				{ from: '**/*', to: './', context: "src/static", }
			]
		}),
	],
};

