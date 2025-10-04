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
      description: '3 litry na osobę na 3 dni. Niezbędne do przeżycia.',
      checked: false
    },
    {
      id: 'food',
      icon: '🥫',
      title: 'Jedzenie',
      description: 'Żywność niepsująca się na 3 dni. Konserwy, batony energetyczne.',
      checked: false
    },
    {
      id: 'firstaid',
      icon: '💼',
      title: 'Apteczka',
      description: 'Podstawowe artykuły medyczne, bandaże, leki.',
      checked: false
    },
    {
      id: 'flashlight',
      icon: '💡',
      title: 'Latarka',
      description: 'Latarka LED z dodatkowymi bateriami.',
      checked: false
    },
    {
      id: 'radio',
      icon: '📻',
      title: 'Radio',
      description: 'Radio zasilane bateryjnie lub ręczną korbką do odbioru informacji alarmowych.',
      checked: false
    },
    {
      id: 'documents',
      icon: '📄',
      title: 'Dokumenty',
      description: 'Kopie dokumentów tożsamości, ubezpieczenia, wyciągów bankowych w wodoodpornym pojemniku.',
      checked: false
    },
    {
      id: 'cash',
      icon: '💵',
      title: 'Gotówka',
      description: 'Małe banknoty i monety na zakupy w nagłych wypadkach.',
      checked: false
    },
    {
      id: 'clothing',
      icon: '👕',
      title: 'Ubrania',
      description: 'Zmiana ubrania, odzież przeciwdeszczowa, solidne obuwie.',
      checked: false
    },
    {
      id: 'hygiene',
      icon: '🧴',
      title: 'Higiena',
      description: 'Szczoteczka do zębów, mydło, papier toaletowy, artykuły higieniczne dla kobiet.',
      checked: false
    },
    {
      id: 'tools',
      icon: '🔧',
      title: 'Narzędzia',
      description: 'Narzędzie wielofunkcyjne, taśma klejąca, folia plastikowa, zapałki.',
      checked: false
    },
    {
      id: 'charger',
      icon: '🔋',
      title: 'Ładowarka',
      description: 'Przenośna ładowarka do telefonu lub power bank.',
      checked: false
    },
    {
      id: 'blanket',
      icon: '🛏️',
      title: 'Koc',
      description: 'Koc ratunkowy lub śpiwór zapewniający ciepło.',
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
