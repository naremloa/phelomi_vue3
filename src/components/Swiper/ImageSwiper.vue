<template>
  <div class="h-full">
    <swiper
      v-if="options && options.length"
      class="h-full"
      :loop="true"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :simulate-touch="false"
      @swiper="onSwiper"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
    >
      <swiper-slide
        v-for="(option, optionIdx) in options"
        :key="`slide-${optionIdx}`"
      >
        <slot v-bind="option" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from '@/plugins/swiper';

export default {
  name: 'ImageSwiper',
  components: { Swiper, SwiperSlide },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const swiperRef = ref(null);
    const onSwiper = (swiper) => { swiperRef.value = swiper; };
    const onMouseover = () => {
      const swiper = swiperRef.value;
      if (!swiper) return;
      swiper.autoplay.stop();
    };
    const onMouseout = () => {
      const swiper = swiperRef.value;
      if (!swiper) return;
      swiper.autoplay.start();
    };
    return {
      swiperRef,
      onSwiper,
      onMouseover,
      onMouseout,
    };
  },
};
</script>
<style>
.swiper-container
.swiper-pagination
.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
}
.swiper-container
.swiper-pagination {
  text-align: right;
  padding-right: 40px;
}
.swiper-container
.swiper-pagination
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: black;
}
</style>
