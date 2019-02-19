<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import alertBox from "../components/Alertbox.vue";
// export default {
//   data() {
//     return {
//       online: true,
//       todayYear: new Date().getFullYear()
//     };
//   },
//   asyncData(context) {
//     return ;
//   },

//   methods: {
//     _toggleNetworkStatus({ type }) {
//       this.online = type === "online";
//     },
//     checkX5() {
//       let ua = window.navigator.userAgent.toLowerCase();
//       if (ua.match(/MicroMessenger/i) === "micromessenger") {
//         this.$store.commit("setX5", true);
//       } else {
//         this.$store.commit("setX5", false);
//       }
//     },
//     checkMobile() {
//       let regexMatch = /(micromessenger|nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
//       let u = window.navigator.userAgent;
//       if (u === null) {
//         this.$store.commit("setX5", true);
//       }
//       let result = regexMatch.exec(u);
//       if (result === null) {
//         this.$store.commit("setX5", false);
//       } else {
//         this.$store.commit("setX5", true);
//       }
//     },
//     isLogin() {
//       if (
//         localStorage.getItem("token") &&
//         localStorage.getItem("token").length > 0
//       ) {
//         this.$store.commit("setLogin", true);
//       } else {
//         this.$store.commit("setLogin", false);
//       }
//     }
//   },
//   mounted() {
//     this.isLogin();
//     if (!window.navigator) {
//       this.online = false;
//       return;
//     }
//     this.online = Boolean(window.navigator.onLine);
//     window.addEventListener("offline", this._toggleNetworkStatus);
//     window.addEventListener("online", this._toggleNetworkStatus);
//   },
//   watch: {
//     online() {
//       if (this.online === false) {
//         let errorMs = {
//           status: "error",
//           msg: "网络故障，将访问缓存页面"
//         };
//         this.$store.commit("setAlertMsg", errorMs);
//       } else {
//         let errorMs = {
//           status: "info",
//           msg: "您的网络已恢复，请继续浏览"
//         };
//         this.$store.commit("setAlertMsg", errorMs);
//       }
//     }
//   },
//   destroyed() {
//     window.removeEventListener("offline", this._toggleNetworkStatus);
//     window.removeEventListener("online", this._toggleNetworkStatus);
//   }
// };
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
