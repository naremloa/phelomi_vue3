<template>
  <div class="header w-full bg-green-400 h-60 px-16">
    <div class="h-full grid grid-rows-5 grid-cols-10">
      <div class="bg-white row-start-2 row-end-5 col-start-1 col-end-4">
        <img
          class="h-full object-contain"
          :src="logo"
        >
      </div>
      <div class="bg-white row-start-2 row-end-5 col-start-4 col-end-11" />
    </div>
  </div>
</template>
<script>
import logo from '@/assets/logo/logo_horizon.svg';

export default {
  setup() {
    return { logo };
  },
};
</script>
