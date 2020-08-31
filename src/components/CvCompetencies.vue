<template lang="pug">
section
  v-parallax(src="@/assets/images/background.jpg", height="auto")
    v-slide-group(center-active)
      v-slide-item(
        v-for="c in competencies",
        :key="c.nombre",
        #default="{ active, toggle}"
      )
        v-card.rounded-lg.ma-4(
          :elevation="active ? 12 : 2",
          :color="c.color ? c.color : 'white'",
          @click="toggle"
        )
          .d-flex.flex-no-wrap.justify-space-between
            div
              v-card-title.my-title {{ c.nombre }}
              v-card-subtitle 
            v-avatar.ma-3(size="125", tile)
              v-img.rounded-lg(:src="c.img", :lazy-src="c.img")
</template>
<script>
import competencies from "@/data/competencies"
export default {
  name: "CvCompetencies",
  data: () => ({}),
  computed: {
    sheets() {
      return Math.ceil(competencies.length / 3)
    },
    competencies() {
      return competencies
      // let aux = []
      // for (let i in [...Array(this.sheets).keys()]) aux[i] = []
      // let sheets = 0
      // competencies.forEach((c) => {
      //   aux[sheets].push(c)
      //   if (aux[sheets].length === 3) sheets++
      // })
      // return aux
    },
  },
}
</script>