<template>
  <section>
    <b-container fluid class="files-container">
      <div class="sxd-nav">
        <router-link to="/me">
          <img src="@/assets/index.png">
          个人中心
        </router-link>
        <span> /</span>
        <img src="@/assets/personalinfo.png">
          <span>个人信息</span>
      </div>

      <b-container class="change-con">

        <b-row>
          <b-col>
            <b-input-group prepend="姓名：" >
              <b-form-input v-model="msg.name"/>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="身份证号：" >
              <b-form-input v-model="msg.sfzh"/>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6" sm="6" cols="6" md="6" xl="6">
            <b-input-group prepend="性别：" >
              <b-form-select v-model="msg.xb" :options="options"/>
            </b-input-group>
          </b-col>

          <b-col lg="6" sm="6" cols="6" md="6" xl="6">
            <b-input-group prepend="年龄：" >
          <b-input type="number" v-model="msg.nl"  />
        </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="selecList">
            <b-input-group prepend="地区：" class="selectWid">
            </b-input-group>
            <b-input-group  >
              <b-form-select v-model="activityFirCode" :options="cityData.fir" @change="getSecCode()" />
            </b-input-group>

            <b-input-group >
              <b-form-select v-model="activitySecCode" @change="getThrCode()" :options="cityData.sec"  />
            </b-input-group>

            <b-input-group  >
              <b-form-select v-model="activityThrCode" :options="cityData.tir"  />
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="职务：">
              <b-form-select  v-model="msg.zw" :options="zwOptions" />
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="职称：" >
              <b-input  v-model="msg.zc"  />
            </b-input-group>

          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="政治面貌：" >
              <b-input  v-model="msg.zzmm"  />
            </b-input-group>

          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="毕业学校：" >
              <b-input  v-model="msg.byxx"  />
            </b-input-group>

          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="学历：" >
          <b-form-select  v-model="msg.xl" :options="xlOptions" />
        </b-input-group>

          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="工作单位：" >
              <b-input  v-model="msg.gzdw"  />
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="联系方式：" >
              <b-input  v-model="msg.lxfs"  />
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group prepend="学校少先队员人数：" >
              <b-input  v-model="msg.dyrs"  />
            </b-input-group>
          </b-col>
        </b-row>

        <b-row v-if="zwOpt == '大队辅导员'">
          <b-col>
            <b-input-group prepend="少先队辅导员人数：" >
              <b-input  v-model="msg.fdyrs"  />
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group
            description=""
              label-for="input1"
            >
            <p>目前在开展少先队工作过程中遇到的最大困惑:</p>
              <b-form-textarea
                v-model="msg.kh"
                placeholder="请输入内容"
                rows="3"
                max-rows="6"
              />
            </b-form-group>

          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button block @click="pushLeave()" variant="outline-danger">确认</b-button>
          </b-col>
        </b-row>

      </b-container>
    </b-container>
  </section>
</template>

<script>
import province from '../../assets/json/province.json'
import country from '../../assets/json/country.json'
import city from '../../assets/json/city.json'

export default {
  data () {
    return {
      cityData: {
        fir: province,
        sec: city['360000000000'],
        tir: country['360100000000']
      },
      country: country,
      city: city,
      activityFirCode: '360000000000',
      activitySecCode: null,
      activityThrCode: null,
      dismissSecs: 5,
      dismissCountDown: 0,
      errMsg: '',
      options: {
        男: '男',
        女: '女'
      },
      zwOptions: {
        大队辅导员: '大队辅导员',
        中队辅导员: '中队辅导员',
        其他: '其他'
      },
      xlOptions: {
        研究生: '研究生',
        本科: '本科',
        专科: '专科',
        其他: '其他'
      },
      msg: {
        name: '', // 姓名
        xb: 0, // 性别
        nl: '', // 年龄
        // dq: '', // 地区（代码，后端建库）
        zw: 2, // 职务
        zc: '', // 职称
        zzmm: '', // 政治面貌
        byxx: '', // 毕业院校
        xl: '', // 学历
        gzdw: '', // 工作单位
        lxfs: '', // 联系方式
        dyrs: '', // 队员人数
        fdyrs: 0, // 辅导员人数
        kh: '', // 困惑
        sfzh: '' // 身份证
      }
    }
  },
  computed: {
    zwOpt () {
      return this.msg.zw
    }
  },
  methods: {
    async pushLeave () {
      // delete msg['qd']
      this.msg.dq = this.activityThrCode
      let errMsg = 0
      let msg = this.msg
      msg.fdyrs = Number(msg.fdyrs)
      // msg.xb = this.options[msg.xb]
      // msg.zw = this.zwOptions[msg.zw]
      // msg.xl = this.xlOptions[msg.xl]
      if (msg.create_time) {
        delete msg['create_time']
      }
      if (msg.id) {
        delete msg['id']
      }
      delete msg['is_admin']
      Object.values(msg).map(e => {
        if (e === '' || e === null) {
          errMsg += 1
        }
        console.log(e)
      })
      console.log(errMsg)
      if (errMsg) {
        this.$store.commit('changAlert', {
          msg: '请填写完整！',
          status: 2,
          sec: 5
        })
      } else {
        let res = await this.$axios.put('/api/user/info', this.msg)
        if (res.data.status) {
          this.$store.commit('changAlert', {
            msg: '更新成功！',
            status: 1,
            sec: 5
          })
          this.getInfo()
        } else {
          this.$store.commit('changAlert', {
            msg: '更新失败！',
            status: 2,
            sec: 5
          })
        }
      }
    },
    async getInfo () {
      let res = await this.$axios.get('/api/user/info')
      if (res.data.status) {
        this.msg = res.data.data
        if (res.data.data.dq) {
          if (res.data.data.dq.length > 6) {
            this.activityFirCode = res.data.data.dq.slice(0, 2) + '0000000000'
            this.activitySecCode = res.data.data.dq.slice(0, 4) + '00000000'
            this.activityThrCode = res.data.data.dq.slice(0, 6) + '000000'
          }
        }
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (e) {
      this.dismissCountDown = this.dismissSecs
      this.errMsg = e
    },
    getSecCode () {
      this.cityData.sec = this.city[this.activityFirCode]
    },
    getThrCode () {
      this.cityData.tir = this.country[this.activitySecCode]
    }
  },
  mounted () {
    this.getInfo()
    // this.cityData.fir = JSON.stringify(province)
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
  margin: 0rem 0 0 0.3rem;
  width: 1.3rem;
}
.sxd-nav a img {
  margin: -0.4rem 0 0 0.3rem;
  width: 1.2rem;
}
.sxd-nav a {
  /* color: rgb(246, 41, 20); */
  color: #57B5C1;
}
.sxd-nav span {
  display: inline-flex;
  margin-left: 0.4rem;
}

.change-con {
  background-color: #fff;
  padding: 1.2rem 1rem;
}
.row {
  margin-bottom: 1rem;
}
.form-group p {
  font-size: 0.8rem;
  margin: 0 0 0.4rem 0;
}
.picker {
  z-index: 1000;
}
footer {
  color: #000;
}

.selecList {
  display:  flex;
}
.selectWid {
  width: 5rem;
}
</style>
