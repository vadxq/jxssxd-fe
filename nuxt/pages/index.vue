<template>
  <section class="container">
    <div id="sidebar-collapse" class="col-sm-3 col-md-2 sidebar">
    <div class="leftmenu">
      
    </div>
    <ul class="nav menu" role="tablist">
      <li class="active" role="tab" data-toggle="tab" v-link="{ path: '/index/indexApp', replace: false }"><a><i class="fa fa-internet-explorer fa-fw"></i> 信息服务</a></li>
       <li  role="tab" data-toggle="tab" v-link="{ path: '/index/notice', replace: false }">
        <a><i class="fa fa-envelope fa-fw"></i> 通知中心
           <span v-if="noticeCount > 0" class="badge badge-r">{{noticeCount}}</span> 
        </a>
      </li> 
      <li   role="tab" data-toggle="tab" v-link="{ path: '/index/opinion', replace: false }"><a><i class="fa fa-commenting-o fa-fw"></i> 意见信箱</a></li>
      <li role="tab" data-toggle="tab" v-link="{ path: '/index/person', replace: false }"><a><i class="fa fa-user fa-fw"></i> 个人资料</a></li>
      <li role="tab" data-toggle="tab" v-link="{ path: '/index/account', replace: false }"><a><i class="fa fa-unlock-alt fa-fw"></i> 帐号设置</a></li>
      <li @click="logout()"><a v-link="{ path: '/loginBox/login', replace: false }"><i class="fa fa-power-off fa-fw"></i> 退出系统</a></li>
    </ul>

  </div>
  </section>
</template>

<script>

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
