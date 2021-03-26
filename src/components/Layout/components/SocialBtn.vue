<template>
  <div
    class="h-7 w-7 rounded-full mx-1 cursor-pointer"
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
  >
    <template v-if="url">
      <a
        class="w-full h-full"
        :href="url"
        target="_blank"
      >
        <img
          v-if="src"
          :src="src"
        >
      </a>
    </template>
    <template v-else>
      <img
        v-if="src"
        class=""
        :src="src"
      >
    </template>
  </div>
</template>
<script>
export default {
  name: 'SocialBtn',
  props: {
    src: {
      type: [Object, String],
      default: null,
    },
    url: {
      type: String,
      default: '',
    },
  },
  emits: ['mouseover', 'mouseleave'],
};
</script>
