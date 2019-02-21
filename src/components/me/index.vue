<template>
  <section>
    <b-container fluid>
      <b-row class="infos">
        <b-col cols="1"></b-col>
        <b-col cols="2"><img src="/static/logo.png"></b-col>
        <b-col ><router-link to="/login">登录 / 注册</router-link></b-col>
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
      isLogin: true
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
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
</style>
