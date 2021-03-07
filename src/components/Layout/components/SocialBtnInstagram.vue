<template>
  <social-btn
    :src="img"
  />
</template>
<script>
import img from '@/assets/social_icon/icon_instagram.svg';
import SocialBtn from './SocialBtn.vue';

export default {
  name: 'SocialBtnInstagram',
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
