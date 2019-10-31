<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
      <div class="search-result-wrapper" ref="search" v-show="keyword">
        <ul class="search-result">
          <li
            class="result-item border-bottom"
            v-for="(item, index) in filteredCities"
            :key="index"
          >
            <!-- v-for="innerItem in item"
            :key="innerItem" -->
            {{ item.name }}
          </li>
          <li class="result-item" v-show="hasNoData">
            没有找到匹配数据
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: ["cities"],
  data() {
    return {
      keyword: "",
      filteredCities: [],
      timer: null
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.keyword.length > 10) {
        return;
      }
      if (!this.keyword) {
        this.filteredCities = [];
        return;
      }
      this.timer = setTimeout(() => {
        let result = [];
        // let tempRes = [];
        for (let i in this.cities) {
          // using Array.prototype.filter
          //   tempRes = this.cities[i].filter(
          //     value =>
          //       value.spell.indexOf(this.keyword) > -1 ||
          //       value.name.indexOf(this.keyword) > -1
          //   );
          //   result.push(...tempRes);

          // using Array.prototype.forEach
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword.trim()) > -1 ||
              value.name.indexOf(this.keyword.trim()) > -1
              // value.spell.startsWith(this.keyword) ||
              // value.name.startsWith(this.keyword)
            ) {
              result.push(value);
              // 排序
              result = result.sort((a, b) => {
                return (
                  a.spell.indexOf(this.keyword.trim()) -
                  b.spell.indexOf(this.keyword.trim())
                );
              });
            }
          });
        }
        this.filteredCities = result;
      }, 100);
    }
  },
  computed: {
    hasNoData() {
      return !this.filteredCities.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.border-bottom
  &:before
    border-color #ccc
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
<<<<<<< HEAD
  .search-result
    z-index 100
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
=======
  .search-result-wrapper
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 100
    background-color #fdfdfd
    color #666
>>>>>>> origin/city-search-logic
    // max-height 6.3rem
    // overflow auto
    // border-radius 0.06rem
    // box-shadow 1px 1px 3px #cfcfcf
    // width 86%
    // box-sizing border-box
<<<<<<< HEAD
    // top 1.54rem
    // left 7%
    // background-color #fdfdfd
    // text-align center
    // color #666
=======
    // text-align center
>>>>>>> origin/city-search-logic
    .result-item
      font-size 0.28rem
      line-height 0.62rem
      height 0.62rem
      padding-left 0.3rem
</style>