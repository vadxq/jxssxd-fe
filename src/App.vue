<template>
  <b-container fluid id="app">
    <b-alert
      :show="suctStatus.sec"
      dismissible
      @dismissed="suctStatus.sec=0"
      @dismiss-count-down="countDownChanged"
      class="sucBox"
      variant="success">{{suctStatus.msg}}</b-alert>
    <b-alert
      :show="errStatus.sec"
      dismissible
      @dismissed="errStatus.sec=0"
      @dismiss-count-down="countDownChanged"
      class="errBox"
      variant="danger"
    >{{errStatus.msg}}</b-alert>
    <router-view/>
  </b-container>
</template>

<script>
export default {
  name: 'App',
  computed: {
    suctStatus () {
      if (this.$store.state.alert.status === 1) {
        return this.$store.state.alert
      } else {
        return {
          msg: '',
          status: 0,
          sec: 0
        }
      }
    },
    errStatus () {
      if (this.$store.state.alert.status === 2) {
        return this.$store.state.alert
      } else {
        return {
          msg: '',
          status: 0,
          sec: 0
        }
      }
    }
  },
  data () {
    return {
      dismissCountDown: 0
    }
  },
  methods: {
    countDownChanged (sec) {
      this.errStatus.sec = sec
      this.suctStatus.sec = sec
    }
  }
}
</script>

<style>
#app {
  padding-right: 0px;
  padding-left: 0px;
  /* background-color: rgb(246, 41, 20); */
  width: 100vw;
  min-height: 100vh;
}
.gonggao .close {
  padding: 0.2rem 1.25rem;
}
.sucBox, .errBox {
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0rem;
}
</style>
