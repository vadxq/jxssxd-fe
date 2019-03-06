<template>
  <section>
    <b-container class="files-container">
      <div class="sxd-nav">
        <router-link to="/files">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFOSURBVEhL7ZU9SgNRGEVHsIudWCsuQCzcgOgSBFchWLoAwdINCJZuwM7CwkZsLRQXkJQRKwVR74G58DG8Sd7EmUkzBw483vdzUZKXYqAB66W9silfSjn3wo4cy99Sztx1yr6cSoda7qh1wpH8lAT9yNNSztxRo6dVTuS3JOBLHkvDmTtq9ND7b1bkuWQpfsgDWYU7au5jhtmFWJXX0ssmclfWQY0e9zPLjkaM5K30kje5LedBD72eYwe7suBReJQefpIbMhd6mfE8u+Y+NFvyVXroQa7JpjBzL72HnexOUn0Y8EIuypmMu5IPDV/+dxkbsc1gJGPmQ+PGtoKzqQu+lHc1Uou0GsyHzbWq1CKdBPOj4L/UPxq9BMeQ1B0MwVl4YGnBN/Iw+CyrIQ6mFnuvpPdk44E6U8GzzCY1HO0sOP7LUu5JwznVEx1YFkXxBxYv2KZyVCIFAAAAAElFTkSuQmCC">
          资料
        </router-link>
        <span> /</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACpSURBVEhL7ZaxDcIwEEU9AYyAYB2YIFOwAS0dsAbjsANKywbwfnESkYx8Z6dAip/0uty9pEjitFh2eMO7wyM2scYR3wFPWM0BbVHuib59YXN0QFtS4oF2bXW0JSjD0dagDEXnCEp3dK6g3GORSFDv4DmjzWtXkUjwFz04oQc99OCEHvTw30F94W0gd6zwaPOuv4UOUU+0oVq1Y4UutnjF3N17vOAGF0dKH0m8s/eBg8ijAAAAAElFTkSuQmCC">
          <span> 少先队文化产品</span>
      </div>
      <b-row>
        <b-col>
          <div @click="postCid(item)" :key=item.id class="item" v-b-modal.modal-scrollable v-for="item in whcpList" :cid="item.id">
            {{item.name}}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button block @click="getMoreList()" variant="outline-danger">更多</b-button>
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
      whcpList: [
        {
          id: 111,
          name: 'sfhjashdksadjhasjd',
          content: '111'
        },
        {
          id: 222,
          name: 'sfhjashdksadjhasjd',
          content: '111222'
        },
        {
          id: 333,
          name: 'sfhjashdksadjhasjd',
          content: '111222333'
        }
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
      let res = await this.$axios.get('/api/data/?page=1&size=10&category=3')
      if (res.data.status) {
        this.whcpList = res.data.data
        if (this.whcpList.length === 10) {
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
      // let res = await this.$axios.get(`/api/data/?page=${this.page}&size=10&category=3`)
      // if (res.data.status) {
      //   this.whcpList = this.whcpList.concat(res.data.data)
      //   if (this.whcpList.length === 10 * this.page) {
      //     this.page += 1
      //   }
      // }
      this.whcpList = this.whcpList.concat(this.whcpList)
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
  margin: 0.1rem 0 0 0.3rem;
  width: 1.5rem;
}
.sxd-nav a {
  color: rgb(246, 41, 20);
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
