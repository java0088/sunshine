<template>
  <div class="tally_book">
    <MyScroll @finishPullUp="handleFinishPullUp" @finishPullDown="handleFinishPullDown">
      <div class="list">
        <div class="item" v-for="(item,index) in list" :key="index">
          <!-- 上面用户信息 -->
          <div class="top flex_align">
            <img class="icon" :src="item.photo" />
            <div class="name">
              <span class="tit">{{item.name}}</span>
              <span class="nic">的目标</span>
            </div>
          </div>
          <!-- 目标 -->
          <div class="goal tit">{{item.title}}</div>
          <!-- 视频区 -->
          <div class="play_list" @touchstart.stop>
            <div class="v_item" v-for="(item2,index2) in item.goals" :key="index2">
              <VideoBox :video="item2"></VideoBox>
            </div>
          </div>
          <!-- 口语练习和经验值 -->
          <div class="accumulated flex_align">
            <div class="kouyu">累计获取<span class="yellow_color">123</span>听力经验值</div>
            <div class="kouyu">口语练习<span class="yellow_color">123</span>次</div>
          </div>
        </div>
      </div>
    </MyScroll>
  </div>
</template>

<script>
  import VideoBox from '../VideoBox'
  import MyScroll from './Scroll'
  export default {
    components: {
      VideoBox,
      MyScroll
    },
    mounted() {
      this.getList()
    },
    data() {
      return {
        bookScroll: null,
        list: []
      }
    },
    methods: {
      async getList() {
        const res = await this.$http.fetch('/mock/tallyBookList')
        this.list = res.data.data
        console.log(this.list)
      },
      // 上拉加载
      handleFinishPullUp() {
        this.getList()
      },
      // 下拉刷新
      async handleFinishPullDown() {
        const res = await this.$http.fetch('/mock/tallyBookList')
        this.list = [...res.data.data, ...this.list]
      }
    }
  }

</script>

<style lang="less" scoped>
  .tally_book {
    width: 100%;

    .list {
      width: 100%;
      padding-bottom: 20px;
    }
  }

  .accumulated {
    margin-top: 10px;
  }

  .item {
    width: 100%;
    // height: 300rpx;
    background-color: #fff;
    margin-top: 10px;
    padding: 12px;

    .top {
      height: 50px;

      .icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .tit {
        margin: 0 10px;
      }

      .nic {
        font-size: 16px;
        color: #ffdb7c;
        font-weight: 700;
      }
    }

    .goal {
      margin: 8px 0;
    }

    .play_list {
      // width: 100vw;
      display: flex;
      //   width: 150%;
      background-color: #fff;
      overflow-x: auto;
      overflow-y: hidden;

      .v_item {
        flex: none;
        width: 80px;
        height: 110px;
        margin-right: 10px;
      }
    }

    .wrapper {
      width: 100vw;
      background-color: #fff;
    }

    .kouyu {
      font-size: 13px;
      color: #acabb2;
      margin-right: 10px;
    }
  }

</style>
