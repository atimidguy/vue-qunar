<template>
  <ul class="item-list">
    <li
      class="item"
      v-for="(val, key) of cities"
      :key="key"
      @touchstart="handleAlphabetTouchStart"
      @touchmove="handleAlphabetTouchMove"
      @touchend="handleAlphabetTouchEnd"
      @click="handleAlphabetClick"
    >
      {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "cityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      isTouched: false,
      startY: 0
    };
  },
  methods: {
    handleAlphabetClick(e) {
      this.$emit("alphabetClick", e.target.innerText);
    },
    handleAlphabetTouchStart() {
      this.isTouched = true;
    },
    handleAlphabetTouchMove(e) {
      if (this.isTouched) {
        const touchY = e.touches[0].clientY;
        console.log(touchY);

        const index = Math.floor((touchY - 121) / 20);
        if (index >= 0 && index < 26) {
          this.$emit("alphabetClick", this.letters[index]);
        }
      }
    },
    handleAlphabetTouchEnd() {
      this.isTouched = false;
    }
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
  top 0
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    color $bgColor
</style>