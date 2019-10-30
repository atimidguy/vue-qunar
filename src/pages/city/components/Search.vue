<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-result">
      111
    </div>
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.search
  height 0.72rem
  padding 0 0.1rem
  background-color $bgColor
  .search-input
    display block
    margin 0 auto
    box-sizing border-box
    width 90%
    height 0.62rem
    border-radius 0.06rem
    padding 0.1rem
    text-align center
    color #666
</style>