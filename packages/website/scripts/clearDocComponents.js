// 用于清除 @/docComponents 文件夹下的文件
const fs = require('fs');
const BASEDOCSDIR = './src/docComponents/';

const fileNameList = fs.readdirSync(BASEDOCSDIR);

fileNameList.forEach((fileName) => {
  console.log(fileName);
  fs.unlink(`${BASEDOCSDIR}${fileName}`, function(error) {
    if (error) {
      console.log(error);
      return false;
    }
  });
});

console.log("@/docComponents/ 目录已清空");