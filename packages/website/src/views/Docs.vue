<template>
  <n-row :gutter="10">
    <n-col :span="3">
      <div class="nav">
        <p
          v-for="(val, key, index) in docsDir"
          :key="index"
          @click="$router.push({ name: `Docs${key}` })"
        >
          {{ key }}
        </p>
      </div>
    </n-col>
    <n-col :span="17">
      <div class="px-20">
        <router-view />
      </div>
    </n-col>
  </n-row>
</template>

<script>
import docsDir from '@/docs/docsDir.json';

export default {
  data() {
    return {
      docsDir,
    };
  },
};
</script>

<style lang="stylus" scoped>
.nav {
  border: 1px solid #ccc;
  word-break: break-all;
  word-wrap: break-word;
  padding 0.2rem
}
</style>
