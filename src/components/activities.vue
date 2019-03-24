<template>
  <section class="race">
    <Navbar navText="活动案例" />
    <b-container fluid class="files-container">
      <div class="sxd-nav">
        <router-link to="/">
          <img src="@/assets/index.png">
          首页
        </router-link>
        <span> / </span>
        <img src="@/assets/xxzlfiles.png">
          <span>活动案例</span>
      </div>
      <!-- <b-card-group deck>
        <b-card
          :img-src="item.cover_url"
          img-alt="Image"
          img-top
          :footer=item.title
          footer-tag="footer"
          @click="postCid(item)"
          :key=item.id
          class="item"
          v-b-modal.modal-scrollable
          v-for="item in raceList"
          :cid="item.id"
          no-body
        >
        </b-card>
      </b-card-group> -->
      <b-row>
        <b-col>
          <div @click="postCid(item)" :key=item.id class="item" v-b-modal.modal-scrollable v-for="item in raceList" :cid="item.id">
            {{item.name}}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button v-if="raceList.length >= 10" block @click="getMoreList()" variant="outline-danger">更多</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal-scrollable" scrollable :title="title" ok-only ok-title="阅读完毕">
      <div v-if="type === 1">
        <Pdf :url=url />
        <!-- <div v-html="content"> -->
          <div v-if="content" v-html="content">
        </div>
      </div>
      <div v-if="type === 2">
        <!-- <b-embed
          type="iframe"
          aspect="16by9"
          :src=url
          allowfullscreen
        /> -->
        <VideoPlayer :poster=postUrl :videosrc=url :autoplay='false'/>
        <!-- <div v-html="content"> -->
          <div v-if="content" v-html="content">
        </div>
      </div>
      <div v-if="type === 3">
        <audio controls="controls">
          Your browser does not support the <code>audio</code> element.
          <source :src="url" type="audio/mp3">
        </audio>
        <!-- <div v-html="content"> -->
          <div v-if="content" v-html="content">
        </div>
      </div>
      <div v-if="type === 4">
        <div class="imgMedia">
          <img :src=url />
        </div>
        <!-- <div v-html="content"> -->
          <div v-if="content" v-html="content">
        </div>
      </div>
      <div v-if="type === 5">
        <b-embed
          type="iframe"
          aspect="16by9"
          :src=url
          allowfullscreen
        />
        <!-- <div v-html="content"> -->
          <div v-if="content" v-html="content">
        </div>
        <!-- <VideoPlayer :poster=postUrl :videosrc=url :autoplay='false'/> -->
      </div>
    </b-modal>
    <Footer/>
  </section>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Pdf from '@/components/pdf'
import VideoPlayer from '@/components/video.vue'
// import { raceList } from '../racelist'
export default {
  components: {
    Navbar,
    Footer,
    Pdf,
    VideoPlayer
  },
  data () {
    return {
      // raceList: raceList,
      raceList: [],
      url: '',
      title: '',
      type: '',
      postUrl: '',
      page: 1,
      content: null
    }
  },
  methods: {
    postCid (e) {
      this.url = e.url
      this.title = e.name
      this.type = e.file_type
      this.postUrl = e.cover
      if (e.content === null) {
        this.content = false
      }
    },
    async getFirList () {
      let res = await this.$axios.get('/api/content?page=0&size=10&category=3')
      if (res.data.status) {
        this.raceList = res.data.data
        if (this.raceList.length === 10) {
          this.page += 1
        }
      } else {
        this.$store.commit('changAlert', {
          msg: '获取失败，请稍后再试！',
          status: 2,
          sec: 5
        })
      }
    },
    async getMoreList () {
      let res = await this.$axios.get(`/api/content?page=${this.page - 1}&size=10&category=3`)
      if (res.data.status) {
        this.raceList = this.raceList.concat(res.data.data)
        if (this.raceList.length === 10 * this.page) {
          this.page += 1
        }
      }
      // this.raceList = this.raceList.concat(this.raceList)
    },
    async getInfo () {
      let res = await this.$axios.get('/api/user/info')
      if (res.data.status) {
        // return
      } else {
        this.$router.replace({
          path: '/login?url=/race'
        })
      }
    }
  },
  mounted () {
    // this.getInfo()
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
  width: 1.35rem;
  margin: 0 0 0 0.4rem;
}
.sxd-nav a img {
  margin: -0.3rem 0 0 0.3rem;
  width: 1.1rem;
}
.sxd-nav a {
  color: rgb(246, 41, 20);
}
.sxd-nav span {
  display: inline-flex;
  margin-left: 0.4rem;
}
.card {
  margin: 0.75rem;
  padding: 0;
}
.race footer {
  color: #000;
}
.row {
  margin: 15px 0px;
}
video {
  width: 100%;
}
video {
  width: 100%;
}
audio {
  width: 100%;
}
.imgMedia img {
  max-width: 100%;
}
</style>
