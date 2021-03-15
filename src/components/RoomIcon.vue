<template>
  <div class="flex items-center">
    <template v-if="item.icon">
      <!-- <img
        class="mr-2"
        :src="item.icon"
      > -->
      <!-- <svg
        height="24"
        width="24"
      >
        <path :d="item.icon" />
      </svg> -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        role="img"
        aria-hidden="true"
      >
        <path :d="item.icon" />
      </svg>
      <!-- <svg
        height="210"
        width="400"
      >
        <path d="M150 0 L75 200 L225 200 Z" />
      </svg> -->
    </template>
    {{ item.text }}
  </div>
</template>
<script>
import { computed, toRefs } from 'vue';
import specifyIcon from '@/utils/specifyIcon';

export default {
  name: 'RoomIcon',
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const { type } = toRefs(props);
    const item = computed(() => {
      if (type && specifyIcon[type.value]) {
        const { icon, text } = specifyIcon[type.value];
        console.log('check item', icon, text);
        return { icon, text };
      }
      const text = '';
      const icon = type || '';
      return { icon, text };
    });
    return {
      item,
    };
  },
};
</script>
