<template>
  <div class="container">
    <div class="image-wrapper">
      <image :src="shop.image"></image>
    </div>
    <div class="content-wrapper">
      <div class="info-wrapper">
        <div class="name">
          ------ {{shop.name}} ------
        </div>
        <div class="phone">
          <van-icon name="phone"/>&nbsp;电话：
          {{shop.phone}}
        </div>
        <div class="address">
          <van-icon name="shopping-cart"/>&nbsp;地址：
          {{shop.address}}
        </div>
        <div class="description">
          <van-icon name="description"/>&nbsp;主营：
          {{shop.description}}
        </div>
      </div>
      <div class="phone-wrapper">
        <van-button type="danger" block @click="call">拨打电话</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    data: () => ({
    }),
    computed: {
      shop () {
        return store.state.shop
      }
    },
    mounted() {
    },
    methods: {
      call() {
        wx.makePhoneCall({
          phoneNumber: this.shop.phone
        })
      }
    }
  }
</script>

<style lang="scss">
  .custom-icon {
    padding: 50px;
  }
  .image-wrapper {
    width: 100%;
    height: 250px;
    image {
      width: 100%;
    }
  }

  .content-wrapper {
    padding: 15px;
    .info-wrapper {
      color: #6d6d6d;
      font-size: 16px;
      .name {
        text-align: center;
        color: #333333;
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 15px;
      }
      .address {
        padding: 5px 0;
      }
    }
  }

  .phone-wrapper {
    padding-top: 20px;
  }

  .van-button {
    border-radius: 99px !important;
  }
</style>
