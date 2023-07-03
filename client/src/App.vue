<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

const token = localStorage.getItem("token");
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <RouterLink class="navbar-brand" to="/">Home</RouterLink>
      <div v-if="token">
        <RouterLink class="navbar-brand" to="/notes">Notes</RouterLink>
      </div>
      <div class="navbar-nav ml-auto">
        <div v-if="token">
          <button @click="useAuthStore().handleLogout" class="btn btn-outline-dark">Logout</button>
        </div>
        <div v-else>
          <RouterLink to="/login" class="btn btn-outline-dark">Login</RouterLink>
          <RouterLink to="/register" class="btn btn-outline-dark">Register</RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>