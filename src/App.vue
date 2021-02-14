<template>
  <img
    class=""
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <div class="container">
    <div class="grid grid-cols-6 gap-5">
      <!-- <div class="flex-initial">111</div>
      <div class="flex-1">222</div>
      <div class="flex-initial">333</div> -->
      <div class="row-span-2 row-start-2 col-start-6">
        111
      </div>
      <div>222</div>
      <div>333</div>
      <div class="col-start-6">
        444
      </div>
      <div>555</div>
      <div>666</div>
      <div>777</div>
      <div>888888</div>
      <div>999</div>
      <div>000</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
    </div>
  </div>
  <div class="flex justify-evenly">
    <mytest
      set-color="#ffc111"
      content-text="跳島趣行程"
    />
  </div>
</template>

<script setup>
import mytest from './componnets/test.vue';
</script>

<style scoped>
</style>
