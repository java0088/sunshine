<template>
  <div class="home">
    <!-- 路由 -->
    <router-view></router-view>
    <!-- 弹出框 -->
    <van-popup :style="{ height: '100%', width: '70%' }" position="left" v-model="showUserPop">
      <pop-user></pop-user>
    </van-popup>
    <!-- 右滑弹出 -->
    <div class="right_swipe" @touchmove="showPopup"></div>
    <!-- tabbar页面 -->
    <tab-bar></tab-bar>
  </div>
</template>
<script>
  import BomTab from '../components/home/BomTab'
  import PopUser from '../components/PopUser.vue'
  export default {
    components: {
      'tab-bar': BomTab,
      'pop-user': PopUser
    },
    data() {
      return {
        tabActive: 0
      }
    },
    activated() {
      console.log('首页面')
    },
    computed: {
      showUserPop: {
        get() {
          return this.$store.state.showUserPop
        },
        set() {
          this.$store.commit('showUserinfo')
        }
      }
    },
    methods: {
      showPopup() {
        this.showUserPop = !this.showUserinfo
      }
    }
  }

</script>
<style lang="less">
  .home {
    height: 100vh;
    width: 100%;
    padding-bottom: 50px;
  }

  .right_swipe {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 10px;
    height: 100vh;
  }

</style>
