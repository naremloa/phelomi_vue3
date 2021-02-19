import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Autoplay]);

export { Swiper, SwiperSlide };
