const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Mode for development builds
    entry: './src/index.js', // Entry point for JavaScript files
    output: {
        filename: 'bundle.js', // Name of the bundled output file
        path: path.resolve(__dirname, 'dist'), // Directory for the output file
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply Babel loader for JavaScript files
                exclude: /node_modules/, // Exclude files from node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets for React and modern JS
                    },
                },
            },
            {
                test: /\.css$/, // Load CSS files
                use: ['style-loader', 'css-loader'], // Inject styles into the DOM
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Path to the template HTML file
            filename: 'index.html', // Name of the output HTML file
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
        },
        historyApiFallback: true, // Ensures client-side routing with React Router works
        port: 3000, // Port number for the local server
        open: true, // Automatically open the browser when the server starts
        hot: true, // Enable hot module replacement for development
    },
};