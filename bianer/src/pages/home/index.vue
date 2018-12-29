<template>
  <div class="container">
    <div class="location-wrapper">
      <div class="name">
        <van-icon name="location"/>
        恒大名都
      </div>
      <van-field
        style="visibility: hidden"
        left-icon="search"
        clearable
        placeholder="请输入搜索关键词"
        v-model="searchName"
      />
    </div>
    <!--<div class="block-header">&#45;&#45;&#45;&#45;&#45;&#45; 店铺分类&#45;&#45;&#45;&#45;&#45;&#45;</div>-->
    <div class="tag-wrapper">
      <div class="tag" v-for="(item, index) in tagList" :key="index">
        <van-button size="mini" :type="item._id===tagId?'danger':'default'" @click="tagId=item._id">{{item.name}}
        </van-button>
      </div>
    </div>
    <div class="block-header">------ 附近商铺 ------</div>
    <div class="content-wrapper">
      <div class="list">
        <div class="item van-hairline--bottom" v-for="(item, index) in shopList" :key="index" @click="toDetail(item)">
          <div class="image-wrapper" @click.stop="preview(item)">
            <image :src="item.image"></image>
          </div>
          <div class="info-wrapper">
            <div class="name">{{item.name}}</div>
            <div class="phone">{{item.phone}}</div>
            <div class="address">{{item.address}}</div>
          </div>
          <div class="phone-wrapper">
            <van-button type="danger" size="small" @click.stop="call(item)">
              <van-icon name="phone"/>
            </van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="loadmore-wrapper loadmore-line" v-show="!more">
      <span class="tip">暂无数据</span>
    </div>
    <div class="loadmore-wrapper" v-show="loading">
      <span class="tip"><van-loading size="10px"/>&nbsp;正在加载</span>
    </div>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'index',
    data: () => ({
      db: wx.cloud.database(),
      page: 1,
      pageSize: 10,
      more: true,
      loading: false,
      tagList: [],
      shopList: [],
      tagId: '',
      searchName: ''
    }),
    watch: {
      'tagId': {
        handler: function (val, oldVal) {
          this.getAllShopList(true)
        },
        deep: true
      },
      'searchName': {
        handler: function (val, oldVal) {
          this.getAllShopList(true)
        },
        deep: true
      }
    },
    mounted() {
      this.getAllTags()
      this.getAllShopList()
    },
    methods: {
      getAllTags() {
        // 一次最多20条
        this.db.collection('tags').get().then(res => {
          console.log(res.data)
          this.tagList = res.data
          this.tagList.unshift({
            _id: '',
            name: '全部'
          })
        })
      },
      getAllShopList(init) {
        if (init) {
          this.page = 1
          this.more = true
        }
        this.loading = true
        wx.showNavigationBarLoading()
        // 拼装查询用的skip
        const _ = this.db.command
        let shops
        // 别问我为什么还非得这样写，可能where必须要紧跟着命令，不像下面skip、limit一样，可以单独拿出来
        if (this.tagId) {
          shops = this.db.collection('shops').where({
            tagId: _.eq(this.tagId)
          })
        } else {
          shops = this.db.collection('shops')
        }
        if (this.page > 1) {
          const skip = (this.page - 1) * this.pageSize
          shops = shops.skip(skip)
        }
        shops.limit(this.pageSize).get().then(res => {
          this.loading = false
          const list = res.data
          if (list.length < this.pageSize && this.page > 0) {
            this.more = false
          }
          if (init) {
            this.shopList = list
            wx.stopPullDownRefresh()
          } else {
            // 下拉刷新，不能直接覆盖而是累加
            this.shopList = this.shopList.concat(list)
          }
          console.log(this.shopList)
        })
        wx.hideNavigationBarLoading()
      },
      toDetail(item) {
        // 存储
        store.commit('saveShop', {shop: item})
        // 用A标签调整有阴影，不好看
        wx.navigateTo({
          url: '/pages/detail/main'
        })
      },
      preview(shop) {
        wx.previewImage({
          current: shop.image,
          urls: [shop.image]
        })
      },
      call(shop) {
        wx.makePhoneCall({
          phoneNumber: shop.phone
        })
      }
    },
    onPullDownRefresh() {
      this.getAllShopList(true)
      this.getAllTags()
      console.log('refresh')
    },
    onReachBottom() {
      console.log('bottom')
      if (!this.more) {
        // 没有更多了
        return false
      }
      this.page = this.page + 1
      this.getAllShopList()
    }
  }
</script>

<style lang="scss">
  .block-header {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
  }

  .location-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      padding-left: 15px;
      font-size: 16px;
      font-weight: bold;
      width: 200px;
    }
    .van-search {
      background: #FFFFFF;
    }
  }

  .tag-wrapper {
    padding: 5px 15px 5px 15px;
    text-align: center;
    .tag {
      display: inline-block;
      margin-right: 10px;
      margin-top: 5px;
      .van-button {
        font-size: 12px;
        width: 70px;
      }
    }
  }

  .subheader-wrapper {
    font-weight: 400;
    font-size: 16px;
    color: rgba(69, 90, 100, .6);
    padding-bottom: 10px;
  }

  .content-wrapper {
    padding: 0 15px 0 15px;
    .list {
      .item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        color: #6d6d6d;
        font-size: 14px;
        .image-wrapper {
          image {
            width: 90px;
            height: 100%;
          }
        }
        .info-wrapper {
          flex: 1;
          margin: 0px 10px 0px 10px;
          .name {
            color: #333333;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .address {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;

          }
        }
        .phone-wrapper {
          width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          .van-button--small {
            border-radius: 99px;
          }
        }
      }
    }
  }

  .loadmore-wrapper {
    width: 65%;
    margin: 1.5em auto;
    line-height: 1.6em;
    font-size: 14px;
    text-align: center;
    .tip {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      top: -0.9em;
      padding: 0 .55em;
      background-color: #FFFFFF;
      color: #808080;
    }
  }

  .loadmore-line {
    border-top: 1px solid #E5E5E5;
    margin-top: 2.4em;
  }

  .van-button {
    border-radius: 99px !important;
  }
</style>
