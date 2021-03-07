<template>
  <div
    class="w-30 min-w-30 h-14 cursor-pointer ml-1 pt-3
    hidden md:flex justify-end items-center
    bg-nav-item-texture
    hover:bg-nav-item-texture-hover
    bg-right-bottom
    bg-cover
    bg-no-repeat
    "
    @click="handleClick"
  >
    <span
      class="text-white whitespace-nowrap
      w-18
      "
    >
      {{ label }}
    </span>
  </div>
</template>
<script>
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'MenuItem',
  props: {
    label: {
      type: [String, Number],
      default: '',
    },
    hash: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { hash } = toRefs(props);
    const router = useRouter();
    const handleClick = () => {
      if (hash.value) router.push({ hash: hash.value });
    };
    return {
      handleClick,
    };
  },
};
</script>
