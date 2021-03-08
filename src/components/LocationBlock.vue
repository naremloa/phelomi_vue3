<template>
  <block
    id="LocationBlock"
    :title="blockTitle"
  >
    <div class="relative">
      <!-- bg-location-texture bg-cover bg-no-repeat bg-right -->
      <div
        class="absolute top-0 right-1/2 bottom-20 -z-1
          -mr-1/8 md:-mr-1/4 overflow-hidden"
        style="width: 100vw;"
      >
        <img
          class="h-full w-full ml-1/4"
          src="/assets/bg_image/bg_location.jpg"
        >
      </div>
      <div
        class="flex flex-col items-center
        text-white text-sm pt-32 -mr-1/4 md:-mr-1/2"
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
