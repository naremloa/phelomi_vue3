<template>
  <div class="location-content flex mb-20 md:pl-16">
    <div class="w-full md:w-3/5">
      <Title class="md:w-5/6">
        <div class="flex items-end">
        <div
        v-if="titleImg"
        class="w-32 max-h-28 hidden md:block"
        >
        <img :src="titleImg">
        </div>
        <div class="text-primary">
        {{ title }}
        </div>
        </div>
      </Title>
      <div class="my-6">
        <div class="mb-4 text-primary text-xl font-bold tracking-widest">
          {{ description }}
        </div>
        <div
          class="text-error text-2xl font-bold tracking-widest"
        >
          {{ address }}
        </div>
      </div>
      <div>
        <div class="text-primary text-3xl font-bold mb-4">
          {{ distanceTitle }}
        </div>
        <template v-if="distance && distance.length">
          <div
            v-for="(item, iIdx) in distance"
            :key="iIdx"
            class="mb-2 leading-5"
          >
            <div class="text-primary font-bold text-xl flex items-center">
              <span
                class=" text-2xl md:text-3xl border-2 box-border px-2 leading-10
                border-solid border-primary rounded-xl
                md:max-w-max"
                :class="item.type === 'short' ? 'max-w-17' : 'max-w-29'"
              >{{ item.title }}</span>
              <span class="text-base md:text-lg mx-2">{{ item.description }}</span>
              <span
                class="bg-error rounded-full text-white leading-13 text-3xl text-center"
                style="padding: 0 10px; min-width: 3.25rem"
              >
                {{ item.num }}
              </span>
              <span class="mx-2">{{ item.unit }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="w-2/5 hidden md:block">
      <img
        v-if="img"
        class="object-contain"
        :src="img"
      >
    </div>
  </div>
</template>
<script>
import Title from './Title.vue';

export default {
  name: 'LocationContent',
  components: { Title },
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    titleImg: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    distanceTitle: {
      type: String,
      default: '',
    },
    distanceDescription: {
      type: String,
      default: '',
    },
    distance: {
      type: Array,
      default: () => [],
    },
  },
  setup() {

  },
};
</script>
