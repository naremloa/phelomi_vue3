<template>
  <div
    id="Footer"
    class="footer w-full flex flex-col justify-end -mt-24"
  >
    <div class="bg-footer-info-texture bg-cover bg-top h-96">
      <div class="pt-32 flex items-center flex-col">
        <div class="flex w-full">
          <div
            class="flex justify-end pr-10 w-1/2
            border-r-1 border-secondary h-44"
          >
            <img
              class="w-30 object-contain"
              :src="logoVertical"
            >
          </div>
          <div class="flex flex-col pl-10 text-xs text-secondary w-1/2">
            <contact-item :img="iconPhone">
              (06)995-3288
            </contact-item>
            <contact-item :img="iconPhone">
              0967-229-968
            </contact-item>
            <contact-item :img="iconEmail">
              2019starrysky@gmail.com
            </contact-item>
            <contact-item
              class="tracking-widest"
              :img="iconAddress"
            >
              澎湖縣馬公市山水里珠江182號
            </contact-item>
            <div class="flex mt-2 ml-2">
              <long-social-btn
                class="flex-grow mr-2"
                :img="iconWechat"
              >
                微信加入好友
              </long-social-btn>
              <long-social-btn
                class="flex-grow mr-2"
                :img="iconLine"
              >
                LINE 加入好友
              </long-social-btn>
            </div>
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
import ContactItem from '@/components/Layout/components/ContactItem.vue';
import LongSocialBtn from '@/components/LongSocialBtn.vue';
import iconEmail from '@/assets/contact/icon_email.svg';
import iconPhone from '@/assets/contact/icon_phone.svg';
import iconAddress from '@/assets/contact/icon_address.svg';
import iconLine from '@/assets/contact/icon_white_line.svg';
import iconWechat from '@/assets/contact/icon_white_wechat.svg';
import logoVertical from '../../assets/logo/logo_vertical.svg';
import SocialBtnFacebook from './components/SocialBtnFacebook.vue';
import SocialBtnInstagram from './components/SocialBtnInstagram.vue';
import SocialBtnLine from './components/SocialBtnLine.vue';
import SocialBtnWechat from './components/SocialBtnWechat.vue';

export default {
  components: {
    SocialBtnFacebook,
    SocialBtnInstagram,
    SocialBtnLine,
    SocialBtnWechat,
    LongSocialBtn,
    ContactItem,
  },
  setup() {
    return {
      logoVertical,
      iconEmail,
      iconPhone,
      iconAddress,
      iconLine,
      iconWechat,
    };
  },
};
</script>
