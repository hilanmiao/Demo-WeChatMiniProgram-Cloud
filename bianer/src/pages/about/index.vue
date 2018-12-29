<template>
  <div class="container">
    <div class="bangbian-wrapper">
      <div class="left">
        <image :src="filePath + 'logo.png'" @click="preview(filePath + 'logo.png')"></image>
      </div>
      <div class="right">
        <div class="name">
          邻居你好，
          <br>遇见你是我的荣幸！
        </div>
      </div>
    </div>
    <div class="production-wrapper">
      <div class="left">
        <image :src="filePath + 'miniprogram1.jpg'" @click="preview(filePath + 'miniprogram1.jpg')"></image>
      </div>
      <div class="right">
        <div class="name">傍边小程序</div>
        <div class="description">汇总小区商铺、重要机构联系方式，一键拨打
          <span class="tip">商家电话</span>，免去到处打听商家电话的烦恼。</div>
      </div>
    </div>
    <div class="production-wrapper">
      <div class="left">
        <image :src="filePath + 'comming.png'" @click="preview(filePath + 'publicaccount.png')"></image>
      </div>
      <div class="right">
        <div class="name">傍边公众号</div>
        <div class="description">还在每天往微信群里发广告？还在为找<span class="tip">促销活动</span>翻那长长的聊天记录?来这里吧,你想要的都有。建设中，敬请期待。</div>
      </div>
    </div>
    <div class="production-wrapper">
      <div class="left">
        <image :src="filePath + 'comming.png'" @click="preview(filePath + 'community.png')"></image>
      </div>
      <div class="right">
        <div class="name">傍边微小区</div>
        <div class="description">微小区是一个面向小区的<span class="tip">邻里社交</span>服务平台，提供物业服务、邻里社交、商家优惠等民生信息及服务。建设中，敬请期待。</div>
      </div>
    </div>
    <div class="production-wrapper">
      <div class="left">
        <image :src="filePath + 'me.jpg'" @click="preview(filePath + 'me.jpg')"></image>
      </div>
      <div class="right">
        <div class="name">傍边作者</div>
        <div class="description">承接系统集成、软件定制开发、网站建站，APP开发，微信公众号、小程序、海报设计、店铺宣传等业务。保存左侧二维码加微信好友或致电
          <span class="tip" @click="call('18353674768')">18353674768</span>，欢迎咨询。</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      filePath: 'cloud://test-6ca2d3.7465-test-6ca2d3/'
    }),
    methods: {
      preview(src) {
        wx.previewImage({
          current: src,
          urls: [src]
        })
      },
      call(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        })
      }
    }
  }
</script>

<style lang="scss">
  .bangbian-wrapper {
    display: flex;
    align-items: center;
    padding: 10px 0;
    .left {
      flex: 0 0 120px;
      text-align: center;
    }
    .right {
      flex: 1;
    }
    image {
      width: 100px;
      height: 100px;
    }
    .name {
      font-weight: bold;
      font-size: 20px;
      padding-bottom: 5px;
    }
  }
  .production-wrapper {
    display: flex;
    align-items: center;
    padding: 5px 0;
    .left {
      flex: 0 0 120px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right {
      flex: 1;
      .tip {
        font-weight: bold;
        font-size: 16px;
        color: #ff4444;
      }
    }
    image {
      width: 100px;
      height: 100px;
    }
    .name {
      font-weight: bold;
      font-size: 18px;
      padding-bottom: 5px;
    }
    .description {
      color: #666666;
      font-size: 12px;
      padding-right: 10px;
    }
  }
</style>
