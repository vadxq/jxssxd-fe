<template>
  <b-navbar class="nav-index">
    <b-navbar-brand href="#">
      <img
        src="../assets/logo.png"
        class="d-inline-block align-top"
        alt="BV"
      >
      <span>
        江西少先队辅导员学习平台
      </span>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown :text="navText" right>
        <router-link class="dropdown-item" to="/">首页</router-link>
        <router-link class="dropdown-item" to="/notice">公告</router-link>
        <router-link class="dropdown-item" to="/files">资料</router-link>
        <router-link class="dropdown-item" to="/me">个人中心</router-link>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  components: {
    Navbar
  },
  props: ['navText'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.nav-index {
  /* background-color: rgb(246, 41, 20); */
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  background-color: rgb(246, 41, 20);

}
.navbar {
  padding: 0.2rem 1rem;
}
.navbar-brand, .navbar-brand span{
  color: #fff;
  font-size: 1rem;
}
.navbar-brand {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-brand img {
  width: 1.3rem;
}
.navbar-nav,
.nav-item-dropdown,
.dropdown-item  {
  color: #fff;
}
.dropdown-item, .dropdown-menu-right {
  min-width: 5rem!important;
}
.router-link-exact-active {
  color: rgb(231, 190, 188) !important;
}
</style>
