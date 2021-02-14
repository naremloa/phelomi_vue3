<template>
  <router-link to="/">
    home
  </router-link>
  <router-link to="/about">
    about
  </router-link>
  <router-view />
  <div class="flex justify-evenly">
    <mytest
      set-color="#ffc111"
      content-text="跳島趣行程"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import mytest from './componnets/test.vue';

const state = reactive({ count: 0 });
</script>

<style scoped>
</style>
