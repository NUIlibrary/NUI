import { h } from 'vue'

export default {
  name: 'NRow',
  props: {
    tab: {
      type: String,
      default: 'div'
    },
    justify: {
      type: String,
      default: 'flex-start'
    },
    align: {
      type: String,
      default: 'flex-start'
    },
    gutter: {
      type: Number
    }
  },

  render() {
    return h(this.$props.tab, {
      class: ['n-row',
        `justify-content-${this.$props.justify}`,
        `align-items-${this.$props.align}`
      ]
    }, this.$slots.default?.());
  }
}