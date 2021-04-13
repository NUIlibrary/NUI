import { h } from "vue";

export default {
  name: "NDemo",
  data() {
    return {
      code: "",
    };
  },
  mounted() {
    this.code = this.findCode();
  },
  methods: {
    findCode() {
      let childrenNodeList = this.$slots.default()
        ? this.$slots.default()
        : null;
      let code = "";
      childrenNodeList &&
        childrenNodeList.forEach((childrenNode) => {
          if (childrenNode.type == "pre") {
            code = childrenNode.children[0].children;
          }
        });
      return code;
    },
  },
  render() {
    return h(
      "div",
      {
        class: "n-demo",
      },
      [this.$slots.default?.(), this.$data.code]
    );
  },
};
