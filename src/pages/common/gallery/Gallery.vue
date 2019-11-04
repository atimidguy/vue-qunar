<template>
  <div class="gallery-container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(img, index) in imgs" :key="index">
          <img class="gallery-img" :src="img" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        loop: true,
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleGalleryClick() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.gallery-container >>> .swiper-container
  overflow inherit
.gallery-container >>> .swiper-wrapper
  display flex
  align-items center
.gallery-container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .gallery-img
      width 100%
    .swiper-pagination
      bottom -1rem
      color #fff
</style>