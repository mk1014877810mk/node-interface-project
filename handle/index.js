const common = require('../common/common');
const config = require('../config');

module.exports = {
  index(req, res) {
    common.readFile(config.indexStr, (data) => {
      common.setHeader(res);
      res.json({ status: 0, data: { list: JSON.parse(data) } });
    });
  }
}