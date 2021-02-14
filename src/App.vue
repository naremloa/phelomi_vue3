<template>
  <router-link to="/">
    home
  </router-link>
  <router-link to="/about">
    about
  </router-link>
  <router-view />
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 });
</script>
