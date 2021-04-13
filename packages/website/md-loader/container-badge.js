module.exports = (md) => {
  const re  = /^badge-(tip|other|warn|danger)\s*(.*)$/
  return {
    validate: function (params) {
      return params.trim().match(re);
    },
    render: function (tokens, idx) {
      const m = tokens[idx].info.trim().match(re);
      if (tokens[idx].nesting === 1) {
        return `<div class="badge badge-${md.utils.escapeHtml(m[1])}"><p class="badge-title">${md.utils.escapeHtml(m[2])}</p>\n`;
      } else {
        return '</div>\n';
      }
    }
  }
}