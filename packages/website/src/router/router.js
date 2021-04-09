import docsDir from '@/docs/docsDir.json'

let generateRutersByDir = (dirName) => {
  let routers = [];
  for (const key in docsDir) {
    if (docsDir.hasOwnProperty.call(docsDir, key)) {
      const fileName = docsDir[key];
      routers.push({
        path: key,
        name:`Docs${key}`,
        component: () => import(/* webpackChunkName: "docs" */ `../docs/${dirName}/${fileName}`),
      })
    }
  }
  return routers;
}

export default generateRutersByDir;