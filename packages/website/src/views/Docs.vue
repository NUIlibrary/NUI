<template>
  <h2>This is a docs page.</h2>
  <div>
    <span v-for="(val, key, index) in docsDir" :key="index" @click="$router.push({name:`Docs${key}`})">{{key+' '}}</span>
  </div>
  <router-view></router-view>
</template>

<script>
import docsDir from '@/docs/docsDir.json'

export default {
  data() {
    return {
      docsDir
    }
  },
}
</script>