<template>
  <div
    class="gallery-img h-full w-full"
  >
    <img
      v-if="src"
      class="w-full h-full object-cover"
      :src="src"
    >
  </div>
</template>
<script>
export default {
  name: 'GalleryImg',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  setup() {
  },
};
</script>
