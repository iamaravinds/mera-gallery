<script setup>
import { RouterLink, RouterView } from "vue-router";
import BaseLayout from '@/layout/BaseLayout.vue'
import SideBar from "@/components/sidebar/SideBar.vue";
import HeadBar from "@/components/headbar/HeadBar.vue";
</script>

<template>
  <BaseLayout>
    <template #header>
      <HeadBar />
    </template>

    <template #sidebar>
      <SideBar />
    </template>

    <template #main>
      <RouterView />
    </template>
  </BaseLayout>
  <div>

  </div>
  <div class="wrapper">
    <nav>

    </nav>
  </div>

  
</template>

<style scoped>

</style>
