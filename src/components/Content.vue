<template lang="pug">
	v-content
		section
			v-parallax(src="../assets/images/about.jpg" height="auto")
				v-row(
					align="center"
					justify="center"
				)
					v-col(cols="12" sm="8" md="6" xs="10")
						v-card()
							v-container( 
								fill-height fluid
							)
								v-row(wrap)
									v-col(cols="12" sm="8" md="6" xs="12")
										v-img(
											src="../assets/images/martin1.jpg"
											height="100%"
										)
									v-spacer
									v-col(cols="12" sm="8" md="6" xs="12")
										v-card-text
											div
												div(class="headline")
													h1(class="display-1 mb-3") Nacimiento Francisco Martin
												div
													strong Analista en Sistemas de Computación
												div(class="pt-3")
													strong Celular:
												div +54-3764-110111
												div(class="pt-3")
													strong Email:
												div martinnacimiento98@gmail.com
												div(class="pt-3")
													strong Direccion:
												div Garupá, Misiones - Argentina
												div(class="pt-3")
													strong Fecha de nacimiento:
												div 29 de julio del 1998
							v-card-actions(class="pa-3")
								v-row(justify="center")
									v-btn(
										text
										icon
										color="black lighten-1"
										href="https://www.linkedin.com/in/nacimientomartin/"
										target="_blank"
									)
										v-icon(color="black darken-2") mdi-linkedin
									v-btn(
										text
										icon
										color="black lighten-1"
										href="https://github.com/Nacimiento98"
										target="_blank"
									)
										v-icon(color="black darken-2") mdi-github-circle
		v-lazy(
			v-model="sections[1]"
			:options="{threshold: .5}"
			min-height="200"
			transition="fade-transition"
		)
			section
				v-row(
					wrap
					class="my-5"
					align="center"
					justify="center"
				)
					v-col(xs="6" md="6" sm="12" class="my-3")
						div(class="text-center")
							div(class="headline" )
								h1(class="display-2 mb3") Hola!
							br
							br
							div(class="subheading" )
								|Tengo experiencias desarrollando en los frameworks Laravel y Vue. En Laravel desarrollando un servidor API Rest y en Vue una SPA (Single Page Application), utilizando Axios un cliente HTTP basando en promesas para comunicarse con el servidor.
							br
							br
							div(class="subheading" )
								|Se utilizar docker para armar entornos de desarrollo y dockerizar los frameworks que anteriormente mencioné.
							br
							br
							div(class="subheading" )
								|Me he recibido de Analista en Sistemas de Computación a fines del 2019 en la Universidad Nacional de Misiones, y es donde sigo estudiando actualmente la carrera de Licenciatura en Sistemas de Información.
							br
							br
							div(class="subheading" )
								|Competencias: Desarrollo web, Java/PHP/JavaScript/C, Laravel/Vue, Vuetify/Vuex/Vue Router, Axios, MySQL/PostgreSQL/, Inglés básico.
		v-lazy(
			v-model="sections[2]"
			:options="{threshold: .5}"
			min-height="200"
			transition="fade-transition"
		)
			section
				v-parallax(src="../assets/images/about.jpg" height="auto")
					v-row(
						align="center"
						justify="center"
					)
						v-col(
							v-for="competencia in competencias"
							:key="competencia.nombre"
							cols="4"
							sm="4" md="4" xs="10"
						)
							v-hover(v-slot:default="{ hover }")
								v-card(
									class="mx-auto"
									:elevation="hover ? 12 : 2"
								)
									v-img(
										:src="competencia.img"
										:lazy-src="competencia.img"
										aspect-ratio="1.23"
									)
									v-fade-transition
										v-overlay(
											v-if="hover"
											absolute
											color="#F2F2F2"
										)
											v-btn(
												:href="competencia.link"
												target="_blank"
											) {{competencia.nombre}}
		v-lazy(
			v-model="sections[3]"
			:options="{threshold: .5}"
			min-height="200"
			transition="fade-transition"
		)
			section
				v-row(
					wrap
					class="my-5"
					align="center"
					justify="center"
				)
					v-flex(xs="12")
						v-container(grid-list-xl)
							v-row(wrap align-center)
								v-col(
									v-for="titulo in titulos" :key="titulo.nombre"
									xs="12" md="3"
								)
									v-card(class="elevation-0 transparent" flat)
										v-card-text(class="text-center")
											v-icon(x-large class="purple--text") mdi-school
										v-card-title(primary-title class="layout justify-center")
											div(class="headline text-xs-center font-weight-bold") {{titulo.anios}}
										v-card-text(class="subheading")
											div
												strong {{titulo.nombre}}
											div(class="mt-2") 
												i
													strong {{titulo.universidad}}
											div(class="body-1") {{titulo.descripcion}}
		v-lazy(
			v-model="sections[4]"
			:options="{threshold: .5}"
			min-height="200"
			transition="fade-transition"
		)
			section
				v-parallax(src="../assets/images/github.png" height="600")
					v-col(
						align="center"
						justify="center"
					)
						v-btn(
							class="black lighten-2 mt-5"
							dark
							large
							href="https://github.com/Nacimiento98"
							target="_blank"
						) Seguime en GitHub
							
		v-lazy(
			v-model="sections[5]"
			:options="{threshold: .5}"
			min-height="200"
			transition="fade-transition"
		)
			section
				v-container(grid-list-xl)
					v-row(wrap justify="center")
						v-col(xs="12" sm="4" offset-sm1)
							v-card(class="elevation-0 transparent" flat)
								v-card-title(primary-title class="layout justify-center")
									div(class="headline") Contáctame
								v-card-text
									v-row(justify="center")
										v-btn(flat icon color="black lighten-1" href="https://www.linkedin.com/in/prabir-ghosh" target="_blank")
											v-icon(color="black darken-2") mdi-linkedin
										v-btn(flat icon color="black lighten-1" href="https://github.com/PRABIRSOFT" target="_blank")
											v-icon(color="black darken-2") mdi-github-circle
									v-divider
								v-list(class="transparent")
									v-list-item
										v-list-item-action
											v-icon(class="black--text text--lighten-2") mdi-account
										v-list-item-content
											v-list-item-title Nacimiento Francisco Martin
									v-list-item
										v-list-item-action
											v-icon(class="black--text text--lighten-2") mdi-whatsapp
										v-list-item-content
											v-list-item-title +54-3764-110111
									v-list-item
										v-list-item-action
											v-icon(class="black--text text--lighten-2") mdi-map-marker
										v-list-item-content
											v-list-item-title Garupá, Misiones - AR
									v-list-item
										v-list-item-action
											v-icon(class="black--text text--lighten-2" href="mailto:mymail.prabir@gmail.com" target="_blank") mdi-gmail
										v-list-item-content
											v-list-item-title martinnacimiento98@gmail.com
		Footer
