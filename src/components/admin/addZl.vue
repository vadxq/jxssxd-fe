<template>
  <section>
    <b-row>
      <b-col>
        <b-input-group prepend="标题：" >
          <b-form-input v-model="msg.name"/>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-input-group prepend="发布频道：" >
          <b-form-select v-model="msg.category" :options="channeloptions"/>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-input-group prepend="封面图链接：" >
          <b-form-input v-model="msg.cover"/>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-input-group prepend="附件类型：" >
          <b-form-select v-model="msg.file_type" :options="options"/>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-input-group prepend="文件链接：" >
          <b-form-input v-model="msg.url"/>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <Edit ref="editContent" v-on:updateEditContent="updateEditContent"/>
    </b-row>
    <b-row>
      <b-button class="mt-3" variant="outline-danger" block @click="pushRace">添加</b-button>
    </b-row>
  </section>
</template>

<script>
import Edit from '@/components/admin/edit'
export default {
  components: {
    Edit
  },
  data () {
    return {
      editContent: '',
      options: {
        1: 'pdf',
        2: 'MP4视频',
        3: 'MP3音频',
        4: '图片',
        5: 'B站视频'
      },
      channeloptions: {
        1: '视频学习',
        2: '重要文件',
        3: '活动案例',
        4: '文化产品'
      },
      msg: {
        name: '',
        url: '',
        category: 1,
        cover: null,
        file_type: 1
      }
    }
  },
  methods: {
    postCid (e) {
      this.content = e.content
      this.title = e.name
    },
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    },
    updateEditContent (e) {
      this.editContent = e
    },
    async pushRace () {
      if (this.editContent === '' || this.editContent === '请输入文章内容') {
        this.msg.content = null
      } else {
        this.msg.content = this.editContent
      }
      this.msg.file_type = Number(this.msg.file_type)
      this.msg.category = Number(this.msg.category)
      let errMsg = 0
      let msg = {
        name: this.msg.name,
        url: this.msg.url,
        category: this.msg.category,
        file_type: this.msg.file_type
      }
      Object.values(msg).map(e => {
        if (e === '') {
          errMsg += 1
        }
        console.log(e)
      })
      console.log(errMsg)
      if (errMsg) {
        this.$store.commit('changAlert', {
          msg: '请填写完整！',
          status: 2,
          sec: 5
        })
      } else {
        console.log(this.msg)
        let res = await this.$axios.post('/api/admin/content', this.msg)
        if (res.data.status) {
          this.$store.commit('changAlert', {
            msg: '更新成功！',
            status: 1,
            sec: 5
          })
        } else {
          this.$store.commit('changAlert', {
            msg: '更新失败！',
            status: 2,
            sec: 5
          })
        }
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 0.6rem;
  margin-left: 0;
  margin-right: 0;
}
</style>
