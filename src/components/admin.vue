<template>
  <section>
    <Navbar navText="管理界面"/>
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
  color: #000;
}
</style>
