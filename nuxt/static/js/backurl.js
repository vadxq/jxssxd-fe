function goBack (url) {
  setTimeout(function () {
    if (history.length < 3) { // 历史列表中URL的数量,满足条件说明这个页面是首次打开，而不是从首页或者其他页面跳转过来的。
      var state = {
        title: 'index',
        url: url
      }
      window.history.pushState(state, 'index', location.href)
      state = {
        title: 'index',
        url: ''
      }
      window.history.pushState(state, 'index', '')
    }
    window.addEventListener('popstate', function (e) {
      if (window.history.state != null && window.history.state.url !== '') {
        location.href = window.history.state.url
      }
    })
  }, 1000)
}

goBack('https://wwww.ncuhome.cn')
