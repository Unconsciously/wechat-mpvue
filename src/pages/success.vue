<template>
  <div class="success">
    <p> 扫码结果： {{saleNo}}</p>
    <div class="btn" @click="clickHandle">返回首页</div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      saleNo: null
    };
  },

  methods: {
    clickHandle() {
      const url = "/pages/index";
      wx.reLaunch({ url });
      // wx.navigateBack({
      //   delta: 2
      // });
    }
  },
  mounted: function() {
    this.saleNo = this.$mp.query.saleNo;
  }
};
</script>

<style scoped lang='scss'>
.success {
  padding: 120rpx 70rpx;
  p {
    line-height: 50rpx;
    color: #666;
    font-size: 30rpx;
    text-align: center;
  }
  .btn {
    margin: 70rpx auto;
    background-color: bisque;
    color: #333;
    font-size: 30rpx;
    width: 80%;
    height: 70rpx;
    line-height: 70rpx;
    text-align: center;
  }
}
</style>
