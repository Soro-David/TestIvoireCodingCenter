<template>
      <div>
            <h1 class="text-center"> Bienvenu a l'Accueil</h1> 
        <SladerComp />
      </div>
      <div>
        <PiedPage/>
      </div>
</template>

<script setup>

    import PiedPage from '@/components/PiedPage.vue'
    import SladerComp from '@/components/SladerComp.vue'

</script>


<!-- scoped" pour appliquer le style ala page seulement -->
<style scoped>
.text-center{
  background:   rgb(218, 165, 165);
}

</style>
