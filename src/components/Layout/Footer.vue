<template>
  <div
    id="Footer"
    class="footer w-full flex flex-col justify-end -mt-24"
  >
    <div class="bg-footer-info-texture bg-cover bg-top h-96">
      <div class="pt-20 flex items-center flex-col">
        <div class="w-65 h-44 flex">
          <div class="w-2/5 flex justify-center">
            <img
              class="w-20 h-28"
              :src="logoVertical"
            >
          </div>
          <div class="w-3/5 px-5">
            right
          </div>
        </div>
        <div class="flex w-36 h-7 mt-5 mb-2">
          <social-btn-facebook />
          <social-btn-line />
          <social-btn-wechat />
          <social-btn-instagram />
        </div>
        <div class="text-center text-xs w-96">
          © 2019 Family Starry Sky Co., Ltd. All rights reserved. 飛樂米星空號有限公司 版權所有
          Design by 方蘋果數位行銷設計有限公司
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logoVertical from '../../assets/logo/logo_vertical.svg';
import SocialBtnFacebook from './components/SocialBtnFacebook.vue';
import SocialBtnInstagram from './components/SocialBtnInstagram.vue';
import SocialBtnLine from './components/SocialBtnLine.vue';
import SocialBtnWechat from './components/SocialBtnWechat.vue';

export default {
  components: {
    SocialBtnFacebook, SocialBtnInstagram, SocialBtnLine, SocialBtnWechat,
  },
  setup() {
    return {
      logoVertical,
    };
  },
};
</script>
