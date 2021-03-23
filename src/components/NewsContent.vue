<template>
  <div class="news-content flex lg:px-6 pb-4 flex-col lg:flex-row items-center">
    <div class="news-image lg:w-2/5 h-full lg:pr-12 lg:pl-6 flex-grow">
      <img
        v-if="img"
        class="h-full w-full object-contain object-top"
        :src="img"
      >
    </div>
    <div class="news-content lg:pr-11 lg:w-3/5 h-full flex-grow">
      <Title>{{ title }}</Title>
      <div class="mt-1 mb-2 tracking-widest overflow-ellipsis">
        {{ content }}
      </div>
      <div class="flex justify-center lg:block">
        <button
          class="h-9 w-28 bg-primary text-white rounded-2xl shadow-md"
          @click="$router.push({ name: 'News', params: { id } })"
        >
          MORE
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '@/components/Title.vue';

export default {
  name: 'NewsContent',
  components: { Title },
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
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
