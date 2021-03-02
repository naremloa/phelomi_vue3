<template>
  <div
    class="bg-blue-600 w-28 h-12 cursor-pointer ml-1"
    @click="handleClick"
  >
    {{ label }}
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
