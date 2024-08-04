<template>
    <div class="card" style="width: 18rem;">
      <img :src="imageSrc" alt="Accueil">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <button @click="increment">🛒</button>
              <span>prix: 5500 FCFA</span> 

              {{count}}
        </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img :src="imageSourc" alt="Accueil">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <button @click="increment">🛒</button>
              <span>prix: 2500 FCFA</span> 
        </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img :src="imageSrc" alt="Accueil">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <button @click="increment">🛒</button>
              <span>prix: 500 FCFA</span> 
        </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img :src="imageSrc" alt="Accueil">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
              <button @click="increment">🛒</button>
              <span>prix: 500 FCFA</span> 
              
        </div>
    </div>

    <div class="service-box">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <ul>
          <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
        </ul>
    </div>
</template>
    
<script setup>
    import { ref} from 'vue'
    
    
      const count= ref(0)
    
          function increment(){
            count.value++
         }
const imageSrc = '/images/tshuse.png'; // Chemin relatif depuis le dossier public
const imageSourc = '/images/shuse.png'
    
</script>
    
    
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
    