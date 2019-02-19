<template>
  <b-container fluid id="app">
    <router-view/>
  </b-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  padding-right: 0px;
  padding-left: 0px;
  background-color: rgb(246, 41, 20);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
