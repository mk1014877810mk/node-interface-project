const express = require('express');
const router = new express.Router();
const path = require('path');
const indexHandle = require('../handle/index');
const submitHandle = require('../handle/submit');
const detailsHandle = require('../handle/details');


// 页面
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../template/index.html'));
});
router.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../template/index.html'));
});
router.get('/submit', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../template/submit.html'));
});
router.get('/details', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../template/details.html'));
});


// 接口
router.get('/api/indexList', indexHandle.index);
router.get('/api/getAdd', submitHandle.getAdd);
router.post('/api/postAdd', submitHandle.postAdd);
router.get('/api/listDetails', detailsHandle.details);

// 静态文件
router.get('/favicon.ico', (req, res, next) => {
  req.url = '/resources/images/logo.ico';
  next();
});
router.use('/resources', express.static(path.resolve(__dirname, '../resources')));
router.use('/asset', express.static(path.resolve(__dirname, '../asset')));

module.exports = router;