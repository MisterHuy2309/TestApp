<template>
  <div id="app">
    <!-- Navbar đơn giản -->
    <nav class="bg-gray-800 text-white p-4 flex justify-between">
      <div class="font-bold text-lg">TFT Team Builder</div>
      <div class="space-x-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/builder" class="hover:underline">Builder</router-link>
      </div>
    </nav>

    <!-- Main content -->
    <main class="p-4">
      <!-- router-view render các view (HomeView, BuilderView) -->
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 text-center mt-8">
      &copy; 2025 TFT Builder
    </footer>
  </div>
</template>

<script setup>
// Không cần import gì nhiều, router đã dùng trong main.js
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}
nav a {
  color: white;
}
</style>
