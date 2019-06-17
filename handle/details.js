const common = require('../common/common');
const config = require('../config');

module.exports = {
  details(req, res) {
    const id = req.query.id;
    common.readFile(config.indexStr, (data) => {
      const list = JSON.parse(data);
      let detailData = {};
      for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) {
          detailData = list[i];
          break;
        }
      };
      common.setHeader(res);
      res.json({ status: 0, data: detailData });
    });
  }
}