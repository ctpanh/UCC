<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

const token = localStorage.getItem("token");
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav class="p-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <div v-if="token"> 
          <RouterLink to="/notes">Notes</RouterLink>
          <button @click="useAuthStore().handleLogout">Logout</button>
        </div>
      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>