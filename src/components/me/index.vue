<template>
  <section>
    <b-container fluid>
      <b-row class="infos">
        <b-col cols="1"></b-col>
        <b-col cols="2"><img src="/static/logo.png"></b-col>
        <b-col v-if="!isLogin"><router-link to="/login">登录 / 注册</router-link></b-col>
        <b-col class="detail" v-if="isLogin">
          <h4>{{name}}</h4>
          <h6>部门：{{part}}-{{zw}}</h6>
        </b-col>
      </b-row>
      <b-row class="buttons" v-if="isLogin">
        <b-col cols="2"><img src="/static/logo.png"></b-col>
        <b-col cols="10"><router-link to="/me/change">个人信息</router-link></b-col>
      </b-row>
      <b-row class="buttons">
        <b-col cols="2"><img src="/static/logo.png"></b-col>
        <b-col cols="10"><router-link to="/me/jianjie">平台简介</router-link></b-col>
      </b-row>
      <b-row class="buttons">
        <b-col cols="2"><img src="/static/logo.png"></b-col>
        <b-col cols="10"><router-link to="/me/leave">互动留言</router-link></b-col>
      </b-row>
      <b-row v-if="isLogin" class="editLoginDiv">
        <b-button @click="editLogin()" block variant="success">退出登录</b-button>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      isLogin: false,
      name: '',
      part: '',
      zw: ''
    }
  },
  methods: {
    editLogin () {
      this.isLogin = false
    }
  },
  created () {
    if (this.$route.query) {
      let data = this.$route.query
      this.isLogin = true
      this.name = data.name
      this.part = data.part
      this.zw = data.zw
    } else {
      this.isLogin = false
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
  min-height: 86vh;
}
.infos {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;
  border-bottom: 1px dotted #fff;
}

.infos img{
  max-width: 100%;
  display: inline-flex;
}
a {
  color: #fff;
}
.infos div a {
  font-size: 1.4rem;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #fff;
}
.col-2{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.buttons img{
  max-width: 50%;
  display: inline-flex;
}
.col-10 {
  margin-left: -2.5rem;
}
.row {
  margin-right: 0;
}
.editLoginDiv {
  display: flex;
  justify-content: center;
  margin-top: 34vh;
}
.editLoginDiv button {
  width: 60vw;
}
.detail {
  color: #fff;
  max-height: 3.1rem;
}
.detail:first-child p{
  font-size: 1.5rem;
}
</style>
