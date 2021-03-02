<template>
  <div
    class="px-2 cursor-pointer"
    @mouseover="handleFocus"
    @mouseleave="handleBlur"
    @click="handleClick "
  >
    <div class="w-full h-52 relative">
      <img
        class="w-full h-full"
        :src="imgSrc"
      >
      <div
        v-show="focus"
        class="w-full h-52 bg-gray-800 top-0 left-0 absolute bg-opacity-60"
      />
    </div>
    <div class="w-full text-xl text-center">
      {{ name }}
    </div>
    <div class="w-full text-center">
      content content content content content content
    </div>
  </div>
</template>
<script>
import { ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';

const imgSrc = 'https://fakeimg.pl/302x221/';
export default {
  name: 'RoomItem',
  props: {
    name: {
      type: String,
      required: true,
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
      console.log('handleClick');
    };
    return {
      imgSrc,
      focus,
      handleFocus,
      handleBlur,
      handleClick,
    };
  },
};
</script>
