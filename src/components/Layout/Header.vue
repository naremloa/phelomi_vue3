<template>
  <div class="header w-full bg-green-400 h-32 px-3 relative">
    <div class="w-full h-full flex items-center justify-center md:justify-start">
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
      <menu-item
        v-for="(item, iIdx) in menuItems"
        :key="`menu-item-${iIdx}`"
        class="hidden md:block"
        v-bind="item"
      />
    </div>
    <div class="absolute w-36 h-7 top-2 right-8 flex">
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
        label: '菜單按鈕1',
        hash: '#NewsBlock',
      },
      {
        label: '菜單按鈕2',
        hash: '#RoomsBlock',
      },
      {
        label: '菜單按鈕3',
        hash: '#LocationBlock',
      },
      {
        label: '菜單按鈕4',
        hash: '#MapBlock',
      },
      {
        label: '菜單按鈕5',
        hash: '#ArticlesBlock',
      },
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
