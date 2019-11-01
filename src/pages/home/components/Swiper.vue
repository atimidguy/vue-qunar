
<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide
        :swiperList="swiperList"
        v-for="item of swiperList"
        :key="item.id"
        ><img class="swiper-img" :src="item.imgUrl" alt=""
      /></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: {
      type: Array
      // required: true
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        loop: true,
        autoplay: 2000,
        // START: fix swiper not autoplaying after changing city
        observer: true,
        observeParents: true
        // END
      }
      // swiperList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg"
      //     //  '/images/banner1.jpg'
      //   },
      //   {
      //     id: "0002",
      //     imgUrl:
      //       "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/b948e8c78a313205798f910f4c4a2c57.jpg_750x200_a48b8e47.jpg"
      //   }
      // ]
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff !important
.wrapper
  width 100%
  // height: 31.25vw;
  height 0
  padding-bottom 30%
  overflow hidden
  background-color #f1f1f1
  .swiper-img
    width 100%
</style>