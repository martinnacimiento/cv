<template lang="pug">
section
  v-row(justify-center)
    v-col(v-for="t in titles", :key="t.nombre", xs="6", md="6")
      v-card(outlined)
        v-list-item
          v-list-item-avatar
            v-icon(x-large :color="t.complete === 100? '#D9AF62' :''") mdi-trophy-award
          v-list-item-content
            v-tooltip(bottom)
              template(#activator="{on}")
                v-list-item-title.headline(v-on="on") {{ t.nombre }}
              span {{ t.nombre }}
            v-list-item-subtitle {{ t.universidad }}
        v-card-title.layout.justify-center(primary-title)
          .my-title {{ t.anios }}
        v-card-text.subheading {{ t.descripcion }}
        v-card-actions
          v-progress-linear(
            :color="t.complete === 100? '#D9AF62' :'blue'",
            height="20",
            stream,
            :value="t.complete",
            buffer-value="2"
          )
            template(v-slot="{ value }")
              strong {{ Math.ceil(value) }}%
</template>
<script>
import titles from "@/data/titles"
export default {
  computed: {
    titles() {
      return titles
    },
  },
}
</script>