// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path');

module.exports = {
 entry: './src/app.js',
 output: {
  path: __dirname + '/dist',
  filename: 'app.bundle.js'
 },
 module:{
     rules:[
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }, 
      {
        test: /\.(png|jp(e*)g)$/,
        loader: 'url-loader',
        options: { 
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
        } 
      }, 
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
     ]
 },
 devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    port: 9000
},
 plugins: [
  new HtmlWebpackPlugin({
   title: 'Project Demo',
   minify: {
    collapseWhitespace: true
   },
   hash: true,
   template: './src/index.html'
  })
 ]
}