<template>
  <div class="news-block w-full bg-yellow-300 h-60">
    <content-swiper :options="options">
      <template #default="{ content }">
        <div class="h-full grid grid-row2 gap-4">
          <news-content>{{ content }}</news-content>
          <news-content>{{ content }}</news-content>
        </div>
      </template>
    </content-swiper>
  </div>
</template>
<script>
import { ContentSwiper } from './Swiper';
import NewsContent from './NewsContent.vue';

export default {
  name: 'NewsBlock',
  components: { ContentSwiper, NewsContent },
  setup() {
    const options = [
      { content: 1 },
      { content: 2 },
      { content: 3 },
    ];
    return {
      options,
    };
  },
};
</script>
