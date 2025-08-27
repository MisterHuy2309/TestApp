<template>
  <div class="champion-card">
    <img :src="image" :alt="name" class="champion-image" />
    <div class="champion-info">
      <h3>{{ name }}</h3>
      <p>Cost: {{ cost }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  image: String,
  cost: Number
})
</script>

<style scoped>
.champion-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: .5rem;
  text-align: center;
}
.champion-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>
