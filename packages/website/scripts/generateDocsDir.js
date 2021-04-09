// 读取 docs 子目录并写入 docs.json 文件
const path = require("path");
const fs = require("fs");
const BASEDOCSDIR = "./src/docs/"

// 文档目录以简体中文子目录为准
const fileNameList = fs.readdirSync(BASEDOCSDIR + 'zh-CN');
let fileNameObj = {};
fileNameList.forEach(fileFullName => {
  fileName = fileFullName.replace(/(.*\/)*([^.]+).*/ig,"$2")
  fileNameObj[fileName] = fileFullName;
});
const fileNameContent = JSON.stringify(fileNameObj, null, 2);
const file = path.join(BASEDOCSDIR, 'docsDir.json');
fs.writeFile(file, fileNameContent, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('文档目录文件已更新 ' + file);
});