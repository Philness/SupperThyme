module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    // root: __dirname,
    alias: {
      // paths to components go here, but the syntax has changed
      // make sure the name here matches the name given in module.exports for each component
      // or else you're going to have a bad time
      // use <Name of component>: path.resolve(__dirname, "path to component")
    },
    extensions: [" ", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  // this allows you to see the file as you typed it when you look in the debugger, instead of bundle.js
  devtool: "cheap-module-eval-source-map"
};
