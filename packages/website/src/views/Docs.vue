<template>
  <div>
    <span v-for="(val, key, index) in docsDir" :key="index">
      <span @click="$router.push({ name: `Docs${key}` })">{{ key }}</span>
      <span v-if="index != Object.keys(docsDir).length - 1"> | </span>
    </span>
  </div>
  <router-view></router-view>
</template>

<script>
import docsDir from "@/docs/docsDir.json";

export default {
  data() {
    return {
      docsDir,
    };
  },
};
</script>