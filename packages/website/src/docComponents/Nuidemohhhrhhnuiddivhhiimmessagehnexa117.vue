<template><div>
  <h3>🎉Hi, I'm {{message}}</h3>
  <n-example />
</div></template><script>
export default {
  data() {
    return {
      message: 'a NUI demo component. I\'m form markdown file.',
    };
  },
};
</script><style scoped>
  h3 {
    color: red;
  }
</style>