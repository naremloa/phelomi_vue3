<template>
  <button
    class="long-social-btn text-white px-2 h-7 block rounded max-w-28 whitespace-nowrap"
  >
    <div class="flex items-center">
      <template v-if="img">
        <img
          class="w-4 h-4 mr-1"
          :src="img"
        >
      </template>
      <slot />
    </div>
  </button>
</template>
<script>
export default {
  name: 'LongSocialBtn',
  props: {
    img: {
      type: String,
      default: '',
    },
  },
  setup() {

  },
};
</script>
<style scoped>
.long-social-btn {
  outline: none;
  background-color: rgb(64, 166, 55);
  transition: background-color 0.4s;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
        0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 12%);
}
.long-social-btn:hover {
  background-color: rgb(64, 166, 55, .8);
}
</style>
