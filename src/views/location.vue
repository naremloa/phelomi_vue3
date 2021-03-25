<template>
  <div class="p-3 md:p-6 mb-24">
    <block-title v-bind="pageTitle" />
    <location-content
      v-for="(data, dIdx) in locationData"
      :key="dIdx"
      v-bind="data"
    />
  </div>
</template>
<script>
import BlockTitle from '@/components/BlockTitle.vue';
import LocationContent from '@/components/LocationContent.vue';
import locationData from '@/data/locationData';

export default {
  components: {
    LocationContent,
    BlockTitle,
  },
  setup() {
    const pageTitle = {
      zh: '交通位置',
      en: 'LOCATION',
    };
    return {
      pageTitle,
      locationData,
    };
  },
};
</script>
