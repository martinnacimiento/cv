<template lang="pug">
section
  v-parallax(src="@/assets/images/background.jpg", height="auto")
    v-row(align="center", justify="center")
      v-col(cols="12", sm="8", md="6", xs="10")
        v-card.rounded-lg.mx-auto(:elevation="12")
          v-container(fill-height, fluid)
            v-row(wrap)
              v-col(cols="12", sm="8", md="6", xs="12")
                v-img.rounded-lg(
                  src="../assets/images/martin1.jpg",
                  height="100%"
                )
              v-spacer
              v-col(cols="12", sm="8", md="6", xs="12")
                v-card-text
                  .box
                    .my-title.mb-3 Nacimiento Francisco Martin
                    .my-subtitle Analista en Sistemas de Computación
                    .py-4
                  v-divider
                  v-list
                    v-hover(#default="{ hover }")
                      v-list-item
                        v-list-item-action
                          v-icon(:color="hover ? 'blue' : 'black lighten-2'") mdi-account
                        v-list-item-content
                          v-list-item-title 22 años
                    v-hover(#default="{ hover }")
                      v-list-item
                        v-list-item-action
                          v-icon(
                            :color="hover ? '#4FCE5D' : 'black lighten-2'"
                          ) mdi-whatsapp
                        v-list-item-content
                          v-list-item-title +54-3764-110111
                    v-hover(#default="{ hover }")
                      v-list-item
                        v-list-item-action
                          v-icon(
                            :color="hover ? '#D44638' : 'black lighten-2'"
                          ) mdi-gmail
                        v-list-item-content
                          v-list-item-title martinnacimiento98@gmail.com
                    v-hover(#default="{ hover }")
                      v-list-item
                        v-list-item-action
                          v-icon(
                            :color="hover ? '#EA4335' : 'black lighten-2'"
                          ) mdi-map-marker
                        v-list-item-content
                          v-list-item-title Garupá, Misiones - AR
          v-card-actions.ma-3
            v-row(justify="center")
              v-hover(#default="{ hover }")
                v-btn(
                  text,
                  icon,
                  color="black lighten-1",
                  href="https://www.linkedin.com/in/martinnacimiento/",
                  target="_blank"
                )
                  v-icon(:color="hover ? '#006192' : 'black darken-2'") mdi-linkedin
              v-btn(
                text,
                icon,
                color="black lighten-1",
                href="https://github.com/martinnacimiento",
                target="_blank"
              )
                v-icon(color="black darken-2") mdi-github
</template>