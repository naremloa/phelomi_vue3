<template>
  <div class="h-full w-full relative">
    <div
      class="absolute inset-y-1/2 z-10 transform -translate-y-1/2"
      :class="navigationClassName"
      @click="onClickPrev"
    >
      左
    </div>
    <swiper
      v-if="options && options.length"
      class="h-full"
      :loop="true"
      :slides-per-view="1"
      :allow-touch-move="false"
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="(option, optionIdx) in options"
        :key="`slide-${optionIdx}`"
        class="px-4"
      >
        <slot v-bind="option" />
      </swiper-slide>
    </swiper>
    <div
      class="absolute inset-y-1/2 right-0 z-10 transform -translate-y-1/2"
      :class="navigationClassName"
      @click="onClickNext"
    >
      右
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from '@/plugins/swiper';

export default {
  name: 'ContentSwiper',
  components: { Swiper, SwiperSlide },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const navigationClassName = ((space) => [
      `h-${space}`,
      `w-${space}`,
      `leading-${space}`,
      'cursor-pointer',
    ].join(' '))(4);
    const swiperRef = ref(null);
    const onSwiper = (swiper) => { swiperRef.value = swiper; };
    const onClickPrev = (e) => {
      const swiper = swiperRef.value;
      if (!swiper) return;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) return;
      swiper.slidePrev();
    };
    const onClickNext = (e) => {
      const swiper = swiperRef.value;
      if (!swiper) return;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) return;
      swiper.slideNext();
    };
    return {
      navigationClassName,
      onSwiper,
      onClickPrev,
      onClickNext,
    };
  },
};
</script>
