<template>


<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/672/250/?image=10" alt="Accueil">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>



    <h1> Bienvenu a la connexion</h1>   
    <div>
    <button @click="increment"> count</button>
    {{ count }}
    <input type="text" v-mdel="nom">
    <input type="text" v-mdel="prenom" >
    <p>LE nom: {{ nom }},<br> le prenom: {{ prenom }}</p>
</div>

</template>

<script setup>
  
  import { ref} from 'vue'

const nom=ref('soro')
const prenom=ref('dddd')
const count= ref(0)

/*Utilisateur:{
  Nom:""
  Prenom:""
  Email:""
  Sexe:""
  Mot_de_passe:""
}*/

function increment(){
count.value++
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div .hello{
  background-color: bisque;  
}
</style>
