<template>

<div class="services">
      <ServiceBox
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
        :features="service.features"
      />
    </div>


</template>

<script>
import { ref } from 'vue'
import ServiceBox from './components/ServiceBox.vue'

// Définition des données des services
const services = ref([
  {
    title: 'Service 1',
    description: 'Description du service 1.',
    features: ['Feature 1.1', 'Feature 1.2', 'Feature 1.3']
  },
  {
    title: 'Service 2',
    description: 'Description du service 2.',
    features: ['Feature 2.1', 'Feature 2.2']
  },
  {
    title: 'Service 3',
    description: 'Description du service 3.',
    features: ['Feature 3.1', 'Feature 3.2', 'Feature 3.3', 'Feature 3.4']
  }
])

</script>