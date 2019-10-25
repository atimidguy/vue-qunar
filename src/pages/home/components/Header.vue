<template>
  <div class="header">
    <div class="header-left">&lt;</div>
    <div class="header-input">
      <input type="text" placeholder="请输入城市/景点/游玩主题" />
    </div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  };
</script>

<style lang="stylus" scope>
  .header {
    line-height: 0.86rem;
    background-color: #00bcd4;
    display: flex;
    color: #ffffff;

    .header-left {
      width: 0.64rem;
    }

    .header-input {
      flex: 1;
      margin-top: 0.12rem;
      margin-left: 0.1rem;
      height: 0.64rem;
      background: #fff;
      border-radius: 0.1rem;
      height: 0.64rem;
      line-height: 0.64rem;

      input {
        color: red;
      }
    }

    .header-right {
      width: 1.24rem;
      text-align: center;
    }
  }
</style>