import { h } from 'vue';

export default {
  name: 'NCardText',
  render() {
    return h(
      'div',
      {
        class: 'n-card-text',
      },
      this.$slots.default?.()
    );
  },
};
