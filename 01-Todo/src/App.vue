<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/add" class="nav-link">New Todo</RouterLink>
    </nav>
    <RouterView />
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 1rem 2rem;
  background: #1e40af;
  border-bottom: 1px solid #60a5fa;
  display: flex;
  justify-content: space-between;
}
nav {
  .nav-link {
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    margin-right: 1rem;
    &:hover {
      background: #60a5fa;
    }
  }
}
</style>
