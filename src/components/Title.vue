<template>
  <div
    class="pb-4 mb-4 text-4xl font-bold text-secondary tracking-widest leading-12
      bg-line-texture bg-repeat-x bg-bottom bg-auto"
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
