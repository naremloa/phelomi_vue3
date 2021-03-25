<template>
  <div class="w-full md:px-6 py-8">
    <block-title v-bind="title" />
    <div class="h-auto">
      <slot />
    </div>
  </div>
</template>
<script>
import BlockTitle from './BlockTitle.vue';

export default {
  name: 'Block',
  components: { BlockTitle },
  props: {
    title: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
