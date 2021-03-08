<template>
  <content-swiper
    v-if="roomOptions && roomOptions.length"
    :options="roomOptions"
  >
    <template #default="row">
      <div class="flex flex-col md:flex-row items-center">
        <div
          v-for="(item, iIdx) in row"
          :key="iIdx"
          class="flex-grow md:max-w-1/3"
        >
          <slot v-bind="item" />
        </div>
      </div>
    </template>
  </content-swiper>
</template>
<script>
import { isArray } from '@/plugins/lodash';
import { computed, toRefs } from 'vue';
import ContentSwiper from './ContentSwiper.vue';

export default {
  name: 'RoomsSwiper',
  components: { ContentSwiper },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { options } = toRefs(props);
    const maxARow = 3;
    const roomOptions = computed(() => {
      if (isArray(options.value) && options.value.length) {
        const [result, rest] = options.value.reduce((acc, cur) => {
          const [source, tmp] = acc;
          if (tmp.length >= maxARow) return [[...source, [...tmp]], [cur]];
          return [source, [...tmp, cur]];
        }, [[], []]);
        return [...result, rest];
      }
      return [];
    });
    return {
      roomOptions,
    };
  },
};
</script>
