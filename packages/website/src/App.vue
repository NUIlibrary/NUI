<template>
  <div>
    <Header />
    <n-container>
      <router-view />
    </n-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header },
  // created() {
  //   setTimeout(() => {
  //     this.$nui.useTheme('dark');
  //   }, 5000);
  // },
};
</script>

<style lang="stylus">

pre {
  code {
    font-family: Menlo, Monaco, 'Courier New', monospace, 'Source Code Pro for Powerline';
  }
}

.badge {
  border-color: var(--nui-color-primary);
  background-color: var(--nui-color-bg-middle);
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;

  &.badge-title {
    border-color: var(--nui-color-primary);
  }

  &.badge-other {
    border-color: var(--nui-color-primary);
  }

  &.badge-warn {
    border-color: var(--nui-color-warning);
  }

  &.badge-danger {
    border-color: var(--nui-color-danger);
  }

  .badge-title {
    font-size: 1.1rem;
    font-weight: 900;
  }
}
</style>
