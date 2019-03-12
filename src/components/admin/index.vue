<template>
  <section>
    <b-container fluid class="files-container">
      <b-row  class="outputData">
        <b-col cols="3">
          <span>欢迎~</span>
        </b-col>
        <b-col cols="5">
          <b-button variant="outline-danger" @click="getUserList()">导出用户数据</b-button>
        </b-col>
        <b-col cols="4">
          <b-button variant="outline-danger" @click="getFeed()">导出留言</b-button>
        </b-col>
      </b-row>

        <b-row>
          <b-card no-body>
            <b-tabs card v-model="tabIndex">
              <b-tab title="说课大赛" :title-link-class="linkClass(0)">
                <Race/>
              </b-tab>
              <b-tab title="少先队文件" :title-link-class="linkClass(1)">
                <Sxdwj />
              </b-tab>
              <b-tab title="学习资料" :title-link-class="linkClass(2)">
                <Xxzl />
              </b-tab>
              <b-tab title="文化产品" :title-link-class="linkClass(3)">
                <Whcp />
              </b-tab>
              <b-tab title="添加说课大赛" :title-link-class="linkClass(4)">
                <AddRace />
              </b-tab>
              <b-tab title="添加资料文件" :title-link-class="linkClass(5)">
                <AddZl />
              </b-tab>
            </b-tabs>
          </b-card>

        </b-row>
    </b-container>
    <b-modal id="modal-scrollable" scrollable :title="title" ok-only ok-title="阅读完毕">
      {{content}}
    </b-modal>
  </section>
</template>

<script>
import Race from '@/components/admin/race'
import Sxdwj from '@/components/admin/sxdwj'
import Whcp from '@/components/admin/whcp'
import Xxzl from '@/components/admin/xxzl'
import AddRace from '@/components/admin/addRace'
import AddZl from '@/components/admin/addZl'
export default {
  components: {
    Race,
    Sxdwj,
    Whcp,
    Xxzl,
    AddRace,
    AddZl
  },
  data () {
    return {
      content: '',
      title: '',
      addUsername: '',
      delUsername: '',
      tabIndex: 0
    }
  },
  computed: {
    addUsernameState () {
      // eslint-disable-next-line
      return this.addUsername.length === 11 ? true : false
    },
    delUsernameState () {
      // eslint-disable-next-line
      return this.delUsername.length === 11 ? true : false
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
    async getFeed () {
      window.location.href = '/api/admin/user/excel?token=' + localStorage.getItem('token')
      // let res = await this.$axios.get('/api/admin/user/excel?token=' + localStorage.getItem('token'))
      // if (!res.data.status) {
      //   this.$store.commit('changAlert', {
      //     msg: '获取失败，请稍后再试！',
      //     status: 2,
      //     sec: 5
      //   })
      // }
    },
    async getUserList () {
      window.location.href = '/api/admin/feedback/excel?token=' + localStorage.getItem('token')
      // let res = await this.$axios.get('/api/admin/feedback/excel?token=' + localStorage.getItem('token'))
      // if (!res.data.status) {
      //   this.$store.commit('changAlert', {
      //     msg: '获取失败，请稍后再试！',
      //     status: 2,
      //     sec: 5
      //   })
      // }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
section {
  min-height: 58vh;
}

.adminAdd, .outputData {
  padding-bottom: 0.4rem;
  /* height: 3.5rem; */
  border-bottom: solid 0.5px lightgrey;
}
.adminAdd .col-6{
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
}

#collapse2 button, #collapse1 button {
  margin-top: 0.4rem;
}
.outputData {
  height: 3.5rem;
  padding-top: 0.4rem;
}
.outputData .col-6{
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-content:focus, .tab-pane:focus {
  outline: none;
}

</style>
