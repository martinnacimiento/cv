<template lang="pug">
v-app#app
  v-toolbar
    v-spacer
    v-toolbar-title.my-title Curriculum vitae
    v-spacer
  v-main
    Content
  v-footer(app)
    span.my-text &copy; Hecho por Nacimiento Martin
</template>

<script>
import Content from "@/components/Content"
export default {
  name: "App",
  components: { Content },
  data() {
    return {}
  },
}
</script>
<style>
@font-face {
  font-family: "piolon";
  src: url("~@/assets/fonts/Noir_regular.otf") format("opentype");
}
.my-title {
  font-family: "piolon";
  font-size: 30px;
}
.my-subtitle {
  font-family: "piolon";
  font-size: 20px;
}
.my-text {
  font-family: "piolon";
}
</style>