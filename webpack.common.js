const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

console.log(process.env.dll)

module.exports = {
    entry: path.join(__dirname, "./src/app.js"),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            //Vue loader. Says to webpack that files with .vue extension need to be processed by the vue-loader plugin
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, "./public/index.html"),
        }),
        new VueLoaderPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.join(__dirname, `./dll/${process.env.dll}/vender_lib-manifest.json`),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, `./dll/${process.env.dll}`),
                    to: path.resolve(__dirname, './dist/dll'),
                },
            ],
        }),
    ],
};
