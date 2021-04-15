function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[0].trim() : '';
}

function stripStyle(content) {
  const result = content.match(/<(style[\s+scoped]*)*>([\s\S]+)<\/style>/);
  return result && result[2] ? result[0].trim() : '';
}

module.exports = {
  stripTemplate,
  stripScript,
  stripStyle
};
