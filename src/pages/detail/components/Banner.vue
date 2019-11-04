<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1505/e9/e9b65c2a4cb2d2cb.water.jpg_600x330_d218ad4a.jpg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont imgfont">&#xe64b;</span>43
        </div>
        <div class="banner-title">碧峰峡(AAAA景区)</div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      v-show="galleryShow"
      @close="handleGalleryClose"
    />
  </div>
</template>

<script>
import CommonGallery from "../../common/gallery/Gallery";
export default {
  name: "DetailBanner",
  components: {
    CommonGallery
  },
  data() {
    return {
      galleryShow: false,
      imgs: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1903/3d/3dd2810501e28876a3.img.jpg_r_800x800_0d772a4c.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1903/59/59480be9c47de299a3.img.jpg_350x240_f477e7b8.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1903/77/77207e5a93f9707ea3.img.jpg_r_800x800_a5277d00.jpg"
        }
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.galleryShow = true;
    },
    handleGalleryClose() {
      this.galleryShow = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  background-color #f1f1f1
.banner-img
  width 100%
.banner-info
  position absolute
  padding-left 0.2rem
  left 0
  right 0
  bottom 0
  color #fff
  &:after
    content ''
    position absolute
    left 0
    right 0
    bottom 0
    height 0.5rem
    background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
  .banner-number
    width 0.5rem
    font-size 0.24rem
    padding 0.1rem 0.3rem
    margin-left 0.1rem
    margin-bottom 0.1rem
    background-color rgba(0, 0, 0, 0.8)
    border-radius 0.2rem
    .imgfont
      font-size 0.24rem
      margin-right 0.04rem
  .banner-title
    font-size 0.36rem
    margin-bottom 0.35rem
</style>