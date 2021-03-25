<template>
  <block
    id="Map"
    class=" bg-cover h-full
    bg-accent md:bg-map-texture"
    :title="blockTitle"
    style="min-height: 68.38vw"
  >
    <div
      class="block md:hidden w-full h-full bg-map-texture bg-cover"
      style="min-height: 68.38vw"
    />
  </block>
</template>
<script>
import Block from './Block.vue';

export default {
  name: 'MapBlock',
  components: { Block },
  setup() {
    const blockTitle = {
      en: 'HAVE FUN',
      zh: '澎湖找樂子',
    };
    return {
      blockTitle,
    };
  },
};
</script>
