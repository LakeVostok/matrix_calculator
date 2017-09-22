const { resolve } = require("path");
const PORT = process.env.PORT ? process.env.PORT : 8080;

module.exports = {
    entry:  [
        "babel-polyfill",
        "react-hot-loader/patch",
        "./src/index"
    ],

    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test   : /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
                loader : "file-loader",
                options: {
                    publicPath: "/dist/"
                }
            }
        ]
    },

    devServer: {
        publicPath: "/dist/",
        host: "127.0.0.1",
        port: PORT,
        noInfo: true,
        open: true
    }
};
