<template>
  <div class="container index">
    <div class="logo-box">
      <img src="/static/imgs/logo.png" alt="logo">
      <div class="quit" @click="quitClick">安全退出</div>
      <div class="store">HI !!!</div>
    </div>
    <div class="info-box">
      <div class="info-item" @click="openScanClick(1)">
        <img src="/static/imgs/car.png" alt="">
        <span>停车缴费</span>
      </div>
      <div class="info-item" @click="openScanClick(2)">
        <img src="/static/imgs/gift.png" alt="">
        <span>礼品兑换</span>
      </div>
      <div class="info-item" @click="openScanClick(3)">
        <img src="/static/imgs/pie.png" alt="">
        <span>纸质发票</span>
      </div>
     
    </div>
    <div class="copy">
      <p>版权所有 © XXX（深圳）有限公司</p>
      <p>粤ICP备1000008号</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },

  methods: {
    clickHandle(msg, ev) {
      wx.scanCode({
        onlyFromCamera: true,
        success: res => {
          console.log(res.result);
        }
      });
    },
    quitClick() {
      console.log("退出系统!!!");

      wx.removeStorage({
        key: "loginInfo",
        success: function(res) {
          const url = "./login";
          wx.reLaunch({ url });
        },
        fail: function(error) {
          console.log(error);
        }
      });
    },
    openScanClick(statu) {
      const url = "/pages/scan?statu=" + statu;
      wx.navigateTo({ url });
    }
  }
};
</script>

<style scoped lang='scss'>
.index {
  .logo-box {
    width: 100%;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #f5f5f5;
    .quit {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 13px;
    }
    .store {
      text-align: center;
      font-size: 13px;
    }
    img {
      display: block;
      width: 170rpx;
      height: 180rpx;
      margin: 50rpx auto 20rpx;
    }
  }
  .info-box {
    width: 100%;
    margin-top: 20px;
    .info-item {
      display: flex;
      // width: 100%;
      // margin: 15px 0;
      width: 60%;
      margin: 15px auto;
      border-radius: 6px;

      justify-content: center;
      align-items: center;
      padding: 20px 0;

      &:first-child {
        background: rgba($color: #0bcaa1, $alpha: 0.1);
      }
      &:nth-child(2) {
        background: rgba($color: #1704c5, $alpha: 0.1);
      }
      &:last-child {
        background: rgba($color: #85030e, $alpha: 0.1);
      }
      img {
        width: 40px;
        height: 40px;
      }
      span {
        font-size: 16px;
        padding-left: 10px;
      }
    }
  }
  .copy {
    position: absolute;
    bottom: 10px;
    p {
      color: #999999;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
