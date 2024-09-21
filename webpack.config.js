const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Set mode to 'development' for development builds
    entry: './src/index.js', // Entry point for your JavaScript files
    output: {
        filename: 'bundle.js', // Output bundle name
        path: path.resolve(__dirname, 'dist'), // Output directory (absolute path)
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Use babel-loader for .js files
                exclude: /node_modules/, // Exclude node_modules directory
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for modern JavaScript and React
                    },
                },
            },
            {
                test: /\.css$/, // Handle CSS files
                use: ['style-loader', 'css-loader'], // Inject CSS into the DOM
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Path to the template HTML file (your index.html)
            filename: 'index.html', // Output HTML file in dist directory
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
        },
        devMiddleware: {
            publicPath: '/', // Serve the bundle from the root of the server
        },
        historyApiFallback: true, // Fallback to index.html for client-side routing
        port: 3000, // Port for the development server
        open: true, // Open the browser when the server starts
        hot: true, // Enable hot module replacement
    },
};