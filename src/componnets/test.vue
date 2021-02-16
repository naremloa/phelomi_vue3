<template>
  <a
    class="block w-screen-20.15vw h-screen-20.15vw border-screen-1vw border-solid text-center leading-screen-18.15vw rounded-screen-3vw"
    :style="toggleLinkType"
    @mouseover.stop="toggle = false"
    @mouseleave.stop="toggle = true"
  >
    <p
      class="inline-block text-screen-3vw font-bold tracking-screen-0.3vw align-middle leading-none"
      :style="toggleTextType"
    >
      {{ contentText }}
    </p>
  </a>
</template>

<script>
export default {
  props: ['setColor', 'contentText'],
  data() {
    return {
      toggle: true,
    };
  },
  computed: {
    toggleLinkType() {
      const vm = this;
      if (vm.toggle) {
        return { 'border-color': vm.setColor };
      }
      return { 'border-color': vm.setColor, 'background-color': vm.setColor, cursor: 'pointer' };
    },
    toggleTextType() {
      const vm = this;
      if (vm.toggle) {
        return { color: vm.setColor };
      }
      return { color: 'white' };
    },
  },
};

</script>

<style scoped>
  /* a.inside-size {
  display:block;
  width:20.15vw;
  height:20.15vw;
  border:1vw solid;
  border-radius: 3vw;
  text-align:center;
  line-height: 18.15vw;
  }
  .text-style {
  font-size: 3vw;
  font-weight: bold;
  letter-spacing: 0.3vw;
  vertical-align: middle;
  line-height:1;
  display:inline-block;
}*/
</style>
