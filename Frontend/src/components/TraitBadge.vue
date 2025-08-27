<template>
  <div class="trait-badge" :class="{ active: active }">
    <img :src="icon" :alt="trait" class="trait-icon" />
    <span>{{ trait }}</span>
  </div>
</template>

<script setup>
defineProps({
  trait: String,
  icon: String,
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.trait-badge {
  display: flex;
  align-items: center;
  gap: .3rem;
  padding: .3rem .6rem;
  border: 1px solid #aaa;
  border-radius: 12px;
}
.trait-badge.active {
  background-color: gold;
  border-color: orange;
}
.trait-icon {
  width: 20px;
  height: 20px;
}
</style>
