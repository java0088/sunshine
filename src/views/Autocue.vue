<template>
  <!-- 提词器编辑 -->
  <div class="autocue">
    <van-nav-bar title="提词器编辑" :border="false" z-index="100" left-arrow @click-left="$router.back()">
      <template #right>
        <van-button size="mini" color="#f53a35" :disabled="isDisabled" @click="handleSubmit">完成</van-button>
      </template>
    </van-nav-bar>

    <!-- 编辑 -->
    <div class="edit_box">
      <textarea v-model="content" placeholder="添加提词器内容,就不会忘记哟"></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: ''
      }
    },
    computed: {
      isDisabled() {
        return this.content.trim().length <= 0
      }
    },
    methods: {
      handleSubmit() {
        // 把内容存到vuex中保存
        this.$store.commit('changeContent', this.content)
        // 清空内容
        this.content = ''
        // 返回路由
        this.$router.back()
      }
    }
  }

</script>

<style lang="less" scoped>
  .edit_box {
    width: 100%;
    height: 220px;
    padding: @padding12;

    textarea {
      width: 100%;
      height: 100%;
      resize: none;
      border: 0;
      background-color: #f0f0f0;
      border-radius: 12px;
      padding: 12px;
      font-size: 14px;
    }
  }

</style>
