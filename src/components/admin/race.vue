<template>
  <section>
    <b-list-group>
      <div v-for="item in raceList" :key="item.id">
        <b-list-group-item v-b-toggle="'raceid' +item.id" >
          {{item.title}}
        </b-list-group-item>
        <b-collapse :id="'raceid' + item.id" class="mt-2">
          <p>{{item.content}}</p>
          <img :src=item.img >
          <p>类型：<span>{{item.type}}</span></p>
          <p>URL：{{item.url}}</p>
          <p>
            <b-button v-b-modal.raceModal @click="changeRaceId(item.id, item.title)"  variant="outline-danger" class="m-1">删除</b-button>
          </p>
        </b-collapse>
      </div>
      <p class="more-p">
        <b-button block @click="getMoreList()" variant="outline-danger">更多</b-button>

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
        {
          id: 111,
          title: 'pdf实例',
          content: 'sdksjdsjdlsad',
          img: 'sssssss',
          url: 'https://qnimg.vadxq.com/demo/pdf/demo.pdf',
          type: 'pdf'
        },
        {
          id: 222,
          title: '视频实例（B站视频实例）',
          content: 'sdksjdsjdlsad',
          img: 'sssssss',
          url:
            '<iframe src="//player.bilibili.com/player.html?aid=44211901&cid=77441895&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>',
          type: 'bzhan'
        },
        {
          id: 333,
          title: '视频实例（自身视频）',
          content: 'sdksjdsjdlsad',
          img: 'sssssss',
          url: 'http://www.w3school.com.cn/i/movie.mp4',
          type: 'mp4'
        }
      ],
      activeId: null,
      activeTitle: null
    }
  },
  methods: {
    changeRaceId (id, title) {
      this.activeId = id
      this.activeTitle = title
    },
    async getFirList () {
      let res = await this.$axios.get('/api/contest?page=1&size=10')
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
      // let res = await this.$axios.get(`/api/contest?page=${this.page}&size=10`)
      // if (res.data.status) {
      //   this.raceList = this.raceList.concat(res.data.data)
      //   if (this.raceList.length === 10 * this.page) {
      //     this.page += 1
      //   }
      // }
      this.raceList = this.raceList.concat(this.raceList)
    },
    async delRace () {
      let res = await this.$axios.delete(`/api/admin/contest/${this.activeId}`)
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
  }
}
</script>

<style scoped>
.more-p {
  margin-top: 1rem;
}
</style>
