// production - time: 3546ms, size: 117 KiB 
// development - time: 15892ms, size: 627 KiB

const path = require('path');

module.exports = (env) => {
    const environment = env;
    return {
        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + environment + '.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                	test: /\.css$/,
                	use: [
                		{ loader: 'style-loader'},
                		{
                			loader: 'css-loader',
                			options: {
                				modules: true
                			}
                		}

                	]
                }
            ]
        }
    };
};