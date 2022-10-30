const path = require('path');
const glob = require('glob')
const purgecss = require('@fullhuman/postcss-purgecss')

const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        reservation: './src/js/reservation.js',
        error: './src/js/404.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer'),
                                    purgecss({
                                        content: ['./*.html', './**/*.html', './*.js', './**/*.js', './dist/**/*.html']
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
}