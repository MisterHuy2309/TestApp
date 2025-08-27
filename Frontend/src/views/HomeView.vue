<template>
  <div class="home-view p-4">
    <h1 class="text-2xl font-bold mb-4">Welcome to TFT Team Builder</h1>
    <p>Create your dream team and see synergies!</p>

    <router-link
      to="/builder"
      class="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Go to Team Builder
    </router-link>
  </div>
</template>

<script setup>
// Home view hiện tại chỉ cần template đơn giản
</script>

<style scoped>
.home-view {
  text-align: center;
}
</style>
