const fs = require('fs');
const MarkdownIt = require('markdown-it');
const MarkdownItContainer = require('markdown-it-container');
const hljs = require('highlight.js');
// 自定义的 container 配置
const ContainerBadge = require('./container-badge');
const ContainerDemo = require('./container-demo');
const { stripTemplate, stripScript ,stripStyle} = require('./util');

let id = 0; // demo 的 id

module.exports = function(src) {
  console.log("Markdown 开始分割线----------\n");
  console.log(`第 ${id} 次循环`);
  const md = MarkdownIt({
    html: true,
    typographer: true,
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs" v-pre><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>'
          );
        } catch (__) {}
      }

      return (
        '<pre class="hljs" v-pre><code>' + md.utils.escapeHtml(str) + '</code></pre>'
      );
    },
  });

  md.use(MarkdownItContainer, 'badge', ContainerBadge(md));
  md.use(MarkdownItContainer, 'demo', ContainerDemo(md));

  const content = md.render(src);

  // 以下是处理  NUI Demo 的逻辑
  const startTag = '<!--nui-demo-show:';
  const startTagLen = startTag.length;
  const endTag = ':nui-demo-show-->';
  const endTagLen = endTag.length;

  // let componenetsString = '';
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);

  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));

    const commentContent = content.slice(
      commentStart + startTagLen,
      commentEnd
    ); // demo 代码块
    const html = stripTemplate(commentContent); // demo 中纯 html 代码块
    const script = stripScript(commentContent); // demo 中纯 script 代码块
    const style = stripStyle(commentContent); // demo 中纯 style 代码块
    const demoComponentName = `NuiDemo${id}`; // 组件名
    // 将上述代码块写入组件文件
    fs.writeFile(
      `./src/docComponents/${demoComponentName}.vue`,
      `<template>${html}</template>${script}${style}`,
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );

    output.push(`<template v-slot:show><${demoComponentName} /></template>`);

    // 重新计算下一次的位置
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }

  output.push(content.slice(start));

  console.log("Markdown 结束分割线----------\n");

  return `
  <template>
    <div class="nui-doc">
      ${output.join('')}
    </div>
  </template>
  `;
};
