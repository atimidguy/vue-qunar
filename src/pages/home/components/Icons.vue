<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper" v-if="isKeep">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.index">
          <div class="icon-img-container">
            <img class="icon-img" :src="icon.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{ icon.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true
      },
      isKeep: false
    };
  },
  // activated && deactivated hooks are used to fix swiper not autoplaying when going back to homepage 
  activated() {
    this.isKeep = true;
  },
  deactivated() {
    this.isKeep = false;
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

.icons>>>.swiper-pagination-bullet-active
  background-color $bgColor !important
.icons>>>.swiper-pagination-bullet
  width 0.12rem
  height 0.12rem
.icons>>>.swiper-container
  padding-bottom 0.2rem
.icons>>>.swiper-pagination
  bottom 0
.icons
  height 0 padding-bottom 46%
  .icon
    float left
    width 25%
    padding-bottom 22%
    position relative
    height 0
    .icon-img-container
      top 0.2rem
      left 0
      right 0
      bottom 0.6rem
      position absolute
      box-sizing border-box
      .icon-img
        display block
        margin 0 auto
        padding 0.1rem
        height 100%
    .icon-desc
      position absolute
      bottom 0
      left 0
      right 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>