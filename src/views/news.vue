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
    <rooms-swiper :options="options">
      <template #default="rItem">
        <room-item v-bind="rItem" />
      </template>
    </rooms-swiper>
  </div>
</template>
<script>
import newsData from '@/data/newsData';
import Block from '@/components/Block.vue';
import Title from '@/components/Title.vue';
import roomsData from '@/data/roomsData';
import { RoomsSwiper } from '@/components/Swiper';
import RoomItem from '@/components/RoomItem.vue';
import { useRoute } from 'vue-router';

const blockTitle = {
  en: 'GOOD NEWS',
  zh: '最新消息',
};

export default {
  name: 'News',
  components: {
    Block, RoomsSwiper, RoomItem, Title,
  },
  setup() {
    const route = useRoute();
    const options = roomsData;
    const target = newsData
      .find(({ id }) => id === route.params?.id);
    return {
      blockTitle,
      options,
      item: target,
    };
  },
};
</script>
