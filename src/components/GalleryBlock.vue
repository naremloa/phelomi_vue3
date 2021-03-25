<template>
  <div
    class="gallery-block w-full max-h-160"
    style="height: 58.54vw"
  >
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
import data from '@/data/bannerData';
import { ImageSwiper } from './Swiper';
import GalleryImg from './GalleryImg.vue';

const imgOptions = Promise.all(data).then((arr) => arr.map((i) => ({ src: i })));

export default {
  name: 'GalleryBlock',
  components: { ImageSwiper, GalleryImg },
  setup() {
    const options = ref([]);
    const loading = ref(false);
    onMounted(async () => {
      loading.value = true;
      const result = await imgOptions;
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
