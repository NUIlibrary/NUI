import { h } from 'vue';

export default {
  name: 'NCardTitle',
  render() {
    return h(
      'div',
      {
        class: 'n-card-title',
      },
      this.$slots.default?.()
    );
  },
};
