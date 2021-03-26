<template>
  <div
    ref="reference"
    @mouseover="show"
    @mouseleave="hide"
  >
    <slot name="reference" />
    <div
      ref="popover"
      class="popover bg-grey py-2 px-3 text-primary rounded-md z-40"
      :class="{'opacity-0': !popoverShow}"
    >
      <div class="bg-grey rounded">
        <slot />
      </div>
      <div
        ref="arrow"
        class="arrow"
        data-popper-arrow
      />
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import { createPopper } from '@popperjs/core';

export default {
  setup() {
    const popover = ref(null);
    const reference = ref(null);
    const arrow = ref(null);
    const timeout = ref(null);
    const popoverShow = ref(false);
    onMounted(() => {
      setTimeout(() => {
        const popperInstance = createPopper(
          reference.value,
          popover.value,
          {
            placement: 'bottom',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 8],
                },
              },
              {
                name: 'arrow',
                options: {
                  element: arrow.value,
                },
              },
            ],
          },
        );
      }, 1000);
    });
    const show = () => {
      popoverShow.value = true;
      if (timeout.value) {
        clearTimeout(timeout.value);
        timeout.value = null;
      }
    };
    const hide = () => {
      if (timeout.value) clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        popoverShow.value = false;
        timeout.value = null;
      }, 50);
    };
    return {
      popover,
      reference,
      arrow,
      show,
      hide,
      popoverShow,
    };
  },
};
</script>
<style>
.popover .arrow,
.popover .arrow::before {
  position: absolute;
  width: 20px;
  height: 20px;
  background: inherit;
}

.popover .arrow {
  visibility: hidden;
  z-index: -1;
}

.popover .arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

.popover[data-popper-placement^='top'] > .arrow {
  bottom: -4px;
}

.popover[data-popper-placement^='bottom'] > .arrow {
  top: -4px;
}

.popover[data-popper-placement^='left'] > .arrow {
  right: -4px;
}

.popover[data-popper-placement^='right'] > .arrow {
  left: -4px;
}
</style>
