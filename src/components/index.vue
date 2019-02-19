<template>
  <section>
    <Navbar navText="首页" />

    <div>
      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators >
        <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"/>
        <!-- <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"/> -->
        <!-- <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"/> -->
      </b-carousel>
    </div>

    <b-container fluid  class="bv-example-row  text-center">
      <b-row align-v="center" align-h="center">
        <b-col cols="6">
          <router-link to="/">
            <div>
              风采大赛
            </div>
          </router-link>
        </b-col>
        <b-col cols="6">
          <a target='_blank' href="http://www.jxyouth.org.cn/twgbw/snb/">
            <div>
              阵地建设
            </div>
          </a>
        </b-col>
      </b-row>
      <b-row align-v="center" align-h="center">
        <b-col cols="6">
          <a  target='_blank' href="http://hdk.k618.cn/'">
            <div>
              课程建设
            </div>
          </a>
        </b-col>
        <b-col cols="6">
          <router-link to="/">
            <div>
              特色活动
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer-box">
      <Footer/>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      navText: "首页"
    };
  }
};
</script>

<style scoped>
section {
  overflow: hidden;
  height: 100vh;
}
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
  box-shadow: 0px 0px 1.5px rgba(0,0,0,0.5);
  border-radius: 1.5vw;
}

.footer-box {
  position: absolute;
  bottom: 0.1rem;
}
</style>
