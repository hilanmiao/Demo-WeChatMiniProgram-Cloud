// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tagList: [],
    shopList: [],
    tag: [],
    shop: {}
  },
  mutations: {
    saveTagList: (state, payload) => {
      state.tagList = payload.tagList
    },
    saveShopList: (state, payload) => {
      state.shopList = payload.shopList
    },
    saveTag: (state, payload) => {
      state.tag = payload.tag
    },
    saveShop: (state, payload) => {
      state.shop = payload.shop
    }
  }
})

export default store
