<script setup>
import { RouterLink, RouterView } from "vue-router";
import BaseLayout from '@/layout/BaseLayout.vue'
import SideBar from "@/components/sidebar/SideBar.vue";
</script>

<template>
  <BaseLayout>
    <template #header>
      <h1>Here might be a page title</h1>
      <RouterLink to="/login">Login</RouterLink>
    </template>

    <template #sidebar>
      <SideBar />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </template>

    <template #main>
      <p>Here's some Main info</p>
    </template>
    <template #footer>
      <p>Here's some Footer info</p>
    </template>
  </BaseLayout>
  <div>

  </div>
  <div class="wrapper">
    <nav>

    </nav>
  </div>

  <RouterView />
</template>

<style scoped>

</style>
