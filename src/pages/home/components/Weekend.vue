<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of itemList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.name }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      itemList: [
        {
          id: "0001",
          name: "远离烧烤模式",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg",
          desc:
            "与冰川里的水晶宫、“摄影家走廊”、来一场亲密的约会，艰辛会有的，可这都是值得的"
        },
        {
          id: "0002",
          name: "摩崖石刻造像",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg",
          desc:
            "诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选"
        },
        {
          id: "0003",
          name: "当地人爱玩",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1811/8a/e1edf5c1c52ff4.jpg_r_640x214_40693298.jpg",
          desc:
            "“朝辞白帝彩云间.....”，重温诗仙李白的经典诗词，欣赏浓浓人文气息"
        },
        {
          id: "0004",
          name: "阿坝温泉滑雪",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1810/63/fecab9ecec4fc6.jpg_r_640x214_f06ca575.jpg",
          desc: "放肆玩转冰雪间，温泉滋养排寒气！"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.item
  margin-bottom 0.1rem
.title
  margin-top 0.1rem
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.item-img-wrapper
  height 0
  overflow hidden
  padding-bottom 33.4%
  .item-img
    width 100%
.item-info
  padding 0.1rem
  .item-title
    font-size 0.32rem
    line-height 0.54rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    color #ccc
    ellipsis()
</style>