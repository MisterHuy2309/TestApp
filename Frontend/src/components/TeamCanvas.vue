<template>
  <div class="team-canvas">
    <h2>Team Canvas</h2>
    <div class="grid">
      <slot />
    </div>
  </div>
</template>

<script setup>
// sau này bạn có thể dùng vue-dnd hoặc vue-draggable để kéo thả
</script>

<style scoped>
.team-canvas {
  border: 2px dashed #888;
  padding: 1rem;
  min-height: 200px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}
</style>
