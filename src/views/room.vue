<template>
  <div class="p-3 md:p-6 mb-24">
    <block-title v-bind="pageTitle" />
    <template v-if="room.imgOptions && room.imgOptions.length">
      <content-swiper :options="room.imgOptions">
        <template #default="item">
          <div class="h-52 sm:h-72 md:h-96 xl:h-160 w-full">
            <img
              :src="item"
              class="object-cover h-full w-full"
            >
          </div>
        </template>
      </content-swiper>
    </template>
    <div class="flex md:px-20 py-12">
      <div class="w-full md:w-3/4">
        <div
          class="inline-block text-3xl text-white tracking-widest
          bg-secondary rounded-lg px-3 py-3
          mb-5 md:mb-10"
        >
          房間介紹
        </div>
        <!-- 房間信息 -->
        <template v-if="room.info && room.info.length">
          <div
            v-for="(infoItem, iIdx) in room.info"
            :key="`info-${iIdx}`"
            class="tracking-widest mb-2"
          >
            {{ infoItem }}
          </div>
        </template>
        <!-- 房間服務 icon -->
        <template v-if="room.iconList && room.iconList.length">
          <div class="mb-10">
            <div
              v-for="(iconItem, iIdx) in room.iconList"
              :key="`icon-item-${iIdx}`"
              class="mt-4 tracking-widest"
            >
              <div class="text-lg mb-2">
                {{ iconItem && iconItem.title }}
              </div>
              <div class="flex flex-wrap pl-2">
                <div
                  v-for="(icon, iconIdx) in iconItem.icon"
                  :key="`icon-${iconIdx}`"
                  class="max-w-1/2 w-1/2 md:max-w-1/4 md:w-1/4 text-sm"
                >
                  <room-icon :type="icon" />
                  <!-- {{ icon }} -->
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- 住房須知 -->
        <template v-if="liveNotice && end && liveRule && liveRule.length">
          <div
            class="inline-block text-3xl text-white tracking-widest
          bg-info rounded-lg px-3 py-3
            mb-5 md:mb-10"
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
                class="flex items-stretch"
              >
                <span style="padding-top: 11px;">
                  <svg-icon
                    :path="mdiCheckboxBlankCircle"
                    :height="10"
                    :width="10"
                  />
                </span>
                <span class="pl-3">{{ rule }}</span>
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
          bg-warning rounded-lg px-3 py-3
            mb-5 md:mb-10"
          >
            退訂政策
          </div>
          <div class="tracking-widest leading-8 mb-10">
            <ul>
              <li
                v-for="(item, uIdx) in unsubscribe"
                :key="`unsubscribe-${uIdx}`"
                class="flex items-stretch"
              >
                <span style="padding-top: 11px;">
                  <svg-icon
                    :path="mdiCheckboxBlankCircle"
                    :height="10"
                    :width="10"
                  />
                </span>
                <span class="pl-3">{{ item }}</span>
              </li>
            </ul>
          </div>
        </template>
      </div>
      <div class="w-1/4 hidden md:block">
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
    <explore-rooms-list />
  </div>
</template>
<script>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { computed, ref } from 'vue';
import {
  roomIntro,
  roomsCategory,
} from '@/data/roomsDetailData';
import roomsData from '@/data/roomsData';
import { ContentSwiper } from '@/components/Swiper';
import BlockTitle from '@/components/BlockTitle.vue';
import RoomIcon from '@/components/RoomIcon.vue';
import { mdiCheckboxBlankCircle } from '@mdi/js';
import SvgIcon from '@/components/SvgIcon.vue';
import ExploreRoomsList from '@/components/ExploreRoomsList.vue';

export default {
  name: 'Room',
  components: {
    ContentSwiper,
    BlockTitle,
    RoomIcon,
    SvgIcon,
    ExploreRoomsList,
  },
  beforeRouteEnter(to, from, next) {
    if (to.params?.id
      && roomsData.find(({ id }) => id === to.params.id)) {
      next();
    } else next({ name: 'Home' });
  },
  setup() {
    const { params: { id: roomId } = {} } = useRoute();
    const id = ref(roomId);
    const room = computed(() => {
      const roomData = roomsData.find(({ id: rId }) => rId === id.value);
      if (!roomData) return {};
      const {
        description = '', imgOptions = [],
      } = roomData || {};
      const {
        title = '', info = [], iconList = [],
      } = roomsCategory?.[roomData.type] || {};
      return {
        description, imgOptions, title, info, iconList,
      };
    });
    const pageTitle = computed(() => ({
      zh: room.value.title,
      en: `ROOMS_${room.value.description}`,
    }));
    const {
      end = '', liveNotice = '', liveRule = [], unsubscribe = [],
    } = roomIntro || {};
    onBeforeRouteUpdate((to) => {
      if (to.name === 'Room') { id.value = to.params.id; }
    });
    return {
      mdiCheckboxBlankCircle,
      pageTitle,
      room,
      liveRule,
      liveNotice,
      unsubscribe,
      end,
    };
  },
};
</script>
