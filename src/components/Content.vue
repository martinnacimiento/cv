<template lang="pug">
v-container(fluid)
  CvCardPresentation
  v-lazy(
    v-model="sections[1]",
    :options="{ threshold: 0.5 }",
    min-height="200",
    transition="fade-transition"
  )
    section
      v-row.my-5(wrap, align="center", justify="center")
        v-col.my-3(xs="6", md="6", sm="12")
          .text-center
            .headline
              h1.display-2.mb3 Hola!
            br
            br
            .subheading
              | Tengo experiencias desarrollando en los frameworks Laravel, Express, Django, Flask, Nuxt y Vue. En los frameworks de lado del backend desarrollando un servidor API Rest y en los del lado del frontend una SPA (Single Page Application) o SSR, utilizando Axios un cliente HTTP basado en promesas para comunicarse con el servidor.
            br
            br
            .subheading
              | Sé utilizar docker para armar entornos de desarrollo y dockerizar los frameworks que anteriormente mencioné.
            br
            br
            .subheading
              | Me he recibido de Analista en Sistemas de Computación a fines del 2019 en la Universidad Nacional de Misiones, y es donde sigo estudiando actualmente la carrera de Licenciatura en Sistemas de Información.
            br
            br
            .subheading
              | Competencias: Desarrollo web, Java/PHP/JavaScript/C/Go, Laravel/Vue, Vuetify/Vuex/Vue Router/Nuxt, Axios, MySQL/PostgreSQL/, Express, Flask, Django, Inglés básico.
  v-lazy(
    v-model="sections[2]",
    :options="{ threshold: 0.5 }",
    min-height="200",
    transition="fade-transition"
  )
    CvCompetencies
  v-lazy(
    v-model="sections[3]",
    :options="{ threshold: 0.5 }",
    min-height="200",
    transition="fade-transition"
  )
    CvTitles
  v-lazy(
    v-model="sections[4]",
    :options="{ threshold: 0.5 }",
    min-height="200",
    transition="fade-transition"
  )
    section
      v-parallax(src="../assets/images/github.png", height="200")
        v-col(align="center", justify="center")
          v-btn.black.lighten-2.mt-5(
            dark,
            large,
            href="https://github.com/martinnacimiento",
            target="_blank"
          ) Seguime en GitHub

  v-lazy(
    v-model="sections[5]",
    :options="{ threshold: 0.5 }",
    min-height="200",
    transition="fade-transition"
  )
    section
      v-container(grid-list-xl)
        v-row(wrap, justify="center")
          v-col(xs="12", sm="4", offset-sm1)
            v-card(flat)
              v-card-title.layout.justify-center(primary-title)
                .headline Contacto
              v-card-text
                v-row(justify="center")
                  v-hover(#default="{ hover }")
                    v-btn(
                      icon,
                      color="black lighten-1",
                      href="https://www.linkedin.com/in/martinnacimiento",
                      target="_blank"
                    )
                      v-icon(:color="hover ? '#006192' : 'black darken-2'") mdi-linkedin
                  v-btn(
                    icon,
                    color="black lighten-1",
                    href="https://github.com/martinnacimiento",
                    target="_blank"
                  )
                    v-icon(color="black darken-2") mdi-github
                v-divider
              v-hover(#default="{ hover }")
                v-list-item
                  v-list-item-action
                    v-icon(:color="hover ? 'blue' : 'black lighten-2'") mdi-account
                  v-list-item-content
                    v-list-item-title Nacimiento Francisco Martin
              v-hover(#default="{ hover }")
                v-list-item
                  v-list-item-action
                    v-icon(:color="hover ? '#4FCE5D' : 'black lighten-2'") mdi-whatsapp
                  v-list-item-content
                    v-list-item-title +54-3764-110111
              v-hover(#default="{ hover }")
                v-list-item
                  v-list-item-action
                    v-icon(:color="hover ? '#D44638' : 'black lighten-2'") mdi-gmail
                  v-list-item-content
                    v-list-item-title martinnacimiento98@gmail.com
              v-hover(#default="{ hover }")
                v-list-item
                  v-list-item-action
                    v-icon(:color="hover ? '#EA4335' : 'black lighten-2'") mdi-map-marker
                  v-list-item-content
                    v-list-item-title Garupá, Misiones - AR
</template>

<script>
import CvCompetencies from "@/components/CvCompetencies"
import CvCardPresentation from "@/components/CvCardPresentation"
import CvTitles from "@/components/CvTitles"
export default {
  components: { CvCompetencies, CvCardPresentation, CvTitles },
  data() {
    return {
      sections: [false, false, false, false, false, false],
    }
  },
}
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
}

.box-item {
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
}
</style>