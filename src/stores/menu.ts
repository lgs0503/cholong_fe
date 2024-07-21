import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const isShow = ref(false)

  function toggleMenu() {
    isShow.value = !isShow.value
  }

  return { isShow, toggleMenu }
})
