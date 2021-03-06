// Module dependencies
const webpack = require('webpack')
const express = require('express')
const path = require('path')
const port = 3000

var webpackDevMiddleware = require("webpack-dev-middleware")
const config = require('./webpack.config.js')

const app = express()
const compiler = webpack(config)

// index file to render
const index = path.join(__dirname, './public/index.html')

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

// Static files
app.use('/public', express.static(path.join(__dirname, 'public')))

// Home route
app.get('/', function (req, res) {
    res.sendFile(index)
})

// api routes
app.use('/api', require('./api/apiSearch'))

// 404
app.get('*', function (req, res) {
    res.sendFile(index)
})

// Listen to...
var server = app.listen(port, function () {
    console.log('- MeliTest app listening at %s on port %s!', server.address().address, server.address().port);
})
