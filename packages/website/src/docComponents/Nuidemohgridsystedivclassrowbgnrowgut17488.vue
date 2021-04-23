<template><div class="row-bg">
  <n-row :gutter="10">
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
  </n-row>
  <n-row :gutter="20">
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
  </n-row>
  <n-row :gutter="40">
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
  </n-row>
</div></template><style scoped>
  .n-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .n-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px;
    background-color: #f9fafc;
  }
</style>