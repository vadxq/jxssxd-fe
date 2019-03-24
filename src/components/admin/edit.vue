<template>
  <div class="content">
    <vue-html5-editor :content="content" :auto-height="true" @change="updateData"></vue-html5-editor>
  </div>
</template>

<script>
export default {
  data () {
    return { content: '请输入文章内容' }
  },
  methods: {
    updateData (e = '') {
      this.content = e
      this.$emit('updateEditContent', e)
    }
  }
}
</script>

<style scoped>
.content {
  margin: 0 auto;
}
</style>
