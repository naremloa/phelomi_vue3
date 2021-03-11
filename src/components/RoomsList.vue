<template>
  <rooms-swiper :options="options">
    <template #default="item">
      <room-item
        class="mb-4"
        v-bind="item"
      />
    </template>
  </rooms-swiper>
</template>
<script>
import roomsData from '@/data/roomsData';
import { RoomsSwiper } from './Swiper';
import RoomItem from './RoomItem.vue';

export default {
  components: { RoomsSwiper, RoomItem },
  setup() {
    return {
      options: roomsData
        .map(({ short = {} }) => short),
    };
  },
};
</script>
