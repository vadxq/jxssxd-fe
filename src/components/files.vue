<template>
  <section>
    <Navbar navText="资料"/>
    <b-container class="files-container">
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
    </b-container>

    <b-container class="files-container">
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
    </b-container>

    <b-container class="files-container">
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
      <div class="item">dfdfdf</div>
    </b-container>

    <Footer/>
  </section>
</template>

<script>
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
section {
}
.item {
  padding: 0.5rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
   
}
.files-container {
  margin: 1rem auto;
}
.files-container:first-child {
  height: 1.5vw;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
</style>

