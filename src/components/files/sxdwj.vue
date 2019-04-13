<template>
  <section>
    <b-container fluid class="files-container">
      <div class="sxd-nav">
        <router-link to="/files">
          <img src="@/assets/files.png">
          资料
        </router-link>
        <span> /</span>
        <img src="@/assets/sxdfiles.png">
          <span>江西少先队文件</span>
      </div>
      <b-row>
        <b-col>
          <div @click="postCid(item)" :key=item.id class="item" v-b-modal.modal-scrollable v-for="item in sxdwjList" :cid="item.id">
            {{item.name}}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button v-if="sxdwjList.length >= 10" block @click="getMoreList()" variant="outline-danger">更多</b-button>
        </b-col>
      </b-row>
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
      ],
      content: '',
      title: '',
      page: 1
    }
  },
  methods: {
    postCid (e) {
      this.content = e.content
      this.title = e.name
    },
    async getFirList () {
      let res = await this.$axios.get('/api/data/?page=1&size=10&category=1')
      if (res.data.status) {
        this.sxdwjList = res.data.data
        if (this.sxdwjList.length === 10) {
          this.page += 1
        }
      } else {
        this.$store.commit('changAlert', {
          msg: '请求失败！',
          status: 2,
          sec: 5
        })
      }
    },
    async getMoreList () {
      let res = await this.$axios.get(`/api/data/?page=${this.page}&size=10&category=1`)
      if (res.data.status) {
        this.sxdwjList = this.sxdwjList.concat(res.data.data)
        if (this.sxdwjList.length === 10 * this.page) {
          this.page += 1
        }
      }
      // this.sxdwjList = this.sxdwjList.concat(this.sxdwjList)
    }
  },
  mounted () {
    this.getFirList()
  }
}
</script>

<style scoped>
.item {
  padding: 0.5rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  /* border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem; */
}
.files-container {
  padding-right: 0px;
  padding-left: 0px;
  /* background-color: rgb(246, 41, 20); */
  min-height: 85vh;
  width: 100vw;
}
.item:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.item:first-child a {
  color: #000;
  font-weight: bolder;
  width: 3rem;
  text-align: center;
  margin-right: -1rem;
}
.sxd-nav {
  background-color: #fff;
  /* width: 100vw; */
  padding-left: 0.5rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  border-bottom: solid 1.4px rgba(0, 0, 0, 0.4);
}
.sxd-nav img {
  margin: 0rem 0 0 0.3rem;
  width: 1.2rem;
}
.sxd-nav a img {
  margin: 0rem 0 0 0.3rem;
  width: 1.4rem;
}
.sxd-nav a {
  /* color: rgb(246, 41, 20); */
  color: #57B5C1;
}
.sxd-nav span {
  display: inline-flex;
  margin-left: 0.4rem;
}
footer {
  color: #000;
}
.row {
  margin: 15px 0px;
}
</style>
