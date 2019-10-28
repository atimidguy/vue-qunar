<template>
  <div>
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  color #fff
  text-align center
  background-color $bgColor
  font-size 0.32rem
  .back-icon
    position absolute
    top 0
    left 0
    width 0.64rem
    font-size 0.4rem
    color #ffffff
</style>

