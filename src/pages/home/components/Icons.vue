<template>
  <div class="icons">
    <swiper>
      <swiper-slide
        options="swiperOption"
        ref="mySwiper"
        v-for="(page, index) of pages"
        :key="index"
      >
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
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop: true,
          autoplay: 2000
        },
        iconList: [
          {
            id: "0001",
            imgUrl:
              "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc: "景点门票"
          },
          {
            id: "0002",
            imgUrl:
              "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
            desc: "一日游"
          },
          {
            id: "0003",
            imgUrl:
              "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png",
            desc: "欢乐谷万圣节"
          },
          {
            id: "0004",
            imgUrl:
              "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png",
            desc: "泡温泉"
          },
          {
            id: "0005",
            imgUrl:
              "https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
            desc: "川剧变脸"
          },
          {
            id: "0006",
            imgUrl:
              "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png",
            desc: "优惠券"
          },
          {
            id: "0007",
            imgUrl:
              "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png",
            desc: "错峰出游"
          },
          {
            id: "0008",
            imgUrl:
              "https://imgs.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
            desc: "熊猫基地"
          },
          {
            id: "0009",
            imgUrl:
              "https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
            desc: "国色天乡"
          }
        ]
      };
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
  @import '~styles/variables.styl';
  @import '~styles/mixins.styl';

  .icons {
    width: 100%;
    // height: 31.25vw;
    height: 0;
  }

  .icons >>> .swiper-container {
    height: 0;
    padding-bottom: 44%;
  }

  .icons >>> .swiper-pagination {
    color: black;
    background-color: #fff !important;
  }

  .icon {
    float: left;
    width: 25%;
    padding-bottom: 22%;
    position: relative;
    height: 0;

    .icon-img-container {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      position: absolute;
      box-sizing: border-box;
    }

    .icon-img {
      display: block;
      margin: 0 auto;
      padding: 0.1rem;
      height: 100%;
    }

    .icon-desc {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
    }
  }
</style>
