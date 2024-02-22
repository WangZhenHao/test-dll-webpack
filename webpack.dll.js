var path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: process.env.dll,
    entry: {
        vender_lib: ["vue", "axios", "element-plus"],
    },
    output: {
        path: path.join(__dirname, `./dll/${process.env.dll}`),
        filename: "vender_lib.js",
        library: "vender_lib",
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, `./dll/${process.env.dll}`, "vender_lib-manifest.json"),
            name: "vender_lib",
        }),
    ],
};
