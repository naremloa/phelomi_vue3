<template>
  <div class="mb-24">
    <block :title="blockTitle">
      <div class="px-8">
        <div class="object-contain w-full mb-12">
          <img
            v-if="item.img"
            :src="item.img"
          >
        </div>
        <Title>{{ item.title }}</Title>
        <!-- <div class="text-secondary text-3xl">
        {{ item.title }}
      </div> -->
        <p class="whitespace-pre-wrap tracking-widest text-lg">
          {{ item.content }}
        </p>
      </div>
    </block>
    <div>探索房型</div>
    <rooms-list />
  </div>
</template>
<script>
import newsData from '@/data/newsData';
import Block from '@/components/Block.vue';
import Title from '@/components/Title.vue';
import RoomsList from '@/components/RoomsList.vue';
import { useRoute } from 'vue-router';

const blockTitle = {
  en: 'GOOD NEWS',
  zh: '最新消息',
};

export default {
  name: 'News',
  components: {
    Block, RoomsList, Title,
  },
  setup() {
    const route = useRoute();
    const target = newsData
      .find(({ id }) => id === route.params?.id);
    return {
      blockTitle,
      item: target,
    };
  },
};
</script>
