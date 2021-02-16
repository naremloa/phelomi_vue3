<template>
  <div class="layout container">
    <l-header />
    <slot />
    <l-footer />
  </div>
</template>
<script>
import LHeader from './Header.vue';
import LFooter from './Footer.vue';

export default {
  name: 'Layout',
  components: { LHeader, LFooter },
  setup() {

  },
};
</script>
