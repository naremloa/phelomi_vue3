<template>
  <block
    id="NewsBlock"
    class=""
    :title="blockTitle"
  >
    <content-swiper :options="newsOptions">
      <template #default="data">
        <div class="h-full grid grid-row2 gap-4">
          <news-content v-bind="data[0]" />
          <news-content v-bind="data[1]" />
        </div>
      </template>
    </content-swiper>
  </block>
</template>
<script>
import newsData from '@/data/newsData';
import { computed } from 'vue';
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
    // const options = newsContent.reduce((acc, cur) => {
    //   const { num, result } = acc;
    //   if (num >= rowNum)
    // }, { num: 0, result: [] });

    const maxARow = 2;
    const newsOptions = computed(() => {
      const [result, rest] = newsData.reduce((acc, cur) => {
        const [source, tmp] = acc;
        const { short = {}, id } = cur;
        if (tmp.length >= maxARow) return [[...source, [...tmp]], [{ id, ...short }]];
        return [source, [...tmp, { id, ...short }]];
      }, [[], []]);
      return [...result, rest];
    });
    return {
      blockTitle,
      newsOptions,
    };
  },
};
</script>
