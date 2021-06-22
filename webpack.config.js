/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  target: "node",
  mode: "production",
  entry: slsw.lib.entries,
  resolve: {
    extensions: [".ts", "tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: "ts-loader",
        exclude: [
          [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, ".serverless"),
            path.resolve(__dirname, ".webpack"),
          ],
        ],
      },
    ],
  },
};
