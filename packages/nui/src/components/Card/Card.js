import { h } from 'vue';

export default {
  name: 'NCard',
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'fg',
    },
    flat: {
      type: Boolean,
      default: false,
    }
  },
  render() {
    return h(
      'div',
      {
        class: [
          'n-card',
          this.$props.flat ? null : 'shadow-2',
          { hover: this.$props.hover },
          `bg-${this.$props.color}`,
        ],
      },
      this.$slots.default?.()
    );
  },
};
