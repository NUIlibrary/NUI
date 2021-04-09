<template>
  <div class="header">
    <h1 @click="$router.push({ name: 'Home' })">NUI</h1>
    <p>
      <span @click="setLanguage('zh-CN')">中文 </span>
      <span @click="setLanguage('en-US')">English </span>
    </p>
    <p>
      <a href="https://github.com/NUIlibrary/NUI" target="blank">GitHub</a>
    </p>
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