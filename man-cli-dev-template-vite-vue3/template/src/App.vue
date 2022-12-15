<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import HelloWorld from './components/HelloWorld';
export default defineComponent({
  components: {HelloWorld}
})
let a = 1;
</script>

<template>
  <div>
  <HelloWorld msg="Vite + Vue3项目 " />
    <ul>
      <li>支持tsx</li>
      <li>sass</li>
    </ul>
  </div>
</template>

<style scoped>
</style>
