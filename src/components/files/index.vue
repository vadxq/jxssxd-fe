<template>
  <section>
    <b-container class="files-container">
      <div class="item">
        <span>
          <img src="@/assets/sxdfiles.png">
          <span> 江西少先队文件</span>
        </span>
        <router-link to="/files/sxdwj">更多&gt;</router-link>
      </div>
      <div @click="postCid(item)" :key=item.id class="item" v-b-modal.modal-scrollable v-for="item in sxdwjList" :cid="item.id">
        {{item.name}}
      </div>
    </b-container>

    <b-container class="files-container">
      <div class="item">
        <span>
          <img src="@/assets/xxzlfiles.png">
          <span> 培训班学习资料</span>
        </span>
        <router-link to="/files/xxzl">更多&gt;</router-link>
      </div>
      <div @click="postCid(item)" :key=item.id class="item" v-b-modal.modal-scrollable v-for="item in xxzlList" :cid="item.id">
        {{item.name}}
      </div>
    </b-container>

    <b-container class="files-container">
      <div class="item">
        <span>
          <img src="@/assets/whcpfiles.png">
          <span> 少先队文化产品</span>
        </span>
        <router-link to="/files/whcp">更多&gt;</router-link>
      </div>
      <div @click="postCid(item)" :key=item.id class="item" v-b-modal.modal-scrollable v-for="item in whcpList" :cid="item.id">
        {{item.name}}
      </div>
    </b-container>
    <b-modal id="modal-scrollable" scrollable :title="title" ok-only ok-title="阅读完毕">
      {{content}}
    </b-modal>
  </section>
</template>

<script>
export default {
  data () {
    return {
      sxdwjList: [
        // {
        //   id: 1,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '1'
        // },
        // {
        //   id: 2,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '12'
        // },
        // {
        //   id: 3,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '123'
        // }
      ],
      xxzlList: [
        // {
        //   id: 11,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '11'
        // },
        // {
        //   id: 22,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '1122'
        // },
        // {
        //   id: 33,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '112233'
        // }
      ],
      whcpList: [
        // {
        //   id: 111,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '111'
        // },
        // {
        //   id: 222,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '111222'
        // },
        // {
        //   id: 333,
        //   name: 'sfhjashdksadjhasjd',
        //   content: '111222333'
        // }
      ],
      content: '',
      title: ''
    }
  },
  methods: {
    postCid (e) {
      this.content = e.content
      this.title = e.name
    },
    async getSxdwjList () {
      let res = await this.$axios.get('/api/data/?page=1&size=3&category=1')
      if (res.data.status) {
        this.sxdwjList = res.data.data
      } else {
        this.$store.commit('changAlert', {
          msg: '请求失败！',
          status: 2,
          sec: 5
        })
      }
    },
    async getXxzlList () {
      let res = await this.$axios.get('/api/data/?page=1&size=3&category=2')
      if (res.data.status) {
        this.xxzlList = res.data.data
      } else {
        this.$store.commit('changAlert', {
          msg: '请求失败！',
          status: 2,
          sec: 5
        })
      }
    },
    async getWhcpList () {
      let res = await this.$axios.get('/api/data/?page=1&size=3&category=3')
      if (res.data.status) {
        this.whcpList = res.data.data
      } else {
        this.$store.commit('changAlert', {
          msg: '请求失败！',
          status: 2,
          sec: 5
        })
      }
    }
  },
  mounted () {
    this.getSxdwjList()
    this.getXxzlList()
    this.getWhcpList()
  }
}
</script>

<style scoped>
section {
  min-height: 83vh;
}
.item {
  padding: 0.5rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  /* border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem; */
}
.files-container {
  margin: 1rem auto;
}
.item:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item:first-child a {
  color: #000;
  /* font-weight: bolder; */
  width: 3rem;
  text-align: center;
  margin-right: -1rem;
}
footer {
  color: #000;
}
img {
  width: 1.3rem;
  margin: -0.2rem 0 0 0;
}
</style>
