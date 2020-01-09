<template lang="pug">
  div(id="app")
    v-app
      Header
      Content
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    Header: Header,
    Content: Content
  }
}
</script>
