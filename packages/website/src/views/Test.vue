<template>
  <div class="test">
    <h1>This is a test page</h1>
    <n-example></n-example>
    <n-row justify="center" align="center" :gutter="10">
      <n-col class="my-col bg-red" v-for="(item, index) in 10" :key="index" :span="20"></n-col>
    </n-row>
  </div>
</template>

<style lang="stylus" scoped>
.my-col {
  height: 3rem;
  // width: auto;
  // background-color: #121212;

  // &:nth-child(odd) {
  //   background-color: #ababab;
  // }

  // &:nth-child(4) {
  //   height: 3rem;
  // }
}
</style>