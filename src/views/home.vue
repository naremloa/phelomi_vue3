<template>
  <Suspense>
    <template #default>
      <gallery-block />
    </template>
    <template #fallback>
      等待中
    </template>
  </Suspense>
  <news-block />
  <rooms-block />
  <location-block />
  <map-block />
  <articles-block />
</template>
<script>
// import { onMounted } from 'vue';
// import axios from 'axios';
import GalleryBlock from '@/components/GalleryBlock.vue';
import NewsBlock from '@/components/NewsBlock.vue';
import RoomsBlock from '@/components/RoomsBlock.vue';
import LocationBlock from '@/components/LocationBlock.vue';
import MapBlock from '@/components/MapBlock.vue';
import ArticlesBlock from '@/components/ArticlesBlock.vue';

export default {
  name: 'Home',
  components: {
    GalleryBlock,
    NewsBlock,
    RoomsBlock,
    LocationBlock,
    MapBlock,
    ArticlesBlock,
  },
  setup() {
    // onMounted(async () => {
    //   const instance = axios.create({
    //     // baseURL: 'https://randomuser.me/',
    //     baseURL: '',
    //   });
    //   const res = await instance({
    //     url: '/api',
    //     method: 'get',
    //   });
    //   console.log('mounted', res);
    // });
  },
};
</script>
