const MarkdownIt = require('markdown-it')
const MarkdownItContainer = require('markdown-it-container')
// 自定义的 container 配置
const ContainerBadge = require('./container-badge')
const ContainerDemo = require('./container-demo')

module.exports = function (src) {
  const md = MarkdownIt({
    content: true,
    typographer: true,
  })

  md.use(MarkdownItContainer, 'badge', ContainerBadge(md))
    .use(MarkdownItContainer, 'demo', ContainerDemo(md));

  const html = md.render(src);

  return `
  <template>
    <div class="nui-doc">
      ${html}
    </div>
  </template>
  `
}
