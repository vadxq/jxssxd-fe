<template>
  <section>
    <Navbar navText="个人中心"/>
    <router-view/>
    <Footer/>
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
footer {
  position: absolute;
  bottom: 0.5rem;
}
</style>
