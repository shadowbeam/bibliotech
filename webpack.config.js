var webpack = require('webpack');


module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.tsx'

    ],
    output: {
        filename: './dist/bundle.js'
        // publicPath: '/static/'

    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }

            },
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    devServer: {
        contentBase: './src', // New
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
