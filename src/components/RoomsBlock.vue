<template>
  <block
    id="RoomsBlock"
    class=""
    :title="blockTitle"
  >
    <rooms-swiper :options="options">
      <template #default="item">
        <room-item
          class="mb-4"
          v-bind="item"
        />
      </template>
    </rooms-swiper>
  </block>
</template>
<script>
import roomsData from '@/data/roomsData';
import Block from './Block.vue';
import { RoomsSwiper } from './Swiper';
import RoomItem from './RoomItem.vue';

export default {
  name: 'RoomsBlock',
  components: { Block, RoomsSwiper, RoomItem },
  setup() {
    const blockTitle = {
      zh: '房間介紹',
      en: 'ROOMS',
    };
    const options = roomsData;
    return {
      blockTitle,
      options,
    };
  },
};
</script>
