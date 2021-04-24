<template>
  <div class="home text-center">
    <div class="hero mt-10 mb-15">
      <img src="@/assets/logo.png" alt="logo" width="150" />
      <h1 class="hero-1">NUI</h1>
      <h2 class="hero-2 mb-5">一个 Vue.js 3.0 UI 库</h2>
      <n-button
        color="primary"
        @click="$router.push({ name: 'DocsDownload&Use' })"
        >快速上手</n-button
      >
      <n-button
        color="primary"
        plain
        href="https://github.com/NUIlibrary/awesome-nui"
        target="_blank"
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
    <n-row justify="center">
      <n-col :span="12" :xs="20" :md="12">
        <n-card class=" my-20" hover>
          <n-card-title>灵感来源</n-card-title>
          <n-card-text class="text-left">
            我们希望有这么一套 UI 组件库<br /><br />
            1. 它拥有简单、符合直观逻辑的语法；<br />
            2.
            在保持语法不变的情况下，在不同的、甚至同一个项目里有着完全不同的面貌；<br />
            3. 它是面向未来的，以期有着较长的生命周期和活力；<br /><br />
            满足以上几点需求的 UI
            组件库，将极大的节省开发者的开发成本，全心投入到核心业务逻辑。<br /><br />
            起初，NUI 把目前投向了 Less 预处理器，Less 允许代码在客户端编译。
            但因此去引入一个庞大的（用户甚至都不需要的）文件显然是不优雅的，因此
            NUI 自行封装了符合自身需求的方法类，同时拥抱了 CSS 自定义属性方案。 开发者在实例化 NUI
            类时传入配置参数，或者在生产环境调用对应的函数，即可有着完成不同的样式面貌。<br /><br />
            为了拥有较长的生命周期和活力，NUI 优先为 Vue 3.0 适配。Vue 3.0 尚在
            Preview 版本，在可预计的未来，将有较长时间的支持和广泛的开发者。<br /><br />
            也是因优先 Vue 的原因，NUI 预置的主题配色跟随于 Vue 官方。
          </n-card-text>
        </n-card>
      </n-col>
    </n-row>
  </div>
</template>
