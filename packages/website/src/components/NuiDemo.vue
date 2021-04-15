<template>
  <div class="nui-demo">
    <div class="nui-demo-show">
      <slot name="show"></slot>
    </div>
    <div :class="`nui-demo-block ${isOpen ? 'open' : 'close'}`">
      <div class="nui-demo-des">
        <slot name="des"></slot>
      </div>
      <div class="nui-demo-code">
        <slot name="code"></slot>
      </div>
    </div>
    <div class="nui-demo-button" @click="isOpen = !isOpen">
      {{ isOpen ? "关闭" : "展开" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
.nui-demo {
  background-color: #eeeeee;

  .nui-demo-block {
    overflow: hidden;

    &.open {
      max-height: 10000px;
      transition: all 0.5s;
    }

    &.close {
      max-height: 0;
    }

    .nui-demo-des {
      color: #999999;
    }
  }

  .nui-demo-button {
    color: #ffffff;
    background-color: #909090;
    text-align: center;
  }
}
</style>
