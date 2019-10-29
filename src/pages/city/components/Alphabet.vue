<template>
  <div class="list">
    <ul class="item-list">
      <li class="item" v-for="letter of alphabet" :key="letter">
        {{ letter }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cityAlphabet",
  computed: {
    alphabet() {
      const alphabetArr = [];
      for (let i = 0; i < 26; i++) {
        alphabetArr.push(String.fromCharCode(65 + i));
      }
      return alphabetArr;
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
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.35rem
    color $bgColor
</style>