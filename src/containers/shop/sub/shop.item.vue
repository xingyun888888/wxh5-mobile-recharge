<template>
  <div class="shop-item" @click="click">
    <div class="logo">
      <img src="../../../assets/logo.jpg" alt="">
    </div>
    <div class="detail">
      <div class="shop-name">
        {{item.name}}
        <span class="dis">{{item.distance}}</span>
      </div>
      <div class="shop-status">
        <span class="borrow">
          <i class="icon-borrow">借</i>{{item.borrow}}
        </span>
        <span class="return">
          <i class="icon-return">还</i>{{item.back}}
        </span>
        <span class="state state-on" v-if="item.online">
          设备在线
        </span>
         <span class="state state-off" v-else>
          设备离线
        </span>
      </div>
      <div class="shop-address">
        {{item.address}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shop-item',
  props: ["item", "index"],
  methods: {
    click () {
      this.$emit('on-click', this.item.id);
    }
  }
}
</script>
<style lang="less">
.shop-item{
  padding: 16rpx;
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #ddd;
  .logo{
    width: 64rpx;
    height: 64rpx;
    background-color: #F2F2F2;
    border-radius: 6rpx;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .detail{
    margin-left: 16rpx;
    flex: 1;
    width: 100px;
  }
  .shop-name{
    font-size: 14rpx;
  }
  .shop-status{
    margin-top: 4rpx;
  }
  .dis{
    float: right;
    color: #757575;
    font-size: 12rpx;
  }
  .borrow{
    color: #0085EE;
    margin-right: 12rpx;
  }
  .return{
    color: #00A282;
    margin-right: 12rpx;
  }
  .icon-borrow, .icon-return{
    display: inline-block;
    width: 14rpx;
    height: 14rpx;
    border: 1px solid;
    text-align: center;
    line-height: 14rpx;
    font-style: normal;
    margin-right: 4rpx;
  }
  .icon-borrow{
    border-color: #0085EE;
  }
  .icon-return{
    border-color: #00A282;
  }
  .state{
    display: inline-block;
    height: 16rpx;
    line-height: 16rpx;
    padding: 0 4rpx;
    border-radius: 8rpx;
    color: #fff;
  }
  .state-on{
    background-color: #FF9800;
  }
  .state-off{
    background-color: #E44545;
  }
  .shop-address{
    color: #999999;
    font-size: 12rpx;
    margin-top: 4rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
}
</style>
