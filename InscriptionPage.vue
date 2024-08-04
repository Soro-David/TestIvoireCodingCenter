<template>
    <div id="container">
        <!-- zone de connexion -->
        <h1 class="text-center">Nouveau Compte</h1>

         <!--<p v-if="errors.length">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>-->

            <form @submit.prevent="Enregistrer">
                <p> <b>Bienvenu dans le formulaire de creation de compte</b></p>
                <div class="row">
                    <div class="col-md-6">
                        <div id="Groupform">
                            <label><b>Nom </b></label>
                            <input type="text" v-model="Utilisateur.Nom" name="nom" required>
                        </div>
                        <div id="Groupform">
                            <label><b>Prénom</b></label>
                            <input type="text" v-model="Utilisateur.Prenom" name="prenom"  required>
                        </div>  
                        <div id="Groupform">
                            <label><b>E-mail</b></label>
                            <input type="email" v-model="Utilisateur.Email" name="email" >
                        </div>                      
                    </div>
                    <div class="col-md-6">
                        <div id="Groupform">
                            <label><b>Sexe</b></label>
                            <select v-model="Utilisateur.Sexe"   required>
                                <option disabled value="">Sexe</option>
                                <option value="Masculin" name=" masculin">Masculin</option>
                                <option value="Féminin" name="feminin">Féminin</option>
                            </select>
                            <div id="Groupform">
                            <label><b>Mot de passe</b></label>
                            <input type="password" v-model="Utilisateur.MotDePasse" name="motdepasse" placeholder="Entrer le mot de passe"  required>
                        </div>
                            <div id="Groupform">
                                <label><b>Mot de passe à nouveau</b></label>
                                <input type="password" v-model="Utilisateur.NMotDePasse" required>
                            </div>
                            
                        </div>
                    </div>
                </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-lg btn-danger btn-block">Enregistrer</button>
                            </div>
                    <div class="text-center">
                        <p> Vous Avez déja un Compte ?</p>
                        <router-link to="login"><button type="disabled" class="">Se connecter</button></router-link>
                </div>
            </form>
        </div>        
</template>

<script setup>
import { reactive } from 'vue';

const Utilisateur= reactive({
    Nom:"",
    Prenom:"",
    Email:"",
    Sexe:"",
    MotDePasse:"",
    NMotDePasse:"",
    
})

const Enregistrer=()=>{
    if(Utilisateur.MotDePasse != Utilisateur.NMotDePasse){
        console.log(Utilisateur)
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
    padding: 10px;
    max-width: 900px;
    min-width: 60px
}
/* Mise en formeBordure */
form {
    width: 10%;
    padding: 70px;
    margin: auto;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    min-width:   900px;
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
    background-color: rgb(238, 16, 16);
    color: #ffffff;
    border: 1px solid #8da8b3;
}
.header, .footer {
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
}

@media all and (max-width: 860px ){
    form {
    width: 90%;
    padding: 70px;
    margin: auto;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    min-width:   90px;
}

}
@media all and (max-width: 360px){
  .container{
    width: 100%;
  }
}
</style>
