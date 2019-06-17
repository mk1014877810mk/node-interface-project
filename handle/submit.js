const common = require('../common/common');
const config = require('../config');

module.exports = {
  postAdd(req, res) {
    common.readFile(config.indexStr, data => {
      const list = JSON.parse(data);
      list.push({
        title: req.body.title,
        url: req.body.url,
        text: req.body.text,
        id: list.length
      });
      common.writeFile(config.indexStr, JSON.stringify(list), err => {
        if (err) throw err;
        common.setHeader(res);
        res.json({ status: 0, msg: 'ok' });
      })
    })
  },
  getAdd(req, res) {
    common.readFile(config.indexStr, data => {
      const list = JSON.parse(data);
      list.push({
        title: req.query.title,
        url: req.query.url,
        text: req.query.text,
        id: list.length
      });
      common.writeFile(config.indexStr, JSON.stringify(list), err => {
        if (err) throw err;
        common.setHeader(res);
        res.json({ status: 0, msg: 'ok' });
      })
    })
  }
}