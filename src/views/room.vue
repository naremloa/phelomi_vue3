<template>
  <div class="p-6 mb-24">
    <block-title v-bind="pageTitle" />
    <template v-if="imgOptions && imgOptions.length">
      <content-swiper :options="imgOptions">
        <template #default="item">
          <div>
            <img :src="item">
          </div>
        </template>
      </content-swiper>
    </template>
    <div class="flex px-20 py-12">
      <div class="w-3/4">
        <div
          class="inline-block text-3xl text-white tracking-widest
          bg-secondary rounded-lg px-3 py-3 mb-10"
        >
          房間介紹
        </div>
        <!-- 房間信息 -->
        <template v-if="info && info.length">
          <div
            v-for="(infoItem, iIdx) in info"
            :key="`info-${iIdx}`"
            class="tracking-widest mb-2"
          >
            {{ infoItem }}
          </div>
        </template>
        <!-- 房間服務 icon -->
        <template v-if="iconList && iconList.length">
          <div class="mb-10">
            <div
              v-for="(iconItem, iIdx) in iconList"
              :key="`icon-item-${iIdx}`"
              class="mt-4 tracking-widest"
            >
              <div class="text-lg mb-2">
                {{ iconItem && iconItem.title }}
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="(icon, iconIdx) in iconItem.icon"
                  :key="`icon-${iconIdx}`"
                  class="max-w-1/4 w-1/4 text-sm"
                >
                  {{ icon }}
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- 住房須知 -->
        <template v-if="liveNotice && end && liveRule && liveRule.length">
          <div
            class="inline-block text-3xl text-white tracking-widest
          bg-info rounded-lg px-3 py-3 mb-10"
          >
            住房須知
          </div>
          <div class="tracking-widest leading-8 mb-10">
            <p class="mb-2">
              {{ liveNotice }}
            </p>
            <ul class="">
              <li
                v-for="(rule, rIdx) in liveRule"
                :key="`live-rule-${rIdx}`"
              >
                {{ rule }}
              </li>
            </ul>
            <p class="mb-2">
              {{ end }}
            </p>
          </div>
        </template>
        <!-- 退訂政策 -->

        <template v-if="unsubscribe && unsubscribe.length">
          <div
            class="inline-block text-3xl text-white tracking-widest
          bg-warning rounded-lg px-3 py-3 mb-10"
          >
            退訂政策
          </div>
          <div class="tracking-widest leading-8 mb-10">
            <ul>
              <li
                v-for="(item, uIdx) in unsubscribe"
                :key="`unsubscribe-${uIdx}`"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </template>
      </div>
      <div class="w-1/4">
        <a
          class="inline-block bg-error rounded-full"
          href="https://google.com"
          target="_blank"
        >
          <button
            class="whitespace-pre-line text-white px-4 text-5xl leading-15 font-bold tracking-wider"
            style="min-width: 19vw; min-height: 19vw"
          >
            {{ '立即\n訂房' }}
          </button>
        </a>
      </div>
    </div>
    <div>探索房型</div>
    <rooms-list />
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import {
  roomIntro,
  roomsCategory,
} from '@/data/roomsDetailData';
import roomsData from '@/data/roomsData';
import { ContentSwiper } from '@/components/Swiper';
import BlockTitle from '@/components/BlockTitle.vue';

export default {
  name: 'Room',
  components: { ContentSwiper, BlockTitle },
  beforeRouteEnter(to, from, next) {
    if (to.params?.id
      && roomsData.find(({ id }) => id === to.params.id)) {
      next();
    } else next({ name: 'Home' });
  },
  setup() {
    const { params: { id } = {} } = useRoute();
    const room = roomsData.find(({ id: roomId }) => roomId === id);
    if (!room) return {};
    const {
      description = '', imgOptions = [],
    } = room || {};
    const {
      end = '', liveNotice = '', liveRule = [], unsubscribe = [],
    } = roomIntro || {};
    const {
      title = '', info = [], iconList = [],
    } = roomsCategory?.[room?.type] || {};
    const pageTitle = {
      zh: title,
      en: `ROOMS_${description}`,
    };
    return {
      pageTitle,
      imgOptions,
      title,
      description,
      info,
      iconList,
      liveRule,
      liveNotice,
      unsubscribe,
      end,
    };
  },
};
</script>
