const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const config = require('./config');

// const proxy = require('http-proxy-middleware'); // 跨域

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(proxy({ target: 'http://localhost:8080/', changeOrigin: true }), router);
app.use(router);
// app.use('/api', proxy({target: 'http://10.0.22.135:8080/', changeOrigin: true}));

app.listen(config.port, () => {
  console.log('http://localhost:' + config.port);
})