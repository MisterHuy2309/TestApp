<template>
  <div class="champion-list">
    <h2>Champion List</h2>
    <div class="list">
      <ChampionCard
        v-for="champ in champions"
        :key="champ.id"
        :name="champ.name"
        :image="champ.image"
        :cost="champ.cost"
      />
    </div>
  </div>
</template>

<script setup>
import ChampionCard from './ChampionCard.vue'

defineProps({
  champions: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.champion-list .list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
