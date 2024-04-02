import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const searchTypeId = ref<string>('')
  const changeSearchTypeId = (id: string) => {
    searchTypeId.value = id
  }

  return { searchTypeId, changeSearchTypeId }
})
