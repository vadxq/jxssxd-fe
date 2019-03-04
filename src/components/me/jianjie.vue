<template>
  <section>
    <b-container fluid class="files-container">
      <div class="sxd-nav">
        <router-link to="/me">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFOSURBVEhL7ZU9SgNRGEVHsIudWCsuQCzcgOgSBFchWLoAwdINCJZuwM7CwkZsLRQXkJQRKwVR74G58DG8Sd7EmUkzBw483vdzUZKXYqAB66W9silfSjn3wo4cy99Sztx1yr6cSoda7qh1wpH8lAT9yNNSztxRo6dVTuS3JOBLHkvDmTtq9ND7b1bkuWQpfsgDWYU7au5jhtmFWJXX0ssmclfWQY0e9zPLjkaM5K30kje5LedBD72eYwe7suBReJQefpIbMhd6mfE8u+Y+NFvyVXroQa7JpjBzL72HnexOUn0Y8EIuypmMu5IPDV/+dxkbsc1gJGPmQ+PGtoKzqQu+lHc1Uou0GsyHzbWq1CKdBPOj4L/UPxq9BMeQ1B0MwVl4YGnBN/Iw+CyrIQ6mFnuvpPdk44E6U8GzzCY1HO0sOP7LUu5JwznVEx1YFkXxBxYv2KZyVCIFAAAAAElFTkSuQmCC">
          个人中心
        </router-link>
        <span> /</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACpSURBVEhL7ZaxDcIwEEU9AYyAYB2YIFOwAS0dsAbjsANKywbwfnESkYx8Z6dAip/0uty9pEjitFh2eMO7wyM2scYR3wFPWM0BbVHuib59YXN0QFtS4oF2bXW0JSjD0dagDEXnCEp3dK6g3GORSFDv4DmjzWtXkUjwFz04oQc99OCEHvTw30F94W0gd6zwaPOuv4UOUU+0oVq1Y4UutnjF3N17vOAGF0dKH0m8s/eBg8ijAAAAAElFTkSuQmCC">
          <span>平台简介</span>
      </div>
      <div class="info">
        <b-row class="info-title">
          <div>江西省少工委官方微信</div>
        </b-row>
        <b-row class="info-img">
          <div><img src="" alt="">微信图片</div>
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
  margin: -0.3rem 0 0 0.3rem;
}
.sxd-nav a {
  color: rgb(246, 41, 20);
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
  margin-left: 7vw;
  margin-top: 2rem;
}
.info-footer {
  margin-top: 2.5rem;
}
footer {
  color: #000;
}
</style>
