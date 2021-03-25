<template>
  <social-btn :src="img" />
</template>
<script>
import img from '@/assets/social_icon/icon_line.svg';
import SocialBtn from './SocialBtn.vue';

export default {
  name: 'SocialBtnLine',
  components: {
    SocialBtn,
  },
  setup() {
    return {
      img,
    };
  },
};
</script>
