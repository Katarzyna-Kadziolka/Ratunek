import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface BackpackItem {
  id: string
  icon: string
  title: string
  description: string
  checked: boolean
}

export const useBackpackStore = defineStore('backpack', () => {
  const items = ref<BackpackItem[]>([
    {
      id: 'water',
      icon: '💧',
      title: 'Woda',
      description: '3 liters per person for 3 days. Essential for survival.',
      checked: false
    },
    {
      id: 'food',
      icon: '🥫',
      title: 'Jedzenie',
      description: 'Non-perishable food for 3 days. Canned goods, energy bars.',
      checked: false
    },
    {
      id: 'firstaid',
      icon: '💼',
      title: 'Apteczka',
      description: 'Basic medical supplies, bandages, medications.',
      checked: false
    },
    {
      id: 'flashlight',
      icon: '💡',
      title: 'Latarka',
      description: 'LED flashlight with extra batteries.',
      checked: false
    },
    {
      id: 'radio',
      icon: '📻',
      title: 'Radio',
      description: 'Battery-powered or hand-crank radio for emergency information.',
      checked: false
    },
    {
      id: 'documents',
      icon: '📄',
      title: 'Dokumenty',
      description: 'Copies of ID, insurance, bank records in waterproof container.',
      checked: false
    },
    {
      id: 'cash',
      icon: '💵',
      title: 'Gotówka',
      description: 'Small bills and coins for emergency purchases.',
      checked: false
    },
    {
      id: 'clothing',
      icon: '👕',
      title: 'Ubrania',
      description: 'Change of clothes, rain gear, sturdy shoes.',
      checked: false
    },
    {
      id: 'hygiene',
      icon: '🧴',
      title: 'Higiena',
      description: 'Toothbrush, soap, toilet paper, feminine supplies.',
      checked: false
    },
    {
      id: 'tools',
      icon: '🔧',
      title: 'Narzędzia',
      description: 'Multi-tool, duct tape, plastic sheeting, matches.',
      checked: false
    },
    {
      id: 'charger',
      icon: '🔋',
      title: 'Ładowarka',
      description: 'Portable phone charger or power bank.',
      checked: false
    },
    {
      id: 'blanket',
      icon: '🛏️',
      title: 'Koc',
      description: 'Emergency blanket or sleeping bag for warmth.',
      checked: false
    }
  ])

  const checkedCount = computed(() => {
    return items.value.filter(item => item.checked).length
  })

  const totalCount = computed(() => {
    return items.value.length
  })

  const progress = computed(() => {
    return `${checkedCount.value}/${totalCount.value}`
  })

  function toggleItem(id: string) {
    const item = items.value.find(i => i.id === id)
    if (item) {
      item.checked = !item.checked
    }
  }

  return { items, checkedCount, totalCount, progress, toggleItem }
})
