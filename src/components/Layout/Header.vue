<template>
  <div
    class="header w-full px-3 relative bg-header-texture bg-cover min-h-40
    flex items-center"
  >
    <div
      class="w-full h-full flex items-center py-3
      justify-center md:justify-start
      flex-col md:flex-row"
    >
      <div
        class="w-65 cursor-pointer mr-4"
        @click="jumpTo({ name: 'Home' })()"
      >
        <img
          class="w-full max-h-40 object-contain"
          :src="logo"
        >
      </div>
      <div class="flex-grow hidden md:block" />
      <div class="flex">
        <menu-item
          v-for="(item, iIdx) in menuItems"
          :key="`menu-item-${iIdx}`"
          v-bind="item"
        />
      </div>
    </div>
    <div
      class="absolute w-36 h-7 top-2 right-2 md:right-8
      hidden md:flex"
    >
      <social-btn-facebook />
      <social-btn-line />
      <social-btn-wechat />
      <social-btn-instagram />
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import logo from '@/assets/logo/logo_horizon.svg';
import MenuItem from './components/MenuItem.vue';
import SocialBtnFacebook from './components/SocialBtnFacebook.vue';
import SocialBtnInstagram from './components/SocialBtnInstagram.vue';
import SocialBtnLine from './components/SocialBtnLine.vue';
import SocialBtnWechat from './components/SocialBtnWechat.vue';
// const logo = 'https://fakeimg.pl/240x100/?text=logo';

export default {
  components: {
    SocialBtnFacebook, SocialBtnInstagram, SocialBtnLine, SocialBtnWechat, MenuItem,
  },
  setup() {
    const router = useRouter();
    const jumpTo = (obj) => () => { router.push(obj); };
    const menuItems = [
      {
        label: '最新消息',
        hash: '#News',
        phone: false,
      },
      {
        label: '房型介紹',
        hash: '#Room',
      },
      {
        label: '交通位置',
        hash: '#Location',
        phone: false,
      },
      {
        label: '澎湖樂子',
        hash: '#Map',
        phone: false,
      },
      {
        label: '跟我醬玩',
        hash: '#Follow',
        phone: false,
      },
      // {
      //   label: '線上訂房',
      //   hash: '#ArticlesBlock',
      // },
      {
        label: '聯絡我們',
        hash: '#Footer',
      },
    ];
    return {
      logo,
      jumpTo,
      menuItems,
    };
  },
};
</script>
