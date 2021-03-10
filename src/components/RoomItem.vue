<template>
  <div
    class="px-2 cursor-pointer"
    @mouseover="handleFocus"
    @mouseleave="handleBlur"
    @click="handleClick "
  >
    <div class="w-full h-52 relative">
      <img
        v-if="img"
        class="w-full h-full"
        :src="img"
      >
      <div
        v-show="focus"
        class="w-full h-52 bg-gray-800 top-0 left-0 absolute bg-opacity-60"
      />
    </div>
    <div class="flex">
      <img
        class="w-3 h-3 mt-2"
        :src="star"
      >
      <div class="px-6">
        <div
          class="w-full whitespace-nowrap
            text-2xl text-center text-primary font-bold
            py-1 border-solid border-b border-primary"
        >
          {{ name }}
        </div>
        <div
          v-if="content"
          class="w-full text-center text-sm py-1 tracking-widest"
        >
          {{ content }}
        </div>
      </div>
      <img
        class="w-3 h-3 mt-2"
        :src="star"
      >
    </div>
  </div>
</template>
<script>
import { ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import star from '@/assets/bg_image/icon_star.svg';

export default {
  name: 'RoomItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const router = useRouter();
    const { name } = toRefs(props);
    const focus = ref(false);
    const handleFocus = () => {
      focus.value = true;
    };
    const handleBlur = () => {
      focus.value = false;
    };
    const handleClick = () => {
      router.push({
        name: 'Room',
        params: { id: name.value },
      });
    };
    return {
      star,
      focus,
      handleFocus,
      handleBlur,
      handleClick,
    };
  },
};
</script>
