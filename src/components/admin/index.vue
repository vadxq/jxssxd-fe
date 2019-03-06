<template>
  <section>
    <b-container fluid class="files-container">
      <b-row  class="outputData">
        <b-col cols="6">
          <span>欢迎进入管理界面~</span>
        </b-col>
        <b-col cols="6">
          <b-button variant="outline-danger">导出用户数据</b-button>
        </b-col>
      </b-row>
      <!-- <b-row align-content="center" class="adminAdd">
        <b-col cols="6">
          <b-button v-b-toggle.collapse1 variant="outline-danger" class="m-1">添加管理员</b-button>
        </b-col>
        <b-col cols="6">
          <b-button v-b-toggle.collapse2 variant="outline-danger" class="m-1">删除管理员</b-button>
        </b-col>
      </b-row> -->
      <!-- 添加管理员 -->
      <!-- <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <p class="card-text">添加管理员</p>
          <b-input
            v-model="addUsername"
            trim
            type="number"
            :state="addUsernameState"
            placeholder="输入用户手机号" />
          <b-button variant="outline-danger" size="sm">添加</b-button>
        </b-card>
      </b-collapse> -->
      <!-- 删除管理员 -->
      <!-- <b-collapse id="collapse2" class="mt-2">
        <b-card>
          <p class="card-text">删除管理员</p>
          <b-input
            v-model="delUsername"
            trim
            type="number"
            :state="delUsernameState"
            placeholder="输入用户手机号" />
          <b-button variant="outline-danger" size="sm">删除</b-button>
        </b-card>
      </b-collapse> -->

        <b-row>
          <b-card no-body>
            <b-tabs card v-model="tabIndex">
              <b-tab title="说课大赛" :title-link-class="linkClass(0)">
                <Race/>
              </b-tab>
              <b-tab title="少先队文件" :title-link-class="linkClass(1)">Tab Contents 2</b-tab>
              <b-tab title="学习资料" :title-link-class="linkClass(2)">Tab Contents 2</b-tab>
              <b-tab title="文化产品" :title-link-class="linkClass(3)">Tab Contents 2</b-tab>
              <b-tab title="添加说课大赛" :title-link-class="linkClass(4)">
                <AddRace />
              </b-tab>
              <b-tab title="添加资料文件" :title-link-class="linkClass(5)">Tab Contents 3</b-tab>
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
import AddRace from '@/components/admin/addRace'
export default {
  components: {
    Race,
    AddRace
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
