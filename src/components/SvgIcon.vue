<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    v-bind="attrs"
    :width="width"
    :height="height"
  >
    <template v-if="path">
      <path :d="path" />
    </template>
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    path: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: 24,
    },
    width: {
      type: Number,
      default: 24,
    },
  },
  setup() {

  },
};
</script>
