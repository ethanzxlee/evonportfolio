// var finalhandler = require('finalhandler')
// var http = require('http')
// var serveStatic = require('serve-static')

// // Serve up public/ftp folder
// var serve = serveStatic('public', {'index': ['index.html', 'index.htm']})

// // Create server
// var server = http.createServer(function onRequest (req, res) {
//   // serve(req, res, finalhandler(req, res))
//   // res.redirect(301, 'https://evon-portfolio.firebaseapp.com');
// })

// // Listen
// server.listen(process.env.PORT || 8080)

const express = require('express');
const app = express();

app.get('/', (req, res) => res.redirect(301, 'https://evon-portfolio.firebaseapp.com'));

app.listen(process.env.PORT || 8080);