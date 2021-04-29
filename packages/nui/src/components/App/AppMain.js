import { h } from 'vue';

export default {
  name: 'NAppMain',
  render() {
    return h('div', {
        class:['n-app-main']
    }, this.$slots?.default());
  },
};
