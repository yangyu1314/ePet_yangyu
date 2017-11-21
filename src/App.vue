<template>
  <div class="Wrap">
    <div class="containerWrap">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer_tab">
      <div class="tab_item">
        <router-link to="/first-page">
          <img src="" alt="">
          首页
        </router-link>
      </div>
      <div class="tab_item">
        <router-link to="/category">分类</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/shopcart">购物车</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/mine">我的E宠</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .Wrap
    position relative
    width 100%
    height 667px
    overflow hidden
    .containerWrap
      width 100%
      height 620px
      overflow hidden
    .footer_tab
      position absolute
      left 0
      bottom 0
      width 100%
      height 45px
      background-color pink
      display flex
      justify-content space-around
      align-items center
</style>
