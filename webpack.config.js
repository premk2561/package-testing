const path = require('path');
const nodeExternal = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devServer: {
        watchContentBase: true,
    },
    externalsPresets: { node: true },
    externals: [nodeExternal()],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] 
            }
        ]
    }
}