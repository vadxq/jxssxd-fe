<template>
  <section>
    <b-list-group>
      <div v-for="item in sxdList" :key="item.id">
        <b-list-group-item v-b-toggle="'raceid' +item.id" >
          {{item.title}}
        </b-list-group-item>
        <b-collapse :id="'raceid' + item.id" class="mt-2">
          <p>{{item.content}}</p>
          <p>URL：{{item.url}}</p>
          <p>
            <b-button v-b-modal.raceModal @click="changeRaceId(item.id, item.title)"  variant="outline-danger" class="m-1">删除</b-button>
          </p>
        </b-collapse>
      </div>
      <p class="more-p">
        <b-button v-if="sxdList.length >= 10" block @click="getMoreList()" variant="outline-danger">更多</b-button>

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
      sxdList: [
        // {
        //   id: 111,
        //   title: 'pdf实例',
        //   content: 'sdksjdsjdlsad',
        //   url: 'https://qnimg.vadxq.com/demo/pdf/demo.pdf'
        // },
        // {
        //   id: 222,
        //   title: '视频实例（B站视频实例）',
        //   content: 'sdksjdsjdlsad',
        //   url:
        //     '<iframe src="//player.bilibili.com/player.html?aid=44211901&cid=77441895&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'
        // },
        // {
        //   id: 333,
        //   title: '视频实例（自身视频）',
        //   content: 'sdksjdsjdlsad',
        //   url: 'http://www.w3school.com.cn/i/movie.mp4'
        // }
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
      let res = await this.$axios.get('/api/data/?page=1&size=5&category=3')
      if (res.data.status) {
        this.sxdList = res.data.data
        if (this.sxdList.length === 10) {
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
      let res = await this.$axios.get(`/api/data/?page=${this.page}&size=10&category=3`)
      if (res.data.status) {
        this.sxdList = this.sxdList.concat(res.data.data)
        if (this.sxdList.length === 10 * this.page) {
          this.page += 1
        }
      }
      // this.sxdList = this.sxdList.concat(this.sxdList)
    },
    async delRace () {
      let res = await this.$axios.delete(`/api/admin/data/${this.activeId}`)
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
