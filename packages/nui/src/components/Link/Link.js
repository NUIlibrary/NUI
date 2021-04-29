import { h } from 'vue';

export default {
  name: 'NLink',
  props: {
    color: {
      type: String
    },
    underline: {
      type: Boolean,
      default: true,
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
            'no-underline': !this.$props.underline || this.$props.disabled,
            disabled: this.$props.disabled,
          },
        ],
      },
      this.$slots.default?.()
    );
  },
};
