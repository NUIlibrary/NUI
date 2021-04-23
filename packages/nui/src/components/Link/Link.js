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
      'a',
      {
        class: [
          'n-link',
          this.$props.color?`text-${this.$props.color}`:'color-initial',
          {
            'no-underline': !this.$props.underline,
            disabled: this.$props.disabled,
          },
        ],
      },
      this.$slots.default?.()
    );
  },
};
