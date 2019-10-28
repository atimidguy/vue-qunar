<template>
  <div class="footer-container">
    <ul class="footer-nav">
      <li class="footer-nav-item"><a href="#">登录</a></li>
      <li class="footer-nav-item"><a href="#">我的订单</a></li>
      <li class="footer-nav-item"><a href="#">最近浏览</a></li>
      <li class="footer-nav-item"><a href="#">关于我们</a></li>
    </ul>
    <ul class="footer-device">
      <li><a class="footer-device-item active" href="#">触屏版</a></li>
      <li><a class="footer-device-item computer" href="#">电脑版</a></li>
    </ul>
    <div class="copyright">
      <span>Qunar 京ICP备05021087</span>
      <a href="#">意见反馈</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.footer-container
  background-color #f3f3f3
  box-sizing border-box
  padding-bottom 0.5rem
  .footer-nav
    display flex
    justify-content space-around
    margin-right 30%
    padding-top 0.3rem
    padding-bottom 0.1rem
  .footer-device
    display flex
    border-top 2px solid #cacaca
    justify-content center
    padding-top 0.4rem
    padding-bottom 0.2rem
    .active
      color $darkTextColor
    .computer
      margin 0 0.2rem
  .copyright
    color $footerGrayColor
    text-align center
</style>