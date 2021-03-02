<template>
  <div class="p-6">
    <div>圖片區</div>
    <div class="flex px-20 py-12">
      <div class="w-3/4">
        左
      </div>
      <div class="w-1/4">
        右
      </div>
    </div>
    <div>探索房型</div>
    <rooms-swiper :options="options">
      <template #default="item">
        <room-item v-bind="item" />
      </template>
    </rooms-swiper>
  </div>
</template>
<script>
import { RoomsSwiper } from '@/components/Swiper';
import RoomItem from '@/components/RoomItem.vue';

export default {
  name: 'Room',
  components: { RoomsSwiper, RoomItem },
  setup() {
    const options = [
      { name: 'room1' },
      { name: 'room2' },
      { name: 'room3' },
      { name: 'room4' },
      { name: 'room5' },
      { name: 'room6' },
      { name: 'room7' },
    ];
    return {
      options,
    };
  },
};
</script>
