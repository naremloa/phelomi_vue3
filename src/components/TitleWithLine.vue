<template>
  <div class="flex items-center">
    <div class="flex-grow h-3 bg-line-texture bg-contain" />
    <div class="text-secondary text-4xl font-bold px-2">
      {{ title }}
    </div>
    <div class="flex-grow h-3 bg-line-texture bg-contain" />
  </div>
</template>
<script>
export default {
  name: 'TitleWithLine',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
  },
};
</script>
