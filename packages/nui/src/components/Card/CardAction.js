import { h } from 'vue';

export default {
  name: 'NCardAction',
  render() {
    return h(
      'div',
      {
        class: 'n-card-action',
      },
      this.$slots.default?.()
    );
  },
};
