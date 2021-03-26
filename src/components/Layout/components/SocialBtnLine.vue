<template>
  <Popover>
    <template #reference>
      <social-btn :src="img" />
    </template>
    <template #default>
      <div class=" whitespace-nowrap text-center text-sm cursor-pointer">
        <div>掃描QR code立即加入好友，</div>
        <div>或點擊文字複製LINE ID</div>
        <div>
          <img
            class=" object-contain"
            :src="qrcode"
          >
        </div>
        <div>LINE ID：@f0967229968</div>
      </div>
    </template>
  </Popover>
</template>
<script>
import Popover from '@/components/Popover.vue';
import img from '@/assets/social_icon/icon_line.svg';
import qrcode from '@/assets/qrcode/qrcode-line.png';
import SocialBtn from './SocialBtn.vue';

export default {
  name: 'SocialBtnLine',
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
