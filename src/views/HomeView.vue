<script setup>
import Cards from '@/components/Cards.vue';
</script>

<template>
  <div class='cards-container'>
    <Cards
      v-for='card in 5'
    />
  </div>
</template>
