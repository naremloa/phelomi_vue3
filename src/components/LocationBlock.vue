<template>
  <block
    id="LocationBlock"
    class="bg-gray-300"
    :title="blockTitle"
  >
    location-block
  </block>
</template>
<script>
import Block from './Block.vue';

export default {
  name: 'LocationBlock',
  components: { Block },
  setup() {
    const blockTitle = {
      zh: '交通位置',
      en: 'LOCATION',
    };
    return {
      blockTitle,
    };
  },
};
</script>
