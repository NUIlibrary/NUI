<template><div>
  <h3>🎉Hi, I am {{message}}</h3>
  <n-example />
</div></template><script>
export default {
  data() {
    return {
      message: 'NUI demo component.',
    };
  },
};
</script><style>
  h3 {
    color: red;
  }
</style>