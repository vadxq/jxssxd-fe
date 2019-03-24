<template>
  <section>
    <b-list-group>
      <div v-for="item in sxdList" :key="item.id">
        <b-list-group-item v-b-toggle="'raceid' +item.id" >
          {{item.name}}
        </b-list-group-item>
        <b-collapse :id="'raceid' + item.id" class="mt-2">
          <!-- <p>{{item.content}}</p> -->
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
      activeTitle: null,
      page: 1
    }
  },
  methods: {
    changeRaceId (id, name) {
      this.activeId = id
      this.activeTitle = name
    },
    async getFirList () {
      let res = await this.$axios.get('api/content?page=0&size=10&category=2')
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
      let res = await this.$axios.get(`/api/content?page=${this.page - 1}&size=10&category=2`)
      if (res.data.status) {
        this.sxdList = this.sxdList.concat(res.data.data)
        if (this.sxdList.length === 10 * this.page) {
          this.page += 1
        }
      }
      // this.sxdList = this.sxdList.concat(this.sxdList)
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
