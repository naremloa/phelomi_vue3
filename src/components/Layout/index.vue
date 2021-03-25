<template>
  <div class="layout container relative">
    <l-header />
    <slot />
    <l-footer />
    <div
      v-show="pageName !== 'Home'"
      class="w-20 h-20 rounded-full bg-primary cursor-pointer
      text-white text-3xl
      fixed bottom-28 right-5
      flex justify-center items-center z-50"
    >
      <router-link :to="{ name: 'Home' }">
        首頁
      </router-link>
    </div>
    <div
      class="w-20 h-20 rounded-full bg-error cursor-pointer
      text-white text-2xl
      fixed bottom-5 right-5
      flex justify-center items-center z-50"
    >
      <a
        class="whitespace-pre-line"
        :href="orderLink"
        target="_blank"
      >
        {{ '立即\n訂房' }}
      </a>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { orderLink } from '@/data/orderData';
import LHeader from './Header.vue';
import LFooter from './Footer.vue';

export default {
  name: 'Layout',
  components: { LHeader, LFooter },
  setup() {
    const route = useRoute();
    const pageName = computed(() => route.name);
    return {
      pageName,
      orderLink,
    };
  },
};
</script>
