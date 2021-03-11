<template>
  <block :title="blockTitle">
    <div class="mb-20">
      <location-content
        v-for="(data, dIdx) in locationData"
        :key="dIdx"
        v-bind="data"
      />
    </div>
  </block>
</template>
<script>
import Block from '@/components/Block.vue';
import LocationContent from '@/components/LocationContent.vue';
import locationData from '@/data/locationData';

export default {
  components: {
    Block,
    LocationContent,
  },
  setup() {
    const blockTitle = {
      zh: '交通位置',
      en: 'LOCATION',
    };
    return {
      blockTitle,
      locationData,
    };
  },
};
</script>
