<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      <input type="text" placeholder="请输入城市/景点/游玩主题" />
    </div>
    <div class="header-right">
      {{ city }}<span class="iconfont down-arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: {
      type: String
    }
  }
};
</script>

<style lang="stylus" scope>
// @import '~@/assets/styles/variable.styl';
@import '~styles/variables.styl'

.header
  line-height 0.86rem
  background-color $bgColor
  display flex
  color #ffffff
  .header-left
    width 0.64rem
    .back-icon
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    margin-top 0.12rem
    margin-left 0.1rem
    background #fff
    border-radius 0.1rem
    height 0.64rem
    line-height 0.64rem
    padding-left 0.2rem
    padding-right 0.2rem
    display flex
    align-items baseline
    .search-icon
      color #ccc
      font-size 0.32rem
      margin-right 0.1rem
    input
      width 100%
      color #5a2828
  .header-right
    width 1.24rem
    text-align center
    .down-arrow-icon
      margin-left 0.05rem
      font-size 0.24rem
</style>