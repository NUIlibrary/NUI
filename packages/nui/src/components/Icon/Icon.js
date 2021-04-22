import { h } from 'vue';

export default {
  name: 'NIcon',
  props: {
    i: {
      type: String,
    },
  },
  render() {
    return h(
      'svg',
      {
        class: 'n-icon',
        'aria-hidden': 'true',
      },
      h('use', {
        'xlink:href': `#nui-i-${this.$slots.default?.()[0].children || this.$props.i}`,
      })
    );
  },
};
