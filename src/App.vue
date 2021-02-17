<template>
  <div class="flex justify-evenly">
    <Textbox
      set-color="#ffc111"
      content-text="跳島趣行程"
    />
  </div>
  <div class="flex justify-center">
    <Imgbox
      introduction-link=""
      img-source="https://firebasestorage.googleapis.com/v0/b/phelomi-bdd9a.appspot.com/o/img%2Fnews%2Fnews_sanli.jpg?alt=media&token=2d9da6d2-3903-42ff-be92-90b5d8b788b7"
      title-text="猜猜我是誰"
    >
      我要顯示在slot
    </Imgbox>
    <Imgbox
      introduction-link=""
      img-source="https://firebasestorage.googleapis.com/v0/b/phelomi-bdd9a.appspot.com/o/img%2Fnews%2Fnews_sanli.jpg?alt=media&token=2d9da6d2-3903-42ff-be92-90b5d8b788b7"
      title-text="猜猜我是誰"
    >
      我要顯示在slot
    </Imgbox>
    <Imgbox
      introduction-link=""
      img-source="https://firebasestorage.googleapis.com/v0/b/phelomi-bdd9a.appspot.com/o/img%2Fnews%2Fnews_sanli.jpg?alt=media&token=2d9da6d2-3903-42ff-be92-90b5d8b788b7"
      title-text="猜猜我是誰"
    >
      我要顯示在slot
    </Imgbox>
  </div>
  <layout>
    <router-view />
  </layout>
</template>

<script setup>
import Layout from '@/components/Layout/index.vue';
import Textbox from './components/TextBox.vue';
import Imgbox from './components/ImgBox.vue';

export default {
  components: { Layout },
  setup() {

  },
};
</script>

<style scoped>
</style>
