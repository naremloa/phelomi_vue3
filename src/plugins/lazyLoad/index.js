import VueLazyloadNext from 'vue-lazyload-next';
import loadImage from '@/assets/bg_image/bg_placeholder.jpg';

export default [
  VueLazyloadNext,
  {
    loading: loadImage,
  },
];
