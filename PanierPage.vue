<template>


<div class="card" style="width: 18rem;">
      
      <img :src="imageSrc" alt="Accueil">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
              <span @click="increment">🛒</span>
              <span>prix: 500 FCFA</span> 
        </div>
    </div>
    
</template>
    
<script setup>
        
        
        const imageSrc = '/images/shuse.png'; // Chemin relatif depuis le dossier public
    
</script>
    
    
    
     <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
