<template>
  <section v-bind:class="[ regIsTrue||forgetPassShow ? 'registerbg': 'loginbg' ]">
    <!-- <Navbar navText="登录/注册" /> -->
    <b-container fluid class="files-container">
      <div class="formgroup">
        <div>
          <p>账号：</p>
          <!-- <label for="userName">账号：</label> -->
          <b-form-input
            id="userName"
            v-model="username"
            trim
            type="number"
            :state="usernameState"
            aria-describedby="userNameFeedback"
            placeholder="请输入手机号"
          />
          <!-- <p v-show="!usernameState" id="userNameFeedback" class="feedBackP">
            请输入11位数字哟~
          </p> -->
        </div>
        <div >
          <p v-if="!forgetPassShow">密码：</p>
          <p v-if="forgetPassShow">新密码：</p>
          <!-- <label for="passWord">密码：</label> -->
          <b-form-input
            id="passWord"
            v-model="password"
            trim
            type="password"
            :state="passState"
            aria-describedby="passWordFeedback"
            placeholder="请输入密码"
          />
          <!-- <p v-show="!passState" id="passWordFeedback" class="feedBackP">
            不能为空哟~
          </p> -->
        </div>
        <div v-if="regIsTrue" >
          <p>姓名：</p>
          <!-- <label for="nameWord">姓名：</label> -->
          <b-form-input
            id="nameWord"
            v-model="nameword"
            trim
            type="text"
            :state="nameState"
            aria-describedby="nameWordFeedback"
            placeholder="请输入姓名"
          />
          <!-- <p v-show="!nameState" id="nameWordFeedback" class="feedBackP">
            不能为空哟~
          </p> -->
        </div>
        <div v-if="regIsTrue||forgetPassShow">
          <Verify
            fontSize="1rem"
            height="2.5rem"
            @success="changeVery(true)"
            @error="changeVery(false)"
            :type="1"
            @blur="checkVery()"
            width="100%"></Verify>
        </div>
        <div v-if="regIsTrue||forgetPassShow" class="veryCode">
          <p>验证码：</p>
          <!-- <label for="varyWord">验证码：</label> -->
          <div class="codeVery">
            <b-form-input
            id="varyWord"
            v-model="verycode"
            trim
            type="text"
            :state="verycodeState"
            aria-describedby="varyWordFeedback"
            placeholder="请输入验证码"
          />
            <b-button @click="sendCode()" v-show="!isSendCode"  for="varyWord" variant="info" >验证码</b-button>
            <b-button v-show="isSendCode"  for="varyWord" disabled >{{ codeState }}S</b-button>
          </div>
          <!-- <p v-show="!verycodeState" id="varyWordFeedback" class="feedBackP">
            不能为空哟~
          </p> -->
        </div>
        <div v-if="!regIsTrue&&!forgetPassShow" class="wjmmQ">
          <span @click="forgetPass()">忘记密码</span>
        </div>
        <div v-if="forgetPassShow" class="wjmmQ">
          <span @click="forgetPass()">密码登录</span>
        </div>
        <div>
          <b-button @click="login()" v-if="!regIsTrue" block variant="info">登录</b-button>
          <b-button v-if="!regIsTrue" @click="regTrue()" block variant="secondary">注册</b-button>
          <b-button class="regButton" v-if="regIsTrue" @click="register()" block variant="secondary">注册</b-button>
          <b-button v-if="regIsTrue" @click="regTrue()" block variant="info">返回登录</b-button>
        </div>
      </div>
    </b-container>
    <b-modal id="modal-scrollable" scrollable :title="title" ok-only ok-title="阅读完毕">
      {{content}}
    </b-modal>
    <Footer/>
  </section>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Verify from '@/components/Verify'

