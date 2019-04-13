<template>
  <section class="race">
    <Navbar navText="视频学习" />
    <b-container fluid class="files-container">
      <div class="sxd-nav">
        <router-link to="/">
          <img src="../assets/index.png">
          首页
        </router-link>
        <span> / </span>
        <img src="../assets/race.png">
          <span>视频学习</span>
      </div>
      <b-card-group deck>
        <b-card
          :img-src="item.cover"
          img-alt="Image"
          img-top
          :footer=item.name
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
      </b-card-group>
      <b-row>
        <b-col>
          <b-button v-if="raceList.length >= 10" block @click="getMoreList()" variant="outline-danger">更多</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal-scrollable" scrollable :title="title" ok-only ok-title="阅读完毕">
      <!-- 1: 'pdf',
        2: 'MP4视频',
        3: 'MP3音频',
        4: '图片',
        5: 'B站视频' -->
      <div v-if="type === 1">
        <Pdf :url=url />
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
      raceList: [
        // {
        //   id: 111,
        //   name: 'pdf实例',
        //   content: '',
        //   cover: '',
        //   url: 'https://qnimg.vadxq.com/demo/pdf/demo.pdf',
        //   file_type: 1, // pdf
        //   category: 1
        // },
        // {
        //   id: 222,
        //   name: '视频实例（B站视频实例）',
        //   content: '',
        //   cover: 'https://13879158849.oss-cn-hongkong.aliyuncs.com/%E7%AC%AC%E5%9B%9B%E6%9D%BF%E5%9D%97-%E6%96%87%E5%8C%96%E4%BA%A7%E5%93%81/2018%E5%B9%B4%E5%85%AD%E4%B8%80%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%AF%B9%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E5%B8%8C%E6%9C%9B%E5%92%8C%E8%A6%81%E6%B1%82.jpg',
        //   url:
        //     '<iframe src="//player.bilibili.com/player.html?aid=44211901&cid=77441895&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>',
        //   file_type: 5,
        //   category: 1
        // },
        // {
        //   id: 333,
        //   name: '视频实例（自身视频）',
        //   content: '',
        //   cover: 'https://13879158849.oss-cn-hongkong.aliyuncs.com/%E7%AC%AC%E5%9B%9B%E6%9D%BF%E5%9D%97-%E6%96%87%E5%8C%96%E4%BA%A7%E5%93%81/2018%E5%B9%B4%E5%85%AD%E4%B8%80%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%AF%B9%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E5%B8%8C%E6%9C%9B%E5%92%8C%E8%A6%81%E6%B1%82.jpg',
        //   url: 'http://www.w3school.com.cn/i/movie.mp4',
        //   file_type: 2,
        //   category: 1
        // },
        // {
        //   id: 44,
        //   name: 'MP3实例',
        //   content: '',
        //   cover: 'https://13879158849.oss-cn-hongkong.aliyuncs.com/%E7%AC%AC%E5%9B%9B%E6%9D%BF%E5%9D%97-%E6%96%87%E5%8C%96%E4%BA%A7%E5%93%81/2018%E5%B9%B4%E5%85%AD%E4%B8%80%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%AF%B9%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E5%B8%8C%E6%9C%9B%E5%92%8C%E8%A6%81%E6%B1%82.jpg',
        //   url: 'http://www.w3school.com.cn/i/movie.mp4',
        //   file_type: 3, // mp3
        //   category: 1
        // },
        // {
        //   id: 444,
        //   name: '图片实例',
        //   content: '',
        //   cover: 'https://13879158849.oss-cn-hongkong.aliyuncs.com/%E7%AC%AC%E5%9B%9B%E6%9D%BF%E5%9D%97-%E6%96%87%E5%8C%96%E4%BA%A7%E5%93%81/2018%E5%B9%B4%E5%85%AD%E4%B8%80%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%AF%B9%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E5%B8%8C%E6%9C%9B%E5%92%8C%E8%A6%81%E6%B1%82.jpg',
        //   url: 'https://13879158849.oss-cn-hongkong.aliyuncs.com/%E7%AC%AC%E5%9B%9B%E6%9D%BF%E5%9D%97-%E6%96%87%E5%8C%96%E4%BA%A7%E5%93%81/2018%E5%B9%B4%E5%85%AD%E4%B8%80%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%AF%B9%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E5%B8%8C%E6%9C%9B%E5%92%8C%E8%A6%81%E6%B1%82.jpg',
        //   file_type: 4, // 图片
        //   category: 1
        // }
      ],
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
      let res = await this.$axios.get('/api/content?page=0&size=10&category=1')
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
      let res = await this.$axios.get(`/api/content?page=${this.page - 1}&size=10`)
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
  /* color: rgb(246, 41, 20); */
  color: #57B5C1;
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
audio {
  width: 100%;
}
.imgMedia img {
  max-width: 100%;
}
</style>
