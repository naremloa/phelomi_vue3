<template>
  <div class="flex items-center mb-1">
    <template v-if="img">
      <img
        class="w-8 h-8 mr-2"
        :src="img"
      >
    </template>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ContactItem',
  props: {
    img: {
      type: String,
      default: '',
    },
  },
  setup() {

  },
};
</script>
