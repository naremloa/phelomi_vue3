<template>
  <div class="rounded-2xl pt-3 pb-4 px-8 w-52">
    <img
      v-if="img"
      class="mb-6"
      :src="img"
    >
    <div class="text-center text-base tracking-widest">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'LocationItem',
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
