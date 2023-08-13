<script setup lang="ts"></script>

<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <nav>
      <router-link to="/people">
        People
      </router-link>&nbsp;&nbsp;
      <router-link to="/favourites">
        Favourites
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}

nav {
  margin-top: 20px;
}
</style>
