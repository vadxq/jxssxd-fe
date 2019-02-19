<template>
  <b-navbar class="nav-index">
    <b-navbar-brand href="#">
      <img
        src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4159524658,2161957590&fm=179&app=42&f=JPEG?w=121&h=140"
        class="d-inline-block align-top"
        alt="BV"
      >
      江西少先队辅导员学习平台
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown :text="navText" right>
        <b-dropdown-item>
          <router-link to="/">首页</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/files">资料</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/me">个人中心</router-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import Navbar from "@/components/navbar";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      navText: ""
    };
  },
  mounted() {
    console.log(this.$route.path)
    switch (this.$route.path) {
      case "/me":
        this.navText = "个人中心";
      case "/files":
        this.navText = "资料";
      default:
        this.navText = "首页";
    }
  }
};
</script>

<style scoped>
.nav-index {
  /* background-color: rgb(246, 41, 20); */
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
}
.navbar-brand {
  color: #fff;
  font-size: 1rem;
}
.navbar-brand img {
  width: 5vw;
}
.navbar-nav,
.nav-item-dropdown,
.dropdown-item a {
  color: #fff !important;
}
.dropdown-menu {
  min-width: 0;
}
</style>
