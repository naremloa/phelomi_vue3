<template>
  <div class="outside">
    <a
      v-show="toggleA"
      class="inside-size"
      :style="{'border-color':setColorA}"
      @mouseover.stop="toggleA = !toggleA"
    >
      <p
        class="text-style"
        :style="{color:setColorA}"
      >
        {{ contentTextA }}
      </p>
    </a>
    <a
      v-show="!toggleA"
      class="inside-size"
      style="cursor:pointer"
      :style="{'border-color':setColorA,'background-color':setColorA}"
      @mouseleave.stop="toggleA = !toggleA"
    >
      <p
        class="text-style"
        style="color:white"
      >
        {{ contentTextA }}
      </p>
    </a>

    <a
      v-show="toggleB"
      class="inside-size"
      :style="{'border-color':setColorB}"
      @mouseover.stop="toggleB = !toggleB"
    >
      <p
        class="text-style"
        :style="{color:setColorB}"
      >
        {{ contentTextB }}
      </p>
    </a>
    <a
      v-show="!toggleB"
      class="inside-size"
      style="cursor:pointer"
      :style="{'border-color':setColorB,'background-color':setColorB}"
      @mouseleave.stop="toggleB = !toggleB"
    >
      <p
        class="text-style"
        style="color:white"
      >
        {{ contentTextB }}
      </p>
    </a>

    <a
      v-show="toggleC"
      class="inside-size"
      :style="{'border-color':setColorC}"
      @mouseover.stop="toggleC = !toggleC"
    >
      <p
        class="text-style"
        :style="{color:setColorC}"
      >
        {{ contentTextC }}
      </p>
    </a>
    <a
      v-show="!toggleC"
      class="inside-size"
      style="cursor:pointer"
      :style="{'border-color':setColorC,'background-color':setColorC}"
      @mouseleave.stop="toggleC = !toggleC"
    >
      <p
        class="text-style"
        style="color:white"
      >
        {{ contentTextC }}
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: ['setColorA', 'setColorB', 'setColorC'],
  data() {
    return {
      contentTextA: '跳島趣行程',
      contentTextB: '愛玩水行程',
      contentTextC: '愛浪漫行程',
      toggleA: true,
      toggleB: true,
      toggleC: true,
    };
  },
};

</script>

<style scoped>
div.outside {
  display:flex;
  justify-content: space-evenly;
}
a.inside-size {
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

}
</style>
