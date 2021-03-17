<template>
  <div class="flex items-center text-textGray tracking-wider h-6 pb-1">
    <template v-if="item.icon">
      <div class="mr-1">
        <svg-icon
          v-if="item.svg"
          :path="item.icon"
          :height="17"
          :width="17"
          fill="rgba(0, 0, 0, .54)"
        />
      </div>
    </template>
    {{ item.text }}
  </div>
</template>
<script>
import { computed, toRefs } from 'vue';
import specifyIcon from '@/utils/specifyIcon';
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'RoomIcon',
  components: { SvgIcon },
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const isSvgPath = (path) => /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(path)
      && /[\dz]$/i.test(path) && path.length > 4;
    const { type } = toRefs(props);
    const item = computed(() => {
      if (type && specifyIcon[type.value]) {
        const { icon, text } = specifyIcon[type.value];
        return { icon, text, svg: isSvgPath(icon) };
      }
      const text = '';
      const icon = type || '';
      return { icon, text, svg: isSvgPath(icon) };
    });
    return {
      item,
    };
  },
};
</script>
