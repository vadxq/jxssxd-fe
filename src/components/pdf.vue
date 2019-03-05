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
      allUrl: ''
    }
  },
  mounted () {
    this.allUrl = '/static/pdfjs/web/viewer.html?file=' + this.url
  },
  props: ['url']
}
</script>
