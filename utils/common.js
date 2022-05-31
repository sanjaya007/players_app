const fs = require("fs")

const makeDir = (dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
};

const uploadFile = (dir, file, fileName) => {
    let ok = true;
    makeDir(dir);
    file.mv(dir + fileName, function (err) {
      if (err) {
        ok = false;
      }
    });
    return ok;
};

module.exports = {uploadFile}