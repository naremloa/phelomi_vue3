<template>
  <layout class="overflow-hidden">
    <router-view v-slot="{ Component }">
      <div id="Content">
        <component :is="Component" />
      </div>
    </router-view>
  </layout>
</template>

<script>
import Layout from '@/components/Layout/index.vue';

export default {
  components: { Layout },
  setup() {

  },
};
</script>
