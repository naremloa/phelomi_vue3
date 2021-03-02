<template>
  <div class="gallery-block w-full h-60 bg-blue-300">
    <div v-if="loading">
      等待中
    </div>
    <image-swiper :options="options">
      <template #default="{ src }">
        <gallery-img :src="src" />
      </template>
    </image-swiper>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import { ImageSwiper } from './Swiper';
import GalleryImg from './GalleryImg.vue';

const imgOptions = [
  { src: 'https://picsum.photos/id/237/100/100' },
  { src: 'https://picsum.photos/id/1024/1024/200' },
  { src: 'https://picsum.photos/id/1022/900/300' },
];

export default {
  name: 'GalleryBlock',
  components: { ImageSwiper, GalleryImg },
  setup() {
    const options = ref([]);
    const loading = ref(false);
    onMounted(async () => {
      loading.value = true;
      const result = await new Promise((res) => {
        setTimeout(() => {
          res(imgOptions);
        }, 2000);
      });
      options.value = result;
      loading.value = false;
    });
    return {
      options,
      loading,
    };
  },
};
</script>
