import { h } from 'vue';

export default {
  name: 'NButton',
  props: {
    color: {
      type: String,
      default: 'white-lighten1',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    return h(
      'div',
      {
        class: [
          'n-button',
          `bg-${this.$props.color}`,
          { disabled: this.$props.disabled },
        ],
      },
      this.$slots.default?.()
    );
  },
};
