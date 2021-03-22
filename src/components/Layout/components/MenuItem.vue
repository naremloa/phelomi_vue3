<template>
  <div
    class="cursor-pointer ml-1 pt-3 justify-end items-center
    bg-nav-item-texture hover:bg-nav-item-texture-hover
    bg-right-bottom bg-contain bg-no-repeat
    w-28 min-w-28 md:w-30 md:min-w-30
    h-12 md:h-14
    "
    :class="{
      'hidden': !phone,
      'md:flex': !phone,
      'flex': phone,
    }"
    @click="handleClick"
  >
    <span
      class="text-white whitespace-nowrap w-18
      text-sm md:text-base
      pl-3 md:pl-1
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
    phone: {
      type: Boolean,
      default: true,
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
