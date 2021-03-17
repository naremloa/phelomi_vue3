<template>
  <div class="mb-24 px-6 py-9">
    <block :title="blockTitle">
      <div class="px-11 py-12">
        <Title>{{ item.title }}</Title>
        <template v-if="item.article && item.article.length">
          <div
            v-for="(a, aIdx) in item.article"
            :key="`${item.id}-${aIdx}`"
            class="flex mb-7"
          >
            <div
              class="w-1/3 overflow-hidden"
              style="max-height: 16vw;"
            >
              <img
                v-if="a.img"
                :src="a.img"
                class="h-full w-full"
              >
            </div>
            <div class="w-2/3 pl-8 mb-10">
              <h4 class="font-bold tracking-widest text-lg">
                ・{{ a.title }}
              </h4>
              <p
                class="tracking-widest text-lg"
                v-html="a.content"
              />
            </div>
          </div>
        </template>
        <div
          v-if="item.article && item.article.length"
          class="flex"
        >
          <div class="w-1/3" />
        </div>
      </div>
    </block>
    <explore-rooms-list />
  </div>
</template>
<script>
import followData from '@/data/followData';
import Block from '@/components/Block.vue';
import Title from '@/components/Title.vue';
import { useRoute } from 'vue-router';
import ExploreRoomsList from '@/components/ExploreRoomsList.vue';

const blockTitle = {
  en: '澎湖行程建議',
  zh: '跟我醬玩 ！',
};

export default {
  name: 'News',
  components: {
    Block, ExploreRoomsList, Title,
  },
  setup() {
    const route = useRoute();
    const target = followData
      .find(({ id }) => id === route.params?.id);
    return {
      blockTitle,
      item: target,
    };
  },
};
</script>
