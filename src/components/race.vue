<template>
  <section class="race">
    <Navbar navText="风采大赛" />
    <b-container fluid class="files-container">
      <div class="sxd-nav">
        <router-link to="/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFOSURBVEhL7ZU9SgNRGEVHsIudWCsuQCzcgOgSBFchWLoAwdINCJZuwM7CwkZsLRQXkJQRKwVR74G58DG8Sd7EmUkzBw483vdzUZKXYqAB66W9silfSjn3wo4cy99Sztx1yr6cSoda7qh1wpH8lAT9yNNSztxRo6dVTuS3JOBLHkvDmTtq9ND7b1bkuWQpfsgDWYU7au5jhtmFWJXX0ssmclfWQY0e9zPLjkaM5K30kje5LedBD72eYwe7suBReJQefpIbMhd6mfE8u+Y+NFvyVXroQa7JpjBzL72HnexOUn0Y8EIuypmMu5IPDV/+dxkbsc1gJGPmQ+PGtoKzqQu+lHc1Uou0GsyHzbWq1CKdBPOj4L/UPxq9BMeQ1B0MwVl4YGnBN/Iw+CyrIQ6mFnuvpPdk44E6U8GzzCY1HO0sOP7LUu5JwznVEx1YFkXxBxYv2KZyVCIFAAAAAElFTkSuQmCC">
          首页
        </router-link>
        <span> /</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACpSURBVEhL7ZaxDcIwEEU9AYyAYB2YIFOwAS0dsAbjsANKywbwfnESkYx8Z6dAip/0uty9pEjitFh2eMO7wyM2scYR3wFPWM0BbVHuib59YXN0QFtS4oF2bXW0JSjD0dagDEXnCEp3dK6g3GORSFDv4DmjzWtXkUjwFz04oQc99OCEHvTw30F94W0gd6zwaPOuv4UOUU+0oVq1Y4UutnjF3N17vOAGF0dKH0m8s/eBg8ijAAAAAElFTkSuQmCC">
          <span>风采大赛</span>
      </div>
      <b-card-group deck>
        <b-card
          img-src="https://placekitten.com/380/200"
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
      </b-card-group>
      <b-row>
        <b-col>
          <b-button block @click="getMoreList()" variant="outline-danger">更多</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal-scrollable" scrollable :title="title" ok-only ok-title="阅读完毕">
      <div v-if="type==='pdf'">
      <iframe src="/static/pdfjs/web/viewer.html?file=" + {{item.content}} frameborder="0" width="100%" height="500">
      </iframe>
      </div>
      <div v-if="type==='bzhan'">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="//player.bilibili.com/player.html?aid=44211901&cid=77441895&page=1"
          allowfullscreen
        />
      </div>
      <div v-if="type==='mp4'">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
        />
      </div>
    </b-modal>
    <Footer/>
  </section>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      raceList: [
        {
          id: 111,
          title: 'pdf实例',
          url: 'https://qnimg.vadxq.com/demo/pdf/demo.pdf',
          type: 'pdf'
        },
        {
          id: 222,
          title: '视频实例（B站视频实例）',
          url: '<iframe src="//player.bilibili.com/player.html?aid=44211901&cid=77441895&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>',
          type: 'bzhan'
        },
        {
          id: 333,
          title: '视频实例（自身视频）',
          url: 'http://www.w3school.com.cn/i/movie.mp4',
          type: 'mp4'
        }
      ],
      content: '',
      title: '',
      type: ''
    }
  },
  methods: {
    postCid (e) {
      this.content = e.content
      this.title = e.title
      this.type = e.type
    },
    async getFirList () {
      let res = await this.$axios.get('/api/data/?page=1&size=10&category=1')
      if (res.data.status) {
        this.raceList = res.data.data
        if (this.raceList.length === 10) {
          this.page += 1
        }
      }
    },
    async getMoreList () {
      // let res = await this.$axios.get(`/api/data/?page=${this.page}&size=10&category=1`)
      // if (res.data.status) {
      //   this.raceList = this.raceList.concat(res.data.data)
      //   if (this.raceList.length === 10 * this.page) {
      //     this.page += 1
      //   }
      // }
      this.raceList = this.raceList.concat(this.raceList)
    }
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
  min-height: 87vh;
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
  margin: -0.3rem 0 0 0.3rem;
}
.sxd-nav a {
  color: rgb(246, 41, 20);
}
.sxd-nav span {
  display: inline-flex;
  margin-left: 0.4rem;
}
.card {
  margin: 0.5rem;
  padding: 0;
}
.race footer {
  color: #000;
}
.row {
  margin: 15px 0px;
}
</style>
