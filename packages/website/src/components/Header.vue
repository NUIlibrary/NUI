<template>
  <div class="header">
    <h1 @click="$router.push({ name: 'Home' })" class="nav-left">
      <img src="@/assets/logo.png" class="logo" />UI
    </h1>
    <div class="nav-right">
      <p>
        <span class="temp-h2">Languages: </span>
        <span @click="setLanguage('zh-CN')">中文 </span>
        <span @click="setLanguage('en-US')">English </span>
      </p>
      <p>
        <span class="temp-h2">Link: </span>
        <span>
          <a href="https://github.com/NUIlibrary/NUI" target="blank">GitHub </a>
        </span>
        <span>
          <a href="https://www.npmjs.com/package/@nuilibrary/nui" target="blank"
            >npm
          </a>
        </span>
        <span>
          <a href="https://NUILibrary.online" target="blank">Website </a>
        </span>
      </p>
      <p>
        <span class="temp-h2">Navigation: </span>
        <span @click="$router.push({ name: 'Docs' })">Docs </span>
        <span @click="$router.push({ name: 'Test' })">Test </span>
      </p>
    </div>
    <hr />
  </div>
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
.logo {
  max-height: 5rem;
}

.temp-h2 {
  font-weight: 900;
  font-size: 1.2rem;
}

[class^='nav-'] {
  display: inline-block;
}

.nav-left {
  margin-right: 2rem;
}
</style>