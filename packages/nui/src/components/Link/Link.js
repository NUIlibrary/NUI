import { h } from 'vue';

export default {
  name: 'NLink',
  props: {
    color: {
      type: String
    },
    nounderline: {
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
      this.$props.disabled?'span':'a',
      {
        class: [
          'n-link',
          this.$props.color?`text-${this.$props.color}`:null,
          {
            nounderline: this.$props.nounderline || this.$props.disabled,
            disabled: this.$props.disabled,
          },
        ],
      },
      this.$slots.default?.()
    );
  },
};
