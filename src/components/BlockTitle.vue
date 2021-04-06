<template>
  <div
    class="block-title text-primary w-full h-32 px-3 md:pl-16 font-bold
    flex md:justify-start
    mb-4 md:mb-0"
  >
    <div
      class="tracking-wider md:tracking-infinity w-full md:w-auto"
    >
      <div
        class="flex items-end h-20
        bg-title-texture bg-cover bg-no-repeat bg-right-bottom"
      >
        <div
          class="pb-1 mb-1 border-b-2 border-primary
          text-3xl md:text-4xl
          pl-0 md:pl-6
          pr-3 md:pr-3"
        >
          {{ zh }}
        </div>
        <div class="w-18 h-20 flex justify-end flex-col mb-1">
          <img :src="bgTitleShip">
          <!-- <img :src="titleLogo"> -->
        </div>
      </div>
      <div
        class="pt-1 flex items-start
        text-xl md:text-2xl "
      >
        <div class="pl-3">
          {{ en }}
        </div>
        <div class="w-18" />
      </div>
    </div>
  </div>
</template>
<script>
import bgTitleShip from '@/assets/bg_image/bg_title_ship.svg';

export default {
  name: 'BlockTitle',
  props: {
    en: {
      type: String,
      default: '',
    },
    zh: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      bgTitleShip,
    };
  },
};
</script>
