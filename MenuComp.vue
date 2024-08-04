<template>    



<!-- le Menu et le le logo -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <header class="top_bar">
            <div class="top_menu--aside">
                <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <!-- un H2 sous forme de logo pour le site -->
                    <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>BaskVente</h2>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
             </div>
        </header>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div id="Menu" class="text-center">
              <div class="navbar-nav ms-auto p-4 p-lg-0">
                <!-- router-link permet de lier la page -->
                <router-link to="/"><li><a class="nav-item nav-link">Accueil</a></li></router-link>
                <router-link to=""><li><a class="nav-item nav-link">A Propos</a></li></router-link>
                <router-link to="/service"><li><a class="nav-item nav-link">Nos Service</a></li></router-link>
                <router-link to="/panier">
                    <li><a><img :src="imageSrc" alt="Accueil"></a></li>
                    <span >{{ count }}0</span> 
                </router-link>
                <router-link to="/login"><li><a class="nav-item nav-link active">Se Connecter</a></li></router-link>
                <router-link to="/contact"><li><a class="nav-item nav-link">Contact</a></li></router-link>
            </div>
            <div>
            </div>
            </div>
           
        </div>
    </nav>
    <router-view/>

</template>

<script setup>


import { count } from '../views/page/ServicePage.vue';
 

    //count.value++


    
    const imageSrc = '/images/OIP.png'; // Chemin relatif depuis le dossier public

</script>

<style scoped>


/*
le style pour l'image
width pour la largeur et height pour la hauteur et pardding pour l'espace a l'interieur
*/

 img{
    width: 50px;
    height: 40px;
    padding: auto 20px;
    
}


/* Utilise flex pour aligner les éléments horizontalement et centrer le contenu
justifier-cnter pour la position des element du menu

*/
#Menu{
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 70px;

/* Définition de la couleur de fond du corps */


}
#Menu li{
    margin: 0 30px;
}




#Menu a {
    text-decoration: none;
    color: #160606;
    font-weight: bold;
    transition: color 0.3s ease;
}


/* Définit le style des liens, incluant la couleur, la graisse de police,
 et l'effet de transition sur le survol (hover) */
#Menu a:hover {
    color: #3109e6;
}
   

</style>
