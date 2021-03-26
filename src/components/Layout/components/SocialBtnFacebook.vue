<template>
  <social-btn
    :src="img"
    :url="link"
  />
</template>
<script>
import img from '@/assets/social_icon/icon_facebook.svg';
import { facebook as link } from '@/data/socialData';
import SocialBtn from './SocialBtn.vue';

export default {
  name: 'SocialBtnFacebook',
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
