import { h } from 'vue';

export default {
  name: 'NContainer',
  render() {
    return h(
      'div',
      {
        class: 'n-container',
      },
      this.$slots.default?.()
    );
  },
};
