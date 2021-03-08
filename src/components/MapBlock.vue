<template>
  <block
    id="MapBlock"
    class="bg-map-texture bg-cover h-full"
    :title="blockTitle"
    style="min-height: 68.38vw"
  />
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
