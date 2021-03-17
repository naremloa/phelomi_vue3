<template>
  <div class="h-full w-full relative">
    <div
      class="absolute inset-y-1/2 z-10 transform -translate-y-1/2
      rounded-full bg-primary h-7 w-7 flex justify-center items-center"
      :class="navigationClassName"
      @click="onClickPrev"
    >
      <svg-icon
        class="flex-shrink-0"
        :path="mdiChevronLeft"
        :height="40"
        :width="40"
        fill="#fff"
      />
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
        class="px-8"
      >
        <slot v-bind="option" />
      </swiper-slide>
    </swiper>
    <div
      class="absolute inset-y-1/2 right-0 z-10 transform -translate-y-1/2
      rounded-full bg-primary h-7 w-7 flex justify-center items-center"
      :class="navigationClassName"
      @click="onClickNext"
    >
      <svg-icon
        class="flex-shrink-0"
        :path="mdiChevronRight"
        :height="40"
        :width="40"
        fill="#fff"
      />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from '@/plugins/swiper';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import svgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'ContentSwiper',
  components: { Swiper, SwiperSlide, svgIcon },
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
      mdiChevronLeft,
      mdiChevronRight,
      navigationClassName,
      onSwiper,
      onClickPrev,
      onClickNext,
    };
  },
};
</script>
