<template>
  <div
    class="rounded-2xl pt-3 pb-4 px-8 w-52 relative
      hover:shadow-location"
    @mouseover="handleFocus"
    @mouseleave="handleBlur"
  >
    <img
      v-if="img"
      class="mb-6"
      :src="img"
    >
    <div class="text-center text-base tracking-widest">
      {{ title }}
    </div>
    <img
      v-if="active"
      v-show="activeShow"
      class="absolute w-1/2 h-1/2 left-full top-1/3 ml-7 hover:bg-black"
      :src="active"
    >
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'LocationItem',
  props: {
    img: {
      type: String,
      default: '',
    },
    active: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    const activeShow = ref(false);
    const handleFocus = () => { activeShow.value = true; };
    const handleBlur = () => { activeShow.value = false; };
    return {
      activeShow,
      handleFocus,
      handleBlur,
    };
  },
};
</script>
