import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify"

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify()
  nuxtApp.vueApp.use(vuetify)
})
