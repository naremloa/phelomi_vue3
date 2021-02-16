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
  <div class="flex justify-center">
    <secondtest
    introduction-link=""
    img-source="https://firebasestorage.googleapis.com/v0/b/phelomi-bdd9a.appspot.com/o/img%2Fnews%2Fnews_sanli.jpg?alt=media&token=2d9da6d2-3903-42ff-be92-90b5d8b788b7"
    title-text="猜猜我是誰"
    >
      我要顯示在slot
    </secondtest>
    <secondtest
    introduction-link=""
    img-source="https://firebasestorage.googleapis.com/v0/b/phelomi-bdd9a.appspot.com/o/img%2Fnews%2Fnews_sanli.jpg?alt=media&token=2d9da6d2-3903-42ff-be92-90b5d8b788b7"
    title-text="猜猜我是誰"
    >
      我要顯示在slot
    </secondtest>
    <secondtest
    introduction-link=""
    img-source="https://firebasestorage.googleapis.com/v0/b/phelomi-bdd9a.appspot.com/o/img%2Fnews%2Fnews_sanli.jpg?alt=media&token=2d9da6d2-3903-42ff-be92-90b5d8b788b7" 
    title-text="猜猜我是誰"
    >
      我要顯示在slot
    </secondtest>
    
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import mytest from './componnets/test.vue';
import secondtest from './componnets/test2.vue';

const state = reactive({ count: 0 });
</script>

<style scoped>
</style>
