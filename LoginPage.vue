<template>

<main class="content">
<div class="container">
      <div class="col-12 col-md-6">
        <form>
            <h1 class="text-center">Connexion</h1>
            <span></span>
            <div class="row">
                <div class="col-md-12">
                    <label for="NomUtilisateur"><b>Nom d'utilisateur</b></label>
                    <input type="text" placeholder="Entrer le nom d'utilisateur" v-model="User.Nom" required>
                    <label for="MotDePasse"><b>Mot de passe</b></label>
                    <input type="password" placeholder="Entrer le mot de passe" v-model="User.MotDePasse" required>
                </div>
            </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-lg btn-danger btn-block" @click="Enregistrer">Enregistrer</button>
                </div>
                <div class="text-center">
                        <p> Vous Avez un Compte ?</p>
                        <router-link to="inscription"><button type="disabled" class="">Inscrivez-vous</button></router-link>
                </div>
        </form>
      </div>
    </div>
</main>
</template>


<script setup>

import { reactive } from 'vue';

const User= reactive({
    Nom:"",
    MotDePasse:""
}
)

const Enregistrer=()=>{
    if(User.Nom==""){
        alert('vide')
    }
}





</script>

<style scoped>
select,
input[type=password],
input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 10px;
}

body {
    background: #67BE4B;
    
}

.container {

    width: px;
    margin:top 300px;
    padding: 35px;
    max-width: 900px;
    
}
/* Mise en formeBordure */
form {
    width: 100%;
    padding: 70px;
    margin: auto;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    min-width:   700px;
}

.container h1 {
    width: 38%;
    margin: 10px;
    padding-bottom: 10px;
}

/* espacement des input */
input[type=text],
input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button[type=disabled]{
    width: 70%;
    padding: 8px 10px;
    margin: 8px 5px;
    border: 5px;
    background-color: #93a594;
    text-align: center;
}

/* mettre du style sur les bouton */
button[type=submit] {
    background-color: #099110;
    color: white;
    padding: 8px 10px;
    margin: 8px 0;
    border: 2px;
    cursor: pointer;
    width: 70%;
    border-radius: 10px;
    
}

button[type=submit]:hover {
    background-color: rgb(253, 9, 9);
    color: #ffffff;
    border: 1px solid #8da8b3;
}
.header, .footer {
  background-color: #333;
  color: #fff;
  padding: 1em;

}

@media all and (max-width: 760px ){
    form {
    width: 90%;
    padding: 70px;
    margin: auto;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    min-width:   85px;
}

}




</style>