<template>
  <div class="gallery-block w-full h-60 bg-blue-300">
    <image-swiper :options="options">
      <template #default="{ src }">
        <gallery-img :src="src" />
      </template>
    </image-swiper>
  </div>
</template>
<script>
import { ImageSwiper } from './Swiper';
import GalleryImg from './GalleryImg.vue';

export default {
  name: 'GalleryBlock',
  components: { ImageSwiper, GalleryImg },
  setup() {
    const options = [
      { src: 'https://picsum.photos/id/237/100/100' },
      { src: 'https://picsum.photos/id/1024/1024/200' },
      { src: 'https://picsum.photos/id/1022/900/300' },
    ];
    return {
      options,
    };
  },
};
</script>
