<template>
  <div>
    <div class="first_header">
      <div class="location">
        <div class="address">
          狗狗站 | 重庆
        </div>
        <div class="search">
          <input class="inp" type="text" placeholder="搜索商品和品牌">
        </div>
        <div class="dialogue">
          <span class="icon-dialogue"></span>
        </div>
      </div>
      <ul class="nav_tab">
        <li class="navItem active">首页</li>
        <li class="navItem">服饰城</li>
        <li class="navItem">狗狗主粮</li>
        <li class="navItem">医疗保健</li>
        <li class="navItem">零食玩具</li>
        <li class="navItem">日用外出</li>
        <li class="navItem">美容香波</li>
      </ul>
    </div>
    <scroller>
    <div class="content">
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="./banner/one2.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./banner/one3.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./banner/one4.png" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <split></split>
      <div class="nav_entry">
        <ul>
          <li class="entry_item">
            <img src="./entrys/one5-1.png" alt="">
          </li>
          <li class="entry_item">
            <img src="./entrys/one5-2.png" alt="">
          </li>
          <li class="entry_item">
            <img src="./entrys/one5-3.png" alt="">
          </li>
          <li class="entry_item">
            <img src="./entrys/one5-4.png" alt="">
          </li>
          <li class="entry_item">
            <img src="./entrys/one5-5.png" alt="">
          </li>
          <li class="entry_item">
            <img src="./entrys/one5-6.png" alt="">
          </li>
          <li class="entry_item">
            <img src="./entrys/one5-7.png" alt="">
          </li>
          <li class="entry_item">
            <img src="./entrys/one5-8.png" alt="">
          </li>
        </ul>
      </div>
      <split></split>
      <div class="day_sale">
        <div class="daySale_header">
          <img src="./sale/daysalelogo.png" alt="">

        </div>
        <ul class="salesList">
          <li class="saleItem">
            <img src="./sale/sale.jpg" alt="">
            <div class="">
              <span>¥</span>
              <span>1.50</span>
            </div>
            <p>省￥13.50</p>
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
        </ul>
      </div>
      <div class="day_sale">
        <div class="daySale_header">
          <img src="./sale/daysalelogo.png" alt="">

        </div>
        <ul class="salesList">
          <li class="saleItem">
            <img src="./sale/sale.jpg" alt="">
            <div class="">
              <span>¥</span>
              <span>1.50</span>
            </div>
            <p>省￥13.50</p>
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
          <li class="saleItem">
            <img src="./sale/sale01.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    </scroller>
  </div>
</template>

<script>
  import split from '../../components/split/split.vue'
  export default {
    components:{
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .first_header
    width 100%;
    position absolute
    background-color #fff
    left 0
    top 0
    z-index 50
    .location
      padding 15px 10px
      display flex
      align-items center
      font-size 14px
      color #666
      .address
        margin-right 5px
      .search
        .inp
          width: 100%;
          height: 25px;
          background: #e9e9e9;
          border-radius: 4px;
          color: #bcbcbc;
          text-indent: 10px;
          font-size: 13px;
          outline: 0;

    .nav_tab
      width 140%
      height 30px
      display flex
      justify-content space-around
      font-size 14px
      .navItem
        width 14.2%
        text-align center
      .active
        color #459d36
        border-bottom 3px solid #459d36
  .content
    padding-top 85px
    box-sizing border-box
    .banner
      width 100%
      height 160px
      .mint-swipe-item
        float left
        img
          width 100%
    .nav_entry
      width 100%
      overflow hidden
      .entry_item
        width 25%
        float left
        img
          width 100%
    .day_sale
      width 100%
      .daySale_header
        height 24px
        padding 10px
        img
          height 100%
      .salesList
        width 200%
        display flex
        .saleItem
          width 12.5%
          img
            width 100%

</style>
