<template>
  <div
    class="pb-4 mb-4 font-bold text-secondary tracking-widest
      bg-line-texture bg-repeat-x bg-bottom bg-auto
      text-2xl md:text-4xl
      leading-8 md:leading-12"
    style="background-size: 2.29vw 0.93vw;"
  >
    <template v-if="title">
      {{ title }}
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>
<script>
export default {
  name: 'Title',
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
