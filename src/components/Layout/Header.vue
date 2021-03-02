<template>
  <div class="header w-full bg-green-400 h-44 px-4 relative">
    <div class="w-full h-full flex items-center">
      <div
        class="bg-white w-65 cursor-pointer"
        @click="jumpTo({ name: 'Home' })()"
      >
        <img
          class="w-full max-h-40 object-contain bg-blue-600"
          :src="logo"
        >
      </div>
      <div class="flex-grow" />
      <menu-item
        v-for="(item, iIdx) in menuItems"
        :key="`menu-item-${iIdx}`"
        v-bind="item"
      />
    </div>
    <div class="absolute w-36 h-7 top-4 right-8 flex">
      <social-btn />
      <social-btn />
      <social-btn />
      <social-btn />
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import MenuItem from './components/MenuItem.vue';
import SocialBtn from './components/SocialBtn.vue';
// import logo from '@/assets/logo/logo_horizon.svg';
const logo = 'https://fakeimg.pl/240x100/?text=logo';

export default {
  components: { SocialBtn, MenuItem },
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
