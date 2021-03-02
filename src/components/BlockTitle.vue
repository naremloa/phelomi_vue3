<template>
  <div class="block-title w-full h-32 pl-20 flex">
    <div class="max-w-1/2">
      <div class="flex items-end h-16">
        <div class="text-4xl pl-6 pr-3">
          {{ zh }}
        </div>
        <div>
          <img :src="titleLogo">
        </div>
      </div>
      <div class="text-3xl pt-1">
        <span class="pl-3">{{ en }}</span>
      </div>
    </div>
  </div>
</template>
<script>
const titleLogo = 'https://fakeimg.pl/71x62/';
export default {
  name: 'BlockTitle',
  props: {
    en: {
      type: String,
      default: '',
    },
    zh: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      titleLogo,
    };
  },
};
</script>
