<template>
  <div class="md:mx-6">
    <title-with-line
      class="mb-4 md:mb-8 md:px-9"
      title="探索房型"
    />
    <rooms-list />
  </div>
</template>
<script>
import TitleWithLine from './TitleWithLine.vue';
import RoomsList from './RoomsList.vue';

export default {
  name: 'ExploreRoomsList',
  components: { TitleWithLine, RoomsList },
  setup() {

  },
};
</script>
