import { h } from 'vue';

export default {
  name: 'NAppMain',
  data() {
    return {
      height: '56px',
    };
  },
  mounted() {
    this.getHeight();
  },
  methods: {
    getHeight() {
      let appBarElementHeight = 0;
      const appBarElement = document.querySelector('.n-app-bar');
      appBarElement &&
        (appBarElementHeight = window.getComputedStyle(appBarElement).height);
      this.height = appBarElementHeight;
    },
  },
  render() {
    return h(
      'div',
      {
        class: ['n-app-main'],
        style: `top:${this.$data.height}`,
      },
      this.$slots?.default()
    );
  },
};
