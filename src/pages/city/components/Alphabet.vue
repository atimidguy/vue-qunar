<template>
  <ul class="item-list">
    <li
      class="item"
      v-for="(val, key) of cities"
      :key="key"
      :ref="key"
      @touchstart="handleAlphabetTouchStart"
      @touchmove.prevent="handleAlphabetTouchMove"
      @touchend="handleAlphabetTouchEnd"
      @click="handleAlphabetClick"
    >
      {{ key }}
    </li>
  </ul>
</template>

<script>
// import eventBus from "../eventBus";
export default {
  name: "cityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      isTouched: false
    };
  },
  methods: {
    handleAlphabetClick(e) {
      this.$emit("alphabet", e.target.innerText);
    },
    handleAlphabetTouchStart() {
      this.isTouched = true;
    },
    handleAlphabetTouchMove(e) {
      if (this.isTouched) {
        const startY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY;
        const index = Math.floor((touchY - startY) / 20);
        console.log(index);

        if (index >= 0 && index < this.letters.length) {
          this.$emit("alphabet", this.letters[index]);
        }
      }
    },
    handleAlphabetTouchEnd() {
      this.isTouched = false;
    }
  },
  updated() {
    console.log(this.startY);
  },
  computed: {
    // alphabet() {
    //   const alphabetArr = [];
    //   for (let i = 0; i < 26; i++) {
    //     alphabetArr.push(String.fromCharCode(65 + i));
    //   }
    //   return alphabetArr;
    // }
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.item-list
  display flex
  flex-direction column
  justify-content center
  align-items center
  position absolute
  top 1.58rem
  top 0
  right 0
  bottom 0
  width 0.6rem
  .item
    user-select none
    line-height 0.4rem
    color $bgColor
</style>