import { h } from 'vue';

export default {
  name: 'NCardSubtitle',
  render() {
    return h(
      'div',
      {
        class: 'n-card-subtitle',
      },
      this.$slots.default?.()
    );
  },
};
