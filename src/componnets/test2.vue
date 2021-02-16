<template>
  <div class="p-screen-0.95">
    <a
      :href="introductionLink"
      class="block w-screen-27.54"
    >
      <img alt="" :src="imgSource" class="inline-block w-screen-2754 h-screen-19.66"/>
      <div class="py-0 px-screen-2.42">
        <p
        class="py-screen-0.4 px-0 border-b-screen-0.15 border-solid border-darkblue text-center text-screen-2.08 tracking-screen-0.4 text-darkblue"
        >
          {{ titleText }}
        </p>
        <p :style="contentStyle" class="py-screen-0.4 px-0 text-center text-screen-1.3 tracking-03vw">
          <slot></slot>
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['introductionLink', 'imgSource', 'titleText'],
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>
