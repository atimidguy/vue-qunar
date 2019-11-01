<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" @touchstart="toHomepage">
              <!-- {{ this.$store.state.city }} -->
              {{ currentCity }}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="city in hot"
            :key="city.name"
            @touchstart="handleCityClick(city.name)"
          >
            <div class="button">{{ city.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list" v-for="innerItem in item" :key="innerItem.id">
          <li
            class="item border-bottom"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import eventBus from "../eventBus";
// import BScroll from '@better-scroll/core'
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "cityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  methods: {
    ...mapMutations(["changeCity"]),
    handleCityClick(city) {
      // this.$store.dispatch("changeCity", city);
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.toHomepage();
    },
    toHomepage() {
      this.$router.push("/");
    }
  },
  // created() {},
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
    // alphabet() {
    //   const alphabetArr = [];
    //   for (let i = 0; i < 26; i++) {
    //     alphabetArr.push(String.fromCharCode(65 + i));
    //   }
    //   return alphabetArr;
    // }
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