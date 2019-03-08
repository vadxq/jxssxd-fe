<template>
  <section>
    <b-container fluid class="files-container">
      <div class="sxd-nav">
        <router-link to="/me">
          <img src="@/assets/index.png">
          个人中心
        </router-link>
        <span> /</span>
        <img src="@/assets/leave.png">
          <span>互动留言</span>
      </div>
      <b-container class="leave-con">
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-small">标题：</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="title" id="input-small" size="sm" type="text" placeholder="输入要留言的标题" />
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-default">留言内容：</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea id="textarea1" v-model="content" placeholder="输入要留言的具体内容" rows="5" />
            <pre class="mt-3">{{ content }}</pre>
          </b-col>
        </b-row>

        <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged" >
          {{ errMsg }} --{{ dismissCountDown }}
        </b-alert>
        <b-row class="my-1">
          <b-col sm="10">
            <b-button @click="pushLeave()" variant="outline-secondary">提交</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      title: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      errMsg: ''
    }
  },
  methods: {
    async pushLeave () {
      if (!this.content || !this.title) {
        this.$store.commit('changAlert', {
          msg: '请填写完整！',
          status: 2,
          sec: 5
        })
      } else {
        let res = await this.$axios.post('/api/user/leave', {
          title: this.title,
          content: this.content
        })
        if (res.data.status) {
          this.$store.commit('changAlert', {
            msg: '提交成功！',
            status: 1,
            sec: 5
          })
        } else {
          this.$store.commit('changAlert', {
            msg: '提交失败！',
            status: 2,
            sec: 5
          })
        }
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (e) {
      this.dismissCountDown = this.dismissSecs
      this.errMsg = e
    }
  }
}
</script>

<style scoped>

.files-container {
  padding-right: 0px;
  padding-left: 0px;
  /* background-color: rgb(246, 41, 20); */
  min-height: 87vh;
  width: 100vw;
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
  width: 1.4rem;
}
.sxd-nav a img {
  margin: -0.4rem 0 0 0.3rem;
  width: 1.2rem;
}
.sxd-nav a {
  color: rgb(246, 41, 20);
}
.sxd-nav span {
  display: inline-flex;
  margin-left: 0.4rem;
}
.leave-con {
  color: #fff;
  margin-top: 1rem;
}
footer {
  color: #000;
}
</style>
