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
          <span>个人信息</span>
      </div>
    </b-container>
    <b-container class="change-con">
      <b-row>
        <b-col>
          <b-form >
            <b-input-group prepend="姓名：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  v-model="msg.name"  />
            </b-input-group>
          </b-form>
        </b-col>
        <b-col>
          <b-form >
            <b-input-group prepend="性别：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-select  v-model="msg.xb" :options="options" />
            </b-input-group>
          </b-form>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form >
            <b-input-group prepend="年龄：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input type="number" v-model="msg.nl"  />
            </b-input-group>
          </b-form>
        </b-col>
        <b-col>
          <b-form >
            <b-input-group prepend="地区：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-select  v-model="msg.dq" :options="options" />
            </b-input-group>
          </b-form>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form >
            <b-input-group prepend="职务：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-select  v-model="msg.zw" :options="zwOptions" />
            </b-input-group>
          </b-form>
        </b-col>
        <b-col>
          <b-form >
            <b-input-group prepend="职称：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  v-model="msg.zc"  />
            </b-input-group>
          </b-form>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form >
            <b-input-group prepend="政治面貌：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  v-model="msg.zzmm"  />
            </b-input-group>
          </b-form>
        </b-col>
        <b-col>
          <b-form >
            <b-input-group prepend="毕业学校：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  v-model="msg.byxx"  />
            </b-input-group>
          </b-form>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form >
            <b-input-group prepend="学历：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-select  v-model="msg.zw" :options="zwOptions" />
            </b-input-group>
          </b-form>
        </b-col>
        <b-col>
          <b-form >
            <b-input-group prepend="职称：" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input  v-model="msg.zc"  />
            </b-input-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      title: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      errMsg: '',
      options: {
        0: '男',
        1: '女'
      },
      zwOptions: {
        0: '大队辅导员',
        1: '中队辅导员',
        2: '其他'
      },
      msg: {
        name: '',
        xb: 0,
        nl: '',
        dq: '',
        zw: '',
        zc: '',
        zzmm: '',
        byxx: '',
        xl: '',
        gzdw: '',
        lxfs: '',
        dyrs: '',
        fdyrs: '',
        kh: ''
      }
    }
  },
  methods: {
    pushLeave () {
      if (!this.content || !this.title) {
        this.showAlert('请填写完整！')
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (e) {
      this.dismissCountDown = this.dismissSecs
      this.errMsg = e
    }
  }
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

.change-con {
  background-color: #fff;
  padding: 1.2rem 1rem;
}
footer {
  color: #000;
}
</style>
