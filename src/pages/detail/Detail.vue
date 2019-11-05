<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="galleryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      categoryList: [],
      galleryImgs: []
    };
  },
  methods: {
    getDetail() {
      this.$http
        .get("/api/detail.json", { params: { id: this.$route.params.id } })
        .then(this.getDetailSucc);
    },
    getDetailSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.categoryList = data.categoryList;
        this.galleryImgs = data.galleryImgs;
      }
    }
  },
  mounted() {
    this.getDetail();
  }
  // activated() {
  //   this.getDetail();
  // }
};
</script>
<style lang="stylus" scoped>
.content {
  height 50rem
}
</style>