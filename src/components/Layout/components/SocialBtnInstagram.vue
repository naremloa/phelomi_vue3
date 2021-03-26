<template>
  <social-btn
    :src="img"
    :url="link"
  />
</template>
<script>
import img from '@/assets/social_icon/icon_instagram.svg';
import { ig as link } from '@/data/socialData';
import SocialBtn from './SocialBtn.vue';

export default {
  name: 'SocialBtnInstagram',
  components: {
    SocialBtn,
  },
  setup() {
    return {
      img,
      link,
    };
  },
};
</script>
