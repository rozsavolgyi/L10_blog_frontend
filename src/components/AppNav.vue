<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <span class="navbar-brand">BLOG</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(menuItem, index) in menuItems" :key="index">
            <router-link class="nav-link" :to="menuItem.to">{{ menuItem.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuItems = ref([
  {
    title: 'Nyitó oldal',
    to: '/'
  },
  {
    title: 'Regisztráció',
    to: '/regisztracio'
  },
  {
    title: 'Bejelentkezés',
    to: '/bejelentkezes'
  }
])
</script>

<style lang="scss" scoped></style>
