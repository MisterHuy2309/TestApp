<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal">
      <h2>Save / Load Team</h2>
      <textarea v-model="data" rows="5" placeholder="Paste team JSON here"></textarea>
      <div class="buttons">
        <button @click="onSave">Save</button>
        <button @click="onLoad">Load</button>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['save', 'load', 'close'])
const data = ref('')

function onSave() {
  emit('save', data.value)
}

function onLoad() {
  emit('load', data.value)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  width: 400px;
}
.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
