<template>
  <div class="recommend-container">
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        :recommendList="recommendList"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: {
      type: Array
      // require: true
    }
  },
  data() {
    return {
      // itemList: [
      //   {
      //     id: "0001",
      //     name: "九皇山",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/sight/p0/1910/86/862069749e0faf54a3.water.jpg_200x200_a519e249.jpg",
      //     desc: "九皇山（前身是西羌九皇山猿王洞景区）位于羌族自治县--北川县境内"
      //   },
      //   {
      //     id: "0002",
      //     name: "碧峰峡",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/sight/p0/1505/e9/e9b65c2a4cb2d2cb.water.jpg_200x200_427e71c7.jpg",
      //     desc: "国家AAA级旅游景区"
      //   },
      //   {
      //     id: "0003",
      //     name: "二郎山喇叭河旅游景区",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/sight/p0/1608/75/7571cf9ae006ce31a3.img.jpg_200x200_0e193858.jpg",
      //     desc: "国家级森林公园自然保护区"
      //   },
      //   {
      //     id: "0004",
      //     name: "蒙顶山",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/sight/p0/1507/b8/d2be8de3c5d08f216130797a49c2fa69.water.jpg_200x200_23c7395e.jpg",
      //     desc: "国家AAAA级景区"
      //   }
      // ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.recommend-container
  box-sizing border-box
  height 10.3rem
.title
  margin-top 0.1rem
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    padding 0.1rem
    flex 1
    min-width 0
    .item-title
      font-size 0.32rem
      line-height 0.54rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #555
      ellipsis()
    .item-button
      background #ff9300
      color #fff
      border-radius 0.06rem
      padding 0 0.2rem
      margin-top 0.2rem
      line-height 0.44rem
</style>