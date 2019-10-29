<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="letter of alphabet" :key="letter">
        <div class="title border-topbottom">{{ letter }}</div>
        <ul class="item-list" v-if="letter === 'A'">
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from '@better-scroll/core'
import BScroll from "better-scroll";
export default {
  name: "cityList",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
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

.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height 0.44rem
    font-size 0.26rem
    padding-left 0.2rem
    background #eee
    color #666
  .button-list
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    overflow hidden
    // 触发BFC
    // &:after
    // content ''
    // display block
    // clear both
    .button-wrapper
      width 33.33%
      float left
      .button
        text-align center
        padding 0.1rem 0
        border 0.02rem solid #ccc
        margin 0.1rem
        border-radius 0.06rem
  .item-list, .item
    line-height 0.7rem
    padding-left 0.2rem
</style>