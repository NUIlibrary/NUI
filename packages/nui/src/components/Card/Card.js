import { h } from 'vue';

export default {
  name: 'NCard',
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    return h(
      'div',
      {
        class: ['n-card', { hover: this.$props.hover }],
      },
      this.$slots.default?.()
    );
  },
};
