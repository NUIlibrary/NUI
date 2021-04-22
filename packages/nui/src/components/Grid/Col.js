import { h } from 'vue'

export default {
  name: 'NCol',
  props: {
    tab: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 20
    },
    xs: {
      type: Number
    },
    sm: {
      type: Number
    },
    md: {
      type: Number
    },
    ls: {
      type: Number
    },
    xl: {
      type: Number
    }
  },

  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'NRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },

  render() {
    return h(this.$props.tab, {
      class: ['n-col',
        `span-${this.$props.span}`,
        this.$props.xs ? `xs-${this.$props.xs}` : '',
        this.$props.sm ? `sm-${this.$props.sm}` : '',
        this.$props.md ? `md-${this.$props.md}` : '',
        this.$props.lg ? `ls-${this.$props.lg}` : '',
        this.$props.xl ? `xl-${this.$props.xl}` : '',
      ],
      style: this.gutter ? `padding:0 ${this.gutter / 2}px` : ''
    }, this.$slots.default?.());
  }
}