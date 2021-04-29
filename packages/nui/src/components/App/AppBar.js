import { h } from 'vue';

export default {
  name: 'NAppBar',
  props: {
    color: {
      type: String,
      default: 'bg',
    },
    flat: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    return h(
      'div',
      {
        class: ['n-app-bar', `bg-${this.$props.color}`, this.$props.flat?null:'shadow-1'],
      },
      this.$slots?.default()
    );
  },
};
