<template>
  <block
    id="ArticlesBlock"
    :title="blockTitle"
  >
    <div
      class="w-full flex items-center justify-around
      flex-col md:flex-row"
    >
      <div
        class="bg-black w-1/4 h-32 mb-5"
        @click="$router.push({ name: 'Follow', params: { id: 'followA' } })"
      />
      <div
        class="bg-black w-1/4 h-32 mb-5"
        @click="$router.push({ name: 'Follow', params: { id: 'followB' } })"
      />
      <div
        class="bg-black w-1/4 h-32 mb-5"
        @click="$router.push({ name: 'Follow', params: { id: 'followC' } })"
      />
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
