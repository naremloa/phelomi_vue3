<template>
  <div class="news-content flex md:px-6 md:pb-4 flex-col md:flex-row items-center">
    <div class="news-image w-full md:w-2/5 h-full md:mx-12 max-w-xs">
      <img
        v-if="img"
        class="h-full w-full object-contain object-top"
        :src="img"
      >
    </div>
    <div class="news-content md:pr-11 w-full h-full">
      <div class="mb-4 md:pb-4">
        <div class="text-3xl text-secondary break-all">
          {{ title }}
        </div>
      </div>
      <div class="mt-1 mb-2">
        {{ content }}
      </div>
      <div class="text-center">
        <button class="h-9 w-28 bg-primary text-white rounded-2xl shadow-md">
          MORE
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsContent',
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>
