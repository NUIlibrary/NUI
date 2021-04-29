<template>
  <n-row class="header" justify="space-evenly" align="center">
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
    <n-col :span="6">
      <n-button @click="changeDefaultTheme('dark')">深色</n-button>
      <n-button @click="changeDefaultTheme(['nenu', 'dark'])">自动</n-button>
      <n-button @click="changeDefaultTheme('nenu')">浅色</n-button>
    </n-col>
  </n-row>
</template>

<script>
export default {
  methods: {
    setLanguage(language) {
      localStorage.NUI_LANGUAGE = language;
      this.$router.push({ name: `${language}/Docs` });
    },
    changeDefaultTheme(defaultTheme) {
      localStorage.setItem('NUI_DEFAULT_THEME', JSON.stringify(defaultTheme));
      this.$nui.setOptions({ defaultTheme });
    },
  },
  created() {
    const defaultTheme = localStorage.getItem('NUI_DEFAULT_THEME');
    defaultTheme && this.changeDefaultTheme(JSON.parse(defaultTheme));
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
