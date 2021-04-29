import { h } from 'vue';

export default {
  name: 'NCol',
  props: {
    tab: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 20,
    },
    xs: {
      type: Number,
      default: -1,
    },
    sm: {
      type: Number,
      default: -1,
    },
    md: {
      type: Number,
      default: -1,
    },
    lg: {
      type: Number,
      default: -1,
    },
    xl: {
      type: Number,
      default: -1,
    },
  },

  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'NRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
  },

  render() {
    return h(
      this.$props.tab,
      {
        class: [
          'n-col',
          `span-${this.$props.span}`,
          this.$props.xs !== -1 ? `xs-${this.$props.xs}` : '',
          this.$props.sm !== -1 ? `sm-${this.$props.sm}` : '',
          this.$props.md !== -1 ? `md-${this.$props.md}` : '',
          this.$props.lg !== -1 ? `ls-${this.$props.lg}` : '',
          this.$props.xl !== -1 ? `xl-${this.$props.xl}` : '',
        ],
        style: this.gutter ? `padding:0 ${this.gutter / 2}px` : '',
      },
      this.$slots.default?.()
    );
  },
};
