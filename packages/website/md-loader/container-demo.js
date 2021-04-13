module.exports = (md) => {
  const re = /^demo\s*(.*)$/
  return {
    validate: function (params) {
      return params.trim().match(re);
    },
    render: function (tokens, idx) {
      const m = tokens[idx].info.trim().match(re);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<n-demo>
          ${description ? '<p class="n-demo-des">' + description + '</p>' : ''}
        `;
      } else {
        return '</n-demo>\n';
      }
    }
  }
}
