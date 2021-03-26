<template>
  <!-- <social-btn :src="img" /> -->
  <Popover>
    <template #reference>
      <social-btn :src="img" />
    </template>
    <template #default>
      <div class=" whitespace-nowrap text-center text-sm cursor-pointer">
        <div>掃描QR code立即加入好友，</div>
        <div>或點擊文字複製微信ID</div>
        <div>
          <img
            class="object-contain"
            :src="qrcode"
          >
        </div>
        <div>微信ID：f0967229968</div>
      </div>
    </template>
  </Popover>
</template>
<script>
import Popover from '@/components/Popover.vue';
import img from '@/assets/social_icon/icon_wechat.svg';
import qrcode from '@/assets/qrcode/qrcode-wechat.jpg';
import SocialBtn from './SocialBtn.vue';

export default {
  name: 'SocialBtnWechat',
  components: {
    SocialBtn, Popover,
  },
  setup() {
    return {
      img,
      qrcode,
    };
  },
};
</script>
