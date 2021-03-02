<template>
  <block
    id="NewsBlock"
    class="bg-yellow-300"
    :title="blockTitle"
  >
    <content-swiper :options="options">
      <template #default="{ content }">
        <div class="h-full grid grid-row2 gap-4">
          <news-content>{{ content }}</news-content>
          <news-content>{{ content }}</news-content>
        </div>
      </template>
    </content-swiper>
  </block>
</template>
<script>
import Block from './Block.vue';
import { ContentSwiper } from './Swiper';
import NewsContent from './NewsContent.vue';

export default {
  name: 'NewsBlock',
  components: { ContentSwiper, NewsContent, Block },
  setup() {
    const blockTitle = {
      en: 'GOOD NEWS',
      zh: '最新消息',
    };
    const options = [
      { content: 1 },
      { content: 2 },
      { content: 3 },
    ];
    return {
      blockTitle,
      options,
    };
  },
};
</script>