export default {
  components: {
    Navbar,
    Footer,
    Verify
  },
  data () {
    return {
      content: '',
      title: '',
      username: '',
      password: '',
      regIsTrue: false,
      nameword: '',
      verycode: '',
      countdown: 0,
      isSendCode: false,
      forgetPassShow: false,
      imgVery: false,
      autoBackground: 'url(/static/login-min.png)'
    }
  },
  computed: {
    nameState () {
      // eslint-disable-next-line
      return this.nameword.length !== 0 ? true : false
    },
    passState () {
      // eslint-disable-next-line
      return this.password.length !== 0 ? true : false
    },
    usernameState () {
      // eslint-disable-next-line
      return this.username.length === 11 ? true : false
    },
    verycodeState () {
      // eslint-disable-next-line
      return this.verycode.length !== 0 ? true : false
    },
    codeState () {
      return this.countdown
    }
  },
  methods: {
    postCid (e) {
      this.content = e.content
      this.title = e.title
    },
    regTrue () {
      if (this.regIsTrue) {
        this.regIsTrue = false
      } else {
        this.regIsTrue = true
        this.forgetPassShow = false
      }
    },
    checkVery () {
      console.log(this.$refs.instance)
    },
    changeVery (e) {
      console.log(new Date())
      if (e) {
        this.imgVery = true
      } else {
        this.imgVery = false
      }
    },
    // 注册
    async register () {
      if (this.regIsTrue) {
        // ajax
        if (this.username && this.password && this.nameword && this.verycode) {
          // this.$router.push('/me?username=111111&name=张三&part=少年部&zw=部委')
          try {
            const response = await this.$axios.post('/api/user/register', {
              phone: this.username,
              name: this.nameword,
              code: this.verycode,
              password: this.password
            })
            if (response.data.status) {
              this.login()
            }
            console.log(response)
          } catch (error) {
            this.$store.commit('changAlert', {
              msg: '请求失败',
              status: 2,
              sec: 5
            })
          }
        } else {
          this.$store.commit('changAlert', {
            msg: '请填写完整！',
            status: 2,
            sec: 5
          })
        }
      } else {
        this.regIsTrue = true
      }
    },
    // 发送验证码
    async sendCode () {
      if (this.imgVery) {
        if (this.isSendCode === false && this.countdown <= 0) {
          if (this.username) {
            try {
              this.listenCode()
              const response = await this.$axios.post('/api/user/sms', {
                phone: this.username
              })
              // const response = await this.$axios.get('http://115.159.83.44:7192/api/info')
              if (response.data.status) {
                console.log('suc')
              } else {
                this.$store.commit('changAlert', {
                  msg: '发送失败！',
                  status: 2,
                  sec: 5
                })
              }
            } catch (error) {
              this.$store.commit('changAlert', {
                msg: '请求失败',
                status: 2,
                sec: 5
              })
            }
          } else {
            this.$store.commit('changAlert', {
              msg: '请填写手机号！',
              status: 2,
              sec: 5
            })
          }
        }
      } else {
        this.$store.commit('changAlert', {
          msg: '请进行图形验证是否是机器人！',
          status: 2,
          sec: 5
        })
      }
    },
    // 倒计时
    async listenCode () {
      console.log('333')
      this.isSendCode = true
      this.countdown = 59
      for (let i = 1; i <= 59; i++) {
        console.log('444')
        setTimeout(() => {
          this.countdown -= 1
          console.log(this.countdown)
          if (this.countdown === 0) {
            this.isSendCode = false
          }
        }, i * 1000)
      }
    },
    // 切换忘记密码
    forgetPass () {
      if (this.forgetPassShow) {
        this.forgetPassShow = false
      } else {
        this.forgetPassShow = true
      }
    },
    async login () {
      // this.$router.push('/me?username=111111&name=张三&part=少年部&zw=部委')
      if (this.forgetPassShow) { // 忘记密码，验证码登录
        if (this.username && this.verycode) {
          const response = await this.$axios.post('/api/user/login', {
            phone: this.username,
            code: this.verycode,
            type: 'sms'
          })
          // if (response.statu)
          console.log(response)
          if (response.data.status) {
            localStorage.setItem('token', response.data.data)
            localStorage.setItem('isLogin', true)
            localStorage.setItem('username', this.username)
            this.getBack()
            // localStorage.setItem('name', this.name)
            // this.$router.push(`/me`)
          } else {
            this.$store.commit('changAlert', {
              msg: '账号或验证码错误！',
              status: 2,
              sec: 5
            })
          }
        } else {
          this.$store.commit('changAlert', {
            msg: '请填写完整！',
            status: 2,
            sec: 5
          })
        }
      } else { // 密码登录
        if (this.username && this.password) {
          const response = await this.$axios.post('/api/user/login', {
            phone: this.username,
            password: this.password,
            type: 'password'
          })
          console.log(response)
          if (response.data.status) {
            localStorage.setItem('token', response.data.data)
            localStorage.setItem('isLogin', true)
            localStorage.setItem('username', this.username)
            this.getBack()
          } else {
            this.$store.commit('changAlert', {
              msg: '账号或密码错误！',
              status: 2,
              sec: 5
            })
          }
        } else {
          this.$store.commit('changAlert', {
            msg: '请填写完整！',
            status: 2,
            sec: 5
          })
        }
      }
    },
    // 回到之前访问页面
    getBack () {
      if (this.$route.query.hasOwnProperty('url')) {
        this.$router.replace({
          path: this.$route.query.url
        })
      } else {
        this.$router.push('/')
      }

      // window.history.length > 1
      //   ? this.$router.go(-1)
      //   : this.$router.push('/')
    }
  }
}
</script>

<style scoped>

.files-container {
  padding-right: 0px;
  padding-left: 0px;
  /* background-color: rgb(246, 41, 20); */
  width: 100vw;
  /* color: #fff; */
  /* min-height: 87vh; */
  align-items: center;
  justify-content: center;
  display: flex;
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

.formgroup {
  /* height: 73vh; */
  margin-top: 21vh;
}
.formgroup div p {
  margin-bottom: 0.5rem;
}

.formgroup:last-child div {
  margin-top: 0.5rem;
  /* height: auto; */
}

.formgroup input {
  width: 60vw;
  border-radius: 0.3rem;
}
.feedBackP {
  font-size: 80%;
  margin-top: 0.35rem;
  text-indent: 0.5rem;
}
.form-control {
  /* display: inline; */
  width: 65vw;
}
.wjmmQ {
  height: 2.5rem!important;
  display: flex;
  justify-content: flex-end;
}
.wjmmQ span {
  display: inline-block;
  font-size: 0.86rem;
}
.veryCode {
  width: 60vw;
}
.veryCode input {
  width: 40vw;
  border-bottom-right-radius: 0%;
  border-top-right-radius: 0%;
}
.codeVery {
  display: flex;
  height: auto!important;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
}
.codeVery button{
  width: 20vw;
  height: calc(1.5em + 0.75rem + 2px);
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
.regButton {
  margin-top: 1.5rem;
}
.verify-btn {
  display: none;
}
.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #57B5C1;
}
.btn-info {
  background-color: #57B5C1;
  border-color: #57B5C1;
}
.loginbg, .registerbg {
  position: relative;
  min-height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top;
  color: #57B5C1;
}
.loginbg {
  background-image: url('/static/loginbg-min.png');
}
.registerbg {
  background-image: url('/static/register-min.png');
}
footer {
  position: absolute;
  bottom: 0;
  color: #fff!important;
}
.verify-code {
  color: #57B5C1;
}
.verify-btn {
  background-color: #57B5C1;
}
@media only screen and (min-width: 600px) {
  .formgroup {
    margin-top: 17rem;
  }
}
</style>
