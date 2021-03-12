<template>
  <div
    class="block-title text-primary w-full h-32 md:pl-20 font-bold
    flex justify-end md:justify-start "
  >
    <div>
      <div class="flex items-end h-16 bg-title-texture bg-contain bg-no-repeat bg-right-bottom">
        <div class="text-4xl pl-6 pr-3 pb-1">
          {{ zh }}
        </div>
        <div class="w-18 h-16">
          <!-- <img :src="titleLogo"> -->
        </div>
      </div>
      <div class="text-3xl pt-1 flex items-start">
        <div class="pl-3">
          {{ en }}
        </div>
        <div class="w-18" />
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
