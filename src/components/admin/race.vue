<template>
  <section>
    <b-list-group>
      <div v-for="item in raceList" :key="item.id">
        <b-list-group-item v-b-toggle="'raceid' +item.id" >
          {{item.name}}
        </b-list-group-item>
        <b-collapse :id="'raceid' + item.id" class="mt-2">
          <p v-if="item.content">{{item.content}}</p>
          <img  :src=item.cover >
          <p>类型：<span>{{item.file_type}}</span></p>
          <p>URL：{{item.url}}</p>
          <p>
            <b-button v-b-modal.raceModal @click="changeRaceId(item.id, item.name)"  variant="outline-danger" class="m-1">删除</b-button>
          </p>
        </b-collapse>
      </div>
      <p class="more-p">
        <b-button v-if="raceList.length >= 10" block @click="getMoreList()" variant="outline-danger">更多</b-button>

      </p>
    </b-list-group>
    <b-modal ref="raceModal" id="raceModal" scrollable :title="activeTitle" hide-footer>
      <b-button class="mt-3" variant="outline-danger" block @click="delRace">确定删除</b-button>
    </b-modal>
  </section>
</template>

<script>
import Pdf from '@/components/pdf'
export default {
  components: {
    Pdf
  },
  data () {
    return {
      raceList: [
        // {
        //   id: 111,
        //   name: 'pdf实例',
        //   content: '',
        //   cover: 'https://13879158849.oss-cn-hongkong.aliyuncs.com/%E7%AC%AC%E5%9B%9B%E6%9D%BF%E5%9D%97-%E6%96%87%E5%8C%96%E4%BA%A7%E5%93%81/2018%E5%B9%B4%E5%85%AD%E4%B8%80%E4%B9%A0%E8%BF%91%E5%B9%B3%E6%80%BB%E4%B9%A6%E8%AE%B0%E5%AF%B9%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E5%B8%8C%E6%9C%9B%E5%92%8C%E8%A6%81%E6%B1%82.jpg',
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
      activeId: null,
      activeTitle: null,
      page: 1
    }
  },
  methods: {
    changeRaceId (id, title) {
      this.activeId = id
      this.activeTitle = title
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
      let res = await this.$axios.get(`/api/content?page=${this.page - 1}&size=10&category=1`)
      if (res.data.status) {
        this.raceList = this.raceList.concat(res.data.data)
        if (this.raceList.length === 10 * this.page) {
          this.page += 1
        }
      }
      // this.raceList = this.raceList.concat(this.raceList)
    },
    async delRace () {
      let res = await this.$axios.delete(`/api/admin/content/${this.activeId}`)
      if (res.data.status) {
        this.$store.commit('changAlert', {
          msg: '删除成功！',
          status: 1,
          sec: 5
        })
        this.$refs.raceModal.hide()
      } else {
        this.$store.commit('changAlert', {
          msg: '删除失败，请稍后再试！',
          status: 2,
          sec: 5
        })
      }
    }
  },
  mounted () {
    this.getFirList()
  }
}
</script>

<style scoped>
.more-p {
  margin-top: 1rem;
}
.mt-2 p {
  max-width: 90vw;
  word-break: break-all;
}
.mt-2 img {
  max-width: 90vw;
}
</style>
