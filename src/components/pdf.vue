<template>
  <section>
    <iframe :src=allUrl frameborder="0" width="100%" height="500">
    </iframe>
  </section>
</template>

<script>
export default {
  data () {
    return {
      // allUrl: ''
    }
  },
  computed: {
    allUrl () {
      return '/static/pdfjs/web/viewer.html?file=' + this.url
    }
    // this.allUrl = '/static/pdfjs/web/viewer.html?file=' + this.url
  },
  props: ['url']
}
</script>
