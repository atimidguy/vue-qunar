<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      请输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ $store.state.city }}
        <!-- {{ this.$store.state.city }} -->
        <span class="iconfont down-arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.header
  line-height $headerHeight
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
    color #999
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
  .header-right
    flex-shrink 1
    width 1.6rem
    text-align center
    color #fff
    .down-arrow-icon
      font-size 0.24rem
</style>