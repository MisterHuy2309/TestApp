<template>
  <div class="builder-view p-4">
    <h1 class="text-2xl font-bold mb-4">Team Builder</h1>

    <!-- Danh sách champion -->
    <ChampionList :champions="champions" />

    <!-- Vùng kéo-thả team -->
    <TeamCanvas>
      <ChampionCard 
        v-for="c in team" 
        :key="c.id" 
        :name="c.name" 
        :image="c.image" 
        :cost="c.cost" 
      />
    </TeamCanvas>

    <!-- Traits badges -->
    <div class="traits mt-4 flex gap-2">
      <TraitBadge 
        v-for="t in traits" 
        :key="t.name" 
        :trait="t.name" 
        :icon="t.icon" 
        :active="t.active" 
      />
    </div>

    <!-- Save/Load Modal -->
    <SaveLoadModal 
      :show="showModal"
      @save="handleSave"
      @load="handleLoad"
      @close="showModal = false"
    />
    <button 
      @click="showModal = true"
      class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Save / Load Team
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChampionList from '../components/ChampionList.vue'
import ChampionCard from '../components/ChampionCard.vue'
import TeamCanvas from '../components/TeamCanvas.vue'
import TraitBadge from '../components/TraitBadge.vue'
import SaveLoadModal from '../components/SaveLoadModal.vue'

// dữ liệu giả lập
const champions = [
  { id: 1, name: 'Aatrox', cost: 3, image: '/champions/aatrox.png' },
  { id: 2, name: 'Ahri', cost: 4, image: '/champions/ahri.png' }
]

const team = ref([])
const traits = ref([
  { name: 'Sorcerer', icon: '/traits/sorcerer.png', active: true },
  { name: 'Warrior', icon: '/traits/warrior.png', active: false }
])

const showModal = ref(false)

function handleSave(data) {
  console.log('Save team:', data)
}

function handleLoad(data) {
  console.log('Load team:', data)
}
</script>

<style scoped>
.builder-view {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