</template>

<script>
import Footer from './Footer'
export default {
  data () {
	return {
		sections:[
			false, false, false, false, false, false
		],
		titulos: [
			{
				nombre: "Analista en Sistemas de Computación",
				anios: "2017-2019",
				universidad: "Universidad Nacional de Misiones",
				descripcion: "Facultad de Ciencias Exactas, Químicas y Naturales (FCQyN), Módulo Apóstoles. Pellegrini 269. Apóstoles, Misiones."
			},
			{
				nombre: "Licenciatura en Sistemas de Información",
				anios: "2017-actualidad",
				universidad: "Universidad Nacional de Misiones",
				descripcion: "Facultad de Ciencias Exactas, Químicas y Naturales (FCQyN), Módulo Apóstoles. Pellegrini 269. Apóstoles, Misiones."
			},
		],
		competencias: [
			{
				nombre:"Docker",
				descripcion: "",
				link: "https://www.docker.com/",
				img: require("../assets/images/docker.svg")
			},
			{
				nombre:"Vue",
				descripcion: "",
				link: "https://vuejs.org/",
				img: require("../assets/images/vue.svg")
			},
			{
				nombre:"Vuetify",
				descripcion: "",
				link: "https://vuetifyjs.com/en/",
				img: require("../assets/images/vuetify.svg")
			},
			{
				nombre:"Laravel",
				descripcion: "",
				link: "https://laravel.com/",
				img: require("../assets/images/laravel.svg")
			},
			{
				nombre:"MySQL",
				descripcion: "",
				link: "https://www.mysql.com/",
				img: require("../assets/images/mysql.svg")
			},
		]
	}
  },
  components: {
	Footer: Footer
  }
}
</script>