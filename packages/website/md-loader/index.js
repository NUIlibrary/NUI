const MarkdownIt = require('markdown-it');
const MarkdownItContainer = require('markdown-it-container');
const hljs = require('highlight.js');
// 自定义的 container 配置
const ContainerBadge = require('./container-badge');
const ContainerDemo = require('./container-demo');

module.exports = function(src) {
  const md = MarkdownIt({
    content: true,
    typographer: true,
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>'
          );
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
      );
    },
  });

  md.use(MarkdownItContainer, 'badge', ContainerBadge(md)).use(
    MarkdownItContainer,
    'demo',
    ContainerDemo(md)
  );

  const html = md.render(src);

  return `
  <template>
    <div class="nui-doc">
      ${html}
    </div>
  </template>
  `;
};
