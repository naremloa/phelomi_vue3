<template>
  <block
    id="LocationBlock"
    :title="blockTitle"
  >
    <div class="relative overflow-hidden -ml-6">
      <div
        class="absolute -z-1 flex flex-col items-center w-full
        transform -translate-x-1/4
          overflow-hidden"
      >
        <img
          class="h-full w-full"
          src="/assets/bg_image/bg_location.jpg"
        >
      </div>
      <div
        class="flex flex-col items-center w-full
        transform translate-x-1/4
        text-white text-sm pt-32"
      >
        <location-item
          class="bg-info mb-4"
          title="民宿地理位置"
          :img="position"
        />
        <location-item
          class="bg-warning mb-4"
          title="搭船"
          :img="ship"
        />
        <location-item
          class="bg-error"
          title="搭飛機"
          :img="airplane"
        />
      </div>
    </div>
  </block>
</template>
<script>
import position from '@/assets/location/icon_position.svg';
import ship from '@/assets/location/icon_ship.svg';
import airplane from '@/assets/location/icon_airplane.svg';
import LocationItem from '@/components/LocationItem.vue';
import Block from './Block.vue';

export default {
  name: 'LocationBlock',
  components: { Block, LocationItem },
  setup() {
    const blockTitle = {
      zh: '交通位置',
      en: 'LOCATION',
    };
    return {
      blockTitle,
      position,
      ship,
      airplane,
    };
  },
};
</script>
