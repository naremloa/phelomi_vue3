<template>
  <a
    class="block w-screen-20.15vw h-screen-20.15vw border-screen-1vw
    border-solid text-center leading-screen-18.15vw rounded-screen-3vw"
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

</style>
