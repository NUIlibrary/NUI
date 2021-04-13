<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
};
</script>

<style lang="stylus">
.badge {
  border-color: #42b983;
  background-color: #f8f8f8;
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;

  &.badge-title {
    border-color: #42b983;
  }

  &.badge-other {
    border-color: #909090;
  }

  &.badge-warn {
    border-color: #fff111;
  }

  &.badge-danger {
    border-color: #ff1111;
  }

  .badge-title {
    font-size: 1.1rem;
    font-weight: 900;
  }
}
</style>
