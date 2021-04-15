<template><div>
  <h3>🎉hi, I am {{message}}</h3>
  <n-example />
</div></template><script>
export default {
  data() {
    return {
      message: 'NUI Demo',
    };
  },
};
</script><style>
  h3 {
    color: red;
  }
</style>