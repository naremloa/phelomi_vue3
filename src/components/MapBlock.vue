<template>
  <block
    id="MapBlock"
    class="bg-indigo-300"
    :title="blockTitle"
  >
    map-block
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
      zh: '找樂子',
    };
    return {
      blockTitle,
    };
  },
};
</script>
