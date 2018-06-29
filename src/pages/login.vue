<template>
  <div class="container login">
      <div class="logo-box">
          <img src="/static/imgs/logo.png" alt="">
      </div>

      <div class="from-box">
          <input v-model="userNo" placeholder="请输入账号">
          <input v-model="pwd" placeholder="请输入密码">
          <button class="submit-btn" @click="loginHandle">登录</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userNo: "",
      pwd: ""
    };
  },

  methods: {
    loginHandle() {
      if (!this.userNo) {
        wx.showToast({
          title: "用户名不可为空!",
          icon: "none",
          duration: 1500
        });
        return;
      } else if (!this.pwd) {
        wx.showToast({
          title: "密码不可为空!",
          icon: "none",
          duration: 1500
        });
        return;
      }
      wx.setStorage({
        key: "loginInfo",
        data: {
          userNo: this.userNo,
          pwd: this.pwd,
          isLogin: true
        }
      });
      const url = "./index";
      wx.reLaunch({ url });
    },
    getLoginInfo() {
      // 调用登录接口
      wx.getStorage({
        key: "loginInfo",
        success: function(res) {
          if (res.data.isLogin) {
            wx.reLaunch({ url: "./index" });
          } else {
            return;
          }
        },
        fail: function(error) {
          console.log(error);
        }
      });
    }
  },
  mounted: function() {
    this.getLoginInfo();
  }
};
</script>

<style scoped lang='scss'>
.login {
  .logo-box {
    margin: 1rem auto 0.5rem;
    img {
      display: block;
      width: 170rpx;
      height: 180rpx;
      margin: 50rpx auto 20rpx;
    }
  }
  .from-box {
    input {
      margin-bottom: 0.25rem;
      border-bottom: 1px solid #cdcdcd;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.32rem;
      text-align: center;
      color: #333;
    }
    .submit-btn {
      margin-top: 0.55rem;
      line-height: 0.76rem;
      font-size: 0.33rem;
      color: #333;
      background-color: bisque;
    }
  }
}
</style>
