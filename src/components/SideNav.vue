<template>
  <div class="aside">
    <div class="aside_inner">
      <strong>目录</strong>
      <slot></slot>
      <a href="#" class="gotop">返回顶部</a>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.aside {
  float: right;
  max-width: 220px;
}
.aside_inner{
  position: sticky;
  right: 0;
  top: 0;
  display: flex;
  flex-flow: column;
  height: calc(100vh - 20px);
  padding: 10px 10px 10px 20px;
  overflow: hidden;
  h4, strong {
    display: block;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid #cfcfcf;
  }
  .gotop {
    align-self: center;
  }
  :deep(ul, ol) {
    flex: 1;
    padding: 0;
  }
  :deep(>ul, >ol) {
    max-height: calc(100vh - 100px);
    overflow: hidden auto;
    ul {
      padding: 5px 0 0 1em;
      ul {
        font-size: 12px;
      }
    }
  }
  :deep(li) {
    list-style: none;
    margin: 0 0 5px;
  }
}
</style>