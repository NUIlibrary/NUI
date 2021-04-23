<template>
  <n-row
    class="header shadow-3 px-5 pt-1 mb-5"
    justify="space-evenly"
    align="center"
  >
    <n-col :span="5" @click="$router.push({ name: 'Home' })">
      <img src="@/assets/logo.png" class="logo" />
      <span class="hero-2">UI</span>
    </n-col>
    <n-col :span="3">
      <span class="temp-h2">Languages: </span>
      <span @click="setLanguage('zh-CN')">中文 </span>
      <span @click="setLanguage('en-US')">English </span>
    </n-col>
    <n-col :span="3"
      >Link:
      <n-link
        color="primary"
        href="https://github.com/NUIlibrary/NUI"
        target="blank"
      >
        <n-icon i="github-fill" />
        GitHub
      </n-link>
      <n-link
        color="primary"
        href="https://www.npmjs.com/package/@nuilibrary/nui"
        target="blank"
      >
        <n-icon i="N" />
        npm
      </n-link>
    </n-col>
  </n-row>
</template>

<script>
export default {
  methods: {
    setLanguage(lang) {
      localStorage.NUI_LANGUAGE = lang;
      location.reload();
    },
  },
};
</script>

<style lang="stylus" scoped>
.header{
  img{
    height 2.5rem
  }
}
</style>
