<template>
  <n-row :gutter="20">
    <n-col :span="3" :sm="3" :md="3">
      <div v-for="(groupItem, groupkey) in navList" :key="groupkey">
        <h3>{{ groupkey }}</h3>
        <p v-for="(listItem, listKey) in groupItem" :key="listKey">
          <n-link @click="goToPage(listKey)">{{ listKey }}</n-link>
        </p>
      </div>
    </n-col>
    <n-col :span="17" :sm="17" :md="14">
      <router-view />
    </n-col>
  </n-row>
</template>

<script>
export default {
  data() {
    return {
      navList: {
        Starting: {
          Introduction: 'Introduction.md',
          'Download&Use': 'Download&Use.md',
          'Theme&Color': 'Theme&Color.md',
        },
        'Layout&Style': {
          Application: 'Application.md',
          GridSystem: 'GridSystem.md',
          Style: 'Style.md',
        },
        components: {
          Button: 'Button.md',
          Card: 'Card.md',
          Link: 'Link.md',
          Icon: 'Icon.md',
        },
      },
    };
  },
  methods: {
    goToPage(docName) {
      const language =
        localStorage.getItem('NUI_LANGUAGE') ||
        window.navigator.language ||
        'zh-CN';
      this.$router.push(`/${language}/docs/${docName}`);
    },
  },
};
</script>
