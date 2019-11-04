<template>
  <div>
    <detail-banner></detail-banner>
    <div class="content">
      <detail-header></detail-header>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
export default {
  name: "DefaultBanner",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>