<script>
  export default {
    created() {
      // // 调用API从本地缓存中获取数据
      // const logs = wx.getStorageSync('logs') || []
      // logs.unshift(Date.now())
      // wx.setStorageSync('logs', logs)
      //
      // console.log('app created and cache logs by setStorageSync')
      wx.cloud.init({
        traceUser: true
      })
    }
  }
</script>

<style>
  @import '../static/vant-weapp/dist/common/index.wxss';

  /*.container {*/
    /*height: 100%;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*align-items: center;*/
    /*justify-content: space-between;*/
    /*padding: 200 rpx 0;*/
    /*box-sizing: border-box;*/
  /*}*/

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }

  page {
    color: #333;
    background: #FFFFFF;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 0 0 0px;
    -webkit-font-smoothing: antialiased;
    font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  }
</style>
