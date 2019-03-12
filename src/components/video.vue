<template>
  <div>
    <video controls="controls" :autoplay="autoplay" :poster="poster" :src="videosrc" x-webkit-airplay="true" webkit-playsinline="true"></video>
  </div>
</template>

<script>
export default {
  props: {
    poster: {
      type: String
    },
    videosrc: {
      type: String
    },
    autoplay: {
      type: Boolean
    }
  },
  data () {
    return {
      // title: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      // poster: ''
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
  video::-internal-media-controls-download-button {
    display:none;
  }
  video::-webkit-media-controls-enclosure {
    overflow:hidden;
  }
  video::-webkit-media-controls-panel {
    width: calc(100% + 35px);
  }
  video {
    width: 100%;
  }
</style>
