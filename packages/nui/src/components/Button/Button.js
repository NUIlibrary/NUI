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
          this.$props.plain
            ? `text-${this.$props.color}`
            : `bg-${this.$props.color}`,
          { disabled: this.$props.disabled },
        ],
        href: this.$props.href ? this.$props.href : null,
        target: this.$props.target ? this.$props.target : null,
      },
      this.$slots.default?.()
    );
  },
};
