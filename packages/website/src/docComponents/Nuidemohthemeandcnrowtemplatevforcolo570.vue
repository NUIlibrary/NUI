<template><n-row>
  <template v-for="(colorName,index) in colorNameSet" :key="index">
    <n-col
      v-for="i in 5"
      :key="i"
      :span="4"
      :class="`bg-${colorName}-lighten${6-i}`"
           >{{`bg-${colorName}-lighten${6-i}`}}</n-col>
    <n-col
      :span="4"
      :class="`bg-${colorName}`"
           >{{`bg-${colorName}`}}</n-col>
    <n-col
      v-for="i in 5"
      :key="i"
      :span="4"
      :class="`bg-${colorName}-darken${i}`"
           >{{`bg-${colorName}-darken${i}`}}</n-col>
  </template>
</n-row></template><script>
  export default {
    data() {
      return {
        colorNameSet: [
          'red',
          'orange',
          'yellow',
          'chartreuse',
          'green',
          'spring',
          'cyan',
          'sky',
          'blue',
          'purple',
          'magenta',
          'pink',
          'white',
          'black'
        ],
      };
    },
  };
</script><style scoped>
  .n-col {
    height: 50px;
  }
</style>