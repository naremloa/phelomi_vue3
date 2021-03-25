<template>
  <social-btn
    :src="img"
  />
</template>
<script>
import img from '@/assets/social_icon/icon_facebook.svg';
import SocialBtn from './SocialBtn.vue';

export default {
  name: 'SocialBtnFacebook',
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
