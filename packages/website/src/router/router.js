//递归获取  文件夹下的所有 .md 文件
const files = require.context(`@/docs`, true, /\.md$/);

const docsRouteGenerator = (language) => {
  let pages = {};
  files.keys().forEach((key) => {
    if (key.startsWith(`./${language}`)) {
      pages[key.replace(/(\.\/|\.md)/g, '').replace(`${language}/`,'')] = files(key).default;
    }
  });
  //生成路由
  let routers = [];
  Object.keys(pages).forEach((fileName) => {
    routers.push({
      path: `${fileName}`,
      name: `${language}/${fileName}`,
      component: pages[fileName],
    });
  });
  return routers;
};

export default docsRouteGenerator;
