<template>
  <div class="h-7 w-7 rounded-full mx-1">
    <img
      v-if="src"
      class=""
      :src="src"
    >
  </div>
</template>
<script>
export default {
  name: 'SocialBtn',
  props: {
    src: {
      type: [Object, String],
      default: null,
    },
  },
};
</script>
