<template>
  <section>
    <b-container fluid class="files-container">
      <div class="sxd-nav">
        <router-link to="/me">
          <img src="@/assets/index.png">
          个人中心
        </router-link>
        <span> /</span>
        <img src="@/assets/ex.png">
          <span>平台简介</span>
      </div>
      <div class="info">
        <b-row class="info-title">
          <div>江西省少工委官方微信</div>
        </b-row>
        <b-row class="info-img">
          <div><img src="/static/weixin.jpg" alt=""></div>
        </b-row>
        <b-row class="info-footer">
          <div>江西省少工委官方QQ群：187122274</div>
        </b-row>

      </div>
    </b-container>
  </section>
</template>

<script>
export default {
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
  /* color: rgb(246, 41, 20); */
  color: #57B5C1;
}
.sxd-nav span {
  display: inline-flex;
  margin-left: 0.4rem;
}

.row {
  margin-left: 0;
  margin-top: 1rem;
  /* color: #fff; */
}
.info {
  margin-top: 2rem;
}
.info .row {
  margin-right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.info-img img {
  width: 60vw;
}
.info-footer {
  margin-top: 2.5rem;
}
footer {
  color: #000;
}
</style>
