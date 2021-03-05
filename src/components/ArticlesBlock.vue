<template>
  <block
    id="ArticlesBlock"
    :title="blockTitle"
  >
    <div class="articles-block w-full h-60  grid grid-cols-10 grid-rows-4">
      <div class="bg-black row-start-2 row-end-5 col-start-2 col-end-4" />
      <div class="bg-black row-start-2 row-end-5 col-start-5 col-end-7" />
      <div class="bg-black row-start-2 row-end-5 col-start-8 col-end-10" />
    </div>
  </block>
</template>
<script>
import Block from './Block.vue';

export default {
  name: 'ArticlesBlock',
  components: { Block },
  setup() {
    const blockTitle = {
      zh: '跟我醬玩！',
      en: '澎湖行程建議',
    };
    return {
      blockTitle,
    };
  },
};
</script>
