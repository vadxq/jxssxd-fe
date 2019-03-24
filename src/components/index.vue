<template>
  <section>

    <Navbar navText="首页" />

    <div class="ggdiv">
      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade  >
        <b-carousel-slide  img-src="./static/bg.png"/>
        <!-- <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"/> -->
        <!-- <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"/> -->
      </b-carousel>
      <!-- <div class="gonggao" >
          <b-alert show dismissible>
            <img src="../assets/gantan.png" > 有新的公告！ <router-link to="/notice">查看详情</router-link>
          </b-alert>
      </div> -->
    </div>

    <b-container fluid  class="bv-example-row  text-center">
      <b-row align-v="center" align-h="center">
        <b-col cols="6">
          <router-link to="/video">
            <div>
              视频学习
            </div>
          </router-link>
        </b-col>
        <b-col cols="6">
          <!-- <a target='_blank' href="http://www.jxyouth.org.cn/twgbw/snb/">
            <div>
              阵地建设
            </div>
          </a> -->
          <router-link to="/files">
            <div>
              重要文件
            </div>
          </router-link>
        </b-col>
      </b-row>
      <b-row align-v="center" align-h="center">
        <b-col cols="6">
          <!-- <a  target='_blank' href="http://hdk.k618.cn/">
            <div>
              课程建设
            </div>
          </a> -->
          <router-link to="/activities">
            <div>
              活动案例
            </div>
          </router-link>
        </b-col>
        <b-col cols="6" >
          <router-link to="/cultural">
            <div>
              文化产品
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-modal id="modal-tshd" title="特色活动" ok-only ok-title="期待">
      <P>正在开发中，敬请期待</P>
    </b-modal> -->
    <div class="footer-box">
      <Footer/>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
section {
  overflow: auto;
  height: 100vh;
  background-color: rgb(246, 41, 20);

}
.nav-index {
  /* background-color: rgb(246, 41, 20); */
  border-bottom: solid 1px rgba(0, 0, 0, 0.5);
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
.dropdown-item a{
  color: #fff !important;
}
.dropdown-menu {
  min-width: 0;
}

.col-6 {
  height: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-6 a {
  display: inline-flex;
  width: 39vw;
  height: 24vw;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: rgb(242,55,50);
  box-shadow: 0px 0px 1.5px rgba(0,0,0,0.6);
  border-radius: 1.5vw;
}

.footer-box {
  position: absolute;
  bottom: 0.1rem;
}
.ggdiv {
  position: relative;
}
.gonggao {
  position: absolute;
  bottom: 0rem;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
}
.alert {
  width: 90%;
  padding: 0.2rem 1.25rem;
    margin-bottom: 0.3rem;
  /* height: 3rem; */
}
</style>
