<template>
  <div
    class="block-title text-primary w-full h-32 md:pl-16 font-bold
    flex justify-end md:justify-start "
  >
    <div
      class=""
      style="letter-spacing: .75em"
    >
      <div
        class="flex items-end h-20
        bg-title-texture bg-cover bg-no-repeat bg-right-bottom"
      >
        <div class="text-4xl pl-6 pr-3 pb-1 mb-1">
          {{ zh }}
        </div>
        <div class="w-18 h-20">
          <!-- <img :src="titleLogo"> -->
        </div>
      </div>
      <div class="text-2xl pt-1 flex items-start">
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
