const fs = require('fs');
module.exports = {
  
  readFile(path, callback) {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw err;
      callback && callback(data);
    })
  },

  writeFile(path, data, callback) {
    fs.writeFile(path, data, 'utf8', (err) => {
      callback && callback(err);
    })
  },

  setHeader(res){
    
    res.setHeader("Access-Control-Allow-Origin", "http://10.0.22.135:8080"); 
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080"); 
    
  }
}