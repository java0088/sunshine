<template>
  <div class="edit">
    <van-nav-bar :title="title" :border="false" left-arrow @click-left="$router.back()">
      <template #right>
        <van-button size="mini" color="#ef6852" :disabled="isDisabled" @click="handleSubmit">完成</van-button>
      </template>
    </van-nav-bar>

    <div class="content">
      <textarea v-model="message"></textarea>
      <span class="num">{{this.message.length}}&nbsp;/&nbsp;{{total}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '编辑',
        message: '小通',
        type: '',
        total: 50
      }
    },
    computed: {
      isDisabled() {
        return this.message.length === 0
      }
    },
    activated() {
      this.title = this.$route.query.title
      this.message = this.$route.query.info
      this.type = this.$route.query.type
    },
    methods: {
      handleSubmit() {
        if (this.message.length >= this.total) {
          return this.$toast('字数超出了限制!')
        }
        this.$store.commit('changeType', {
          type: this.type,
          message: this.message
        })
        this.$toast('修改成功')
        this.$router.back()
      }
    }
  }

</script>

<style lang="less" scoped>
  .edit {
    background-color: @grayBgColor;
    width: 100%;
    height: 100vh;
  }

  .content {
    position: relative;
    margin-top: @margin10;
    height: 120px;

    textarea {
      width: 100%;
      border: 0;
      resize: none;
      height: 100%;
      // border-radius: 10px;
      padding: @padding12;
      color: @blackCoor;
      font-size: @textSize14;
    }

    .num {
      position: absolute;
      right: 24px;
      bottom: @margin10;
      color: @grayColor;
      font-size: @textSize14;
      font-weight: 700;
    }
  }

</style>
