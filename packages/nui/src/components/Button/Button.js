import { h } from 'vue';

export default {
  name: 'NButton',
  props: {
    color: {
      type: String,
      default: 'info',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md'
    },
    href: {
      type: String,
    },
    target: {
      type: String,
    },
  },
  render() {
    return h(
      this.$props.href ? 'a' : 'div',
      {
        class: [
          'n-button',
          `border-${this.$props.color}`,
          this.$props.size,
          this.$props.plain
            ? `text-${this.$props.color}`
            : `bg-${this.$props.color}`,
          { disabled: this.$props.disabled, round: this.$props.round },
        ],
        href: this.$props.href ? this.$props.href : null,
        target: this.$props.target ? this.$props.target : null,
      },
      this.$slots.default?.()
    );
  },
};
