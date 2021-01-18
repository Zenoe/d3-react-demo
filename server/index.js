const express = require('express');
const pino = require('express-pino-logger')();

const webpack = require('webpack');
const path = require('path');


const app = express();
app.use(pino);
const compiler = webpack(require('../webpack.config.js')({env:'pro'}));

app.use(require('webpack-dev-middleware')(compiler, {
  // "env.env": 'pro',
  noInfo: true,
  publicPath: '/'
}));

app.use('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

// app.listen(3003);
app.listen(3009);

// const express = require('express');
// const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();
// const path = require('path')

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);


// // There seems to be a loopback occuring, since the * rule is serving a index.html every time,
// // and when bundle.js is not found, it will serve index.html instead, thus trying to parse < as javascript.
// // so I need this statement app.use...
// app.use(express.static(path.join(__dirname, '../dist')))

// app.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname, 'index.html'));
// });

// app.listen(3003, '0.0.0.0', () =>
//   console.log('Express server is running on localhost:3003')
// );


// app.get('/*', function(req, res) {
//   res.sendFile('index.html', function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })
