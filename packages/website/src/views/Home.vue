<template>
  <div class="home text-center">
    <div class="hero mt-10 mb-20">
      <img src="@/assets/logo.png" alt="logo" width="150" />
      <h1>NUI</h1>
      <h2>一个 Vue.js 3.0 UI 库</h2>
      <n-button
        color="primary"
        @click="$router.push({ name: 'DocsDownload&Use' })"
        >快速上手</n-button
      >
      <n-button
        color="primary"
        plain
        href="https://github.com/NUIlibrary/awesome-nui"
      >
        <n-icon>github-fill</n-icon>
        Awesome NUI
      </n-button>
    </div>
    <n-row :gutter="10">
      <n-col :md="5" :sm="10" :ms="20">
        <n-card>
          <n-card-title class="text-primary">语义化</n-card-title>
          <n-card-text>
            NUI 组件库致力于书写有语义化的属性名、类名，例如 disabled
            表示不可用，节省开发者书写代码时查看文档的时间。
          </n-card-text>
        </n-card>
      </n-col>
      <n-col :md="5" :sm="10" :ms="20">
        <n-card>
          <n-card-title class="text-primary">noCSS</n-card-title>
          <n-card-text>
            开发者无需书写 CSS 代码，需要的样式均由 NUI
            丰富的组件和组件丰富的属性提供
          </n-card-text>
        </n-card>
      </n-col>
      <n-col :md="5" :sm="10" :ms="20">
        <n-card>
          <n-card-title class="text-primary">高可定制</n-card-title>
          <n-card-text>
            无论是主题，还是颜色，甚至是断点，开发者都可以二次定制。如果愿意，甚至用户也可以在生产环境中拥有一套自己的
            UI 样式。
          </n-card-text>
        </n-card>
      </n-col>
      <n-col :md="5" :sm="10" :ms="20">
        <n-card>
          <n-card-title class="text-primary">高响应式</n-card-title>
          <n-card-text>
            不仅仅是屏幕尺寸，NUI 提供的响应式包括系统主题、颜色等响应式。
          </n-card-text>
        </n-card>
      </n-col>
    </n-row>
  </div>
</template>
