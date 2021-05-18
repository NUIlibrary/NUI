<template>
  <n-row class="header" justify="space-evenly" align="center">
    <n-col :span="5" :xs="20" @click="$router.push({ name: 'Home' })">
      <img src="@/assets/logo.png" class="logo" />
      <span class="hero-2">UI</span>
    </n-col>
    <n-col :span="4" :xs="20">
      <span class="temp-h2">多语言: </span>
      <n-link nounderline @click="setLanguage('zh-CN')">中文 </n-link> ｜
      <n-link nounderline @click="setLanguage('en-US')">English </n-link>
    </n-col>
    <n-col :span="5" :xs="20">
      <span class="temp-h2">链接: </span>
      <n-link
        color="primary"
        href="https://github.com/NUIlibrary/NUI"
        target="_blank"
      >
        <n-icon i="github-fill" />
        GitHub
      </n-link>
      ｜
      <n-link
        color="primary"
        href="https://www.npmjs.com/package/@nuilibrary/nui"
        target="_blank"
      >
        <n-icon i="N" />
        npm
      </n-link>
    </n-col>
    <n-col :span="6" :xs="20">
      <span class="temp-h2">主题: </span>
      <n-link nounderline @click="changeDefaultTheme('light')">浅色</n-link> ｜
      <n-link nounderline @click="changeDefaultTheme('dark')">深色</n-link> ｜
      <n-link nounderline @click="changeDefaultTheme('nenu')">NENU</n-link> ｜
      <n-link nounderline @click="changeDefaultTheme(['nenu', 'dark'])"
        >自动</n-link
      >
    </n-col>
  </n-row>
</template>

<script>
export default {
  methods: {
    setLanguage(newLanguage) {
      const oldLanguage = localStorage.getItem('NUI_LANGUAGE');
      const oldFullPath = this.$route.fullPath;
      const newFullPath = oldFullPath.replace(oldLanguage, newLanguage);
      localStorage.setItem('NUI_LANGUAGE', newLanguage);
      this.$router.push(newFullPath);
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
  .temp-h2{
    font-size 1.1rem
    font-weight 900
    }
}
</style>
