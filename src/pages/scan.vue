<template>
  <view class='scan'>
  <view class='tips-box'>
    <view class='tip'>
     
      <img src="/static/imgs/one.png" alt="">
      <view> 用户出示购物</view>
      <view>电子小票二维码</view>
    </view>
    <view class='line'></view>
    <view class='tip'>
      <img src="/static/imgs/two.png" alt="">
      <view> 自助扫码盖戳</view>
    </view>
    <view class='line'></view>
    <view class='tip'>
      <img src="/static/imgs/three.png" alt="">
      <view> 盖戳成功 离场</view>
    </view>
  </view>
  <view class='scan-type'>
    <text v-if='statu == 1'>停车缴费盖戳</text>
    <text v-if='statu == 2'>礼品兑换盖戳</text>
    <text v-if='statu == 3'>纸质发票盖戳</text>
  </view>
  <view class='go-scan'>
    <view class='go-scan-box' @click='goScan'>
    
       <img src="/static/imgs/scan.png" alt="">
      <view>扫一扫</view>
      <view>小票二维码</view>
    </view>

  </view>
</view>
</template>

<script>
export default {
  data() {
    return {
      statu: null
    };
  },
  methods: {
    goScan() {
      let _self = this;
      wx.scanCode({
        onlyFromCamera: true,
        success: res => {
    
          const url = "/pages/success?statu=" + _self.statu + "&saleNo=" + res.result;
          wx.navigateTo({ url });
        },
        fail: err => {
          console.log(err)
        }
      });
    }
  },
  mounted: function() {
    this.statu = this.$mp.query.statu;
  }
};
</script>

<style scoped lang='scss'>
.scan {
  .tips-box {
    margin: 70rpx 0 30rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .tip {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 30%;
      margin: 0 auto;
      image {
        width: 70rpx;
        height: 70rpx;
        margin: 0 auto 15rpx;
      }
      view {
        font-size: 26rpx;
        color: #333;
        text-align: center;
      }
    }
    .line {
      width: 3rpx;
      height: 40rpx;
      background-color: #999;
      margin: 20rpx auto;
    }
  }
  .go-scan {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 330rpx;
    background-color: #f5f5f5;
    .go-scan-box {
      position: absolute;
      top: -40%;
      height: 180rpx;
      width: 180rpx;
      left: 30%;
      right: 30%;
      background-color: #ffe5bf;
      border-radius: 50%;
      border: 30rpx solid #f5f5f5;
      padding: 30rpx;
      img {
        display: block;
        width: 80rpx;
        height: 60rpx;
        margin: 20rpx auto 10rpx;
      }
      view {
        font-size: 24rpx;
        color: #333;
        text-align: center;
      }
    }
  }

  .scan-type {
    color: #ff9800;
    font-size: 35rpx;
    padding-top: 15rpx;
    text-align: center;
  }
}
</style>
