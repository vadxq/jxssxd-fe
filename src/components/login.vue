<template>
  <section>
    <Navbar navText="登录/注册" />
    <b-container fluid class="files-container">
      <div class="formgroup">
        <div>
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
          <p v-show="!usernameState" id="userNameFeedback" class="feedBackP">
            请输入11位数字哟~
          </p>
        </div>
        <div>
          <!-- <label for="passWord">密码：</label> -->
          <b-form-input
            id="passWord"
            v-model="password"
            trim
            type="password"
            @blur="getPassState()"
            :state="passState"
            aria-describedby="passWordFeedback"
            placeholder="请输入密码"
          />
          <p v-show="!passState" id="passWordFeedback" class="feedBackP">
            不能为空哟~
          </p>
        </div>
        <div v-if="regIsTrue" >
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
          <p v-show="!nameState" id="nameWordFeedback" class="feedBackP">
            不能为空哟~
          </p>
        </div>
        <div v-if="regIsTrue" class="veryCode">
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
            <b-button @click="sendCode()" v-show="!isSendCode"  for="varyWord" variant="danger" >验证码</b-button>
            <b-button v-show="isSendCode"  for="varyWord" disabled >{{ codeState }}S</b-button>
          </div>
          <p v-show="!verycodeState" id="varyWordFeedback" class="feedBackP">
            不能为空哟~
          </p>
        </div>
        <div v-if="!regIsTrue" class="wjmmQ">
          <span>忘记密码</span>
        </div>
        <div>
          <b-button @click="login()" v-if="!regIsTrue" block variant="success">登录</b-button>
          <b-button @click="regTrue()" block variant="secondary">注册</b-button>
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
export default {
  components: {
    Navbar,
    Footer
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
      isSendCode: false
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
        // ajax
        if (this.username && this.password && this.nameword && this.verycode) {
          this.$router.push('/me?username=111111&name=张三&part=少年部&zw=部委')
        } else {
          this.regIsTrue = false
        }
      } else {
        this.regIsTrue = true
      }
    },
    sendCode () {
      console.log('111')
      if (this.isSendCode === false && this.countdown <= 0) {
        console.log('222')
        this.listenCode()
      }
    },
    async listenCode () {
      console.log('333')
      this.isSendCode = true
      this.countdown = 59
      for (let i = 1; i <= 59; i++) {
        console.log('444')
        setTimeout(() => {
          this.countdown -= 1
          console.log(this.countdown)
        }, i * 1000)
      }
      if (this.countdown === 0) this.isSendCode = false
    },
    login () {
      this.$router.push('/me?username=111111&name=张三&part=少年部&zw=部委')
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
  color: #fff;
  min-height: 87vh;
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
  height: 68vh;
}
.formgroup div {
  height: 4.7rem;
}

.formgroup:last-child div {
  margin-top: 0;
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
}
.codeVery button{
  width: 20vw;
  height: calc(1.5em + 0.75rem + 2px);
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
</style>
