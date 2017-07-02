var path = require('path');
const webpack = require('webpack');

// plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// var StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader'
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: [ 'es2015', 'react' ] }
            },
            {
                test: /\.(scss|css)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include : path.join(__dirname, 'public/images'),
                use: [
                   'file-loader'
                ]
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new StyleLintPlugin({
        //   configFile: '.stylelintrc',
        //   context: 'src/scss',
        //   files: '**/*.scss',
        //   failOnError: false,
        //   quiet: false
        // }),
        new ExtractTextPlugin('style.css'),
        new webpack.SourceMapDevToolPlugin({
            test: [/\.js$/, /\.jsx$/],
            exclude: 'vendor',
            filename: "app.[hash].js.map",
            append: "//# sourceMappingURL=[url]",
            moduleFilenameTemplate: '[resource-path]',
            fallbackModuleFilenameTemplate: '[resource-path]',
        }),
        new OptimizeCssAssetsPlugin()
    ]
};
