import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



//importation du bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'




const app= createApp(App)


app.use(router) //enregistrer et configurer le routeur
app.mount('#app')// Monter l'appli
