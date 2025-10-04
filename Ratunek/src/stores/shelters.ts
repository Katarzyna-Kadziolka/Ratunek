import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Shelter {
  id: string
  name: string
  address: string
  distance: number // in meters
  time: number // in minutes
  capacity: number
  status: 'available' | 'limited' | 'full'
}

export type FilterType = 'shelters' | 'food' | 'water' | 'pharmacy' | 'accommodation'

export const useSheltersStore = defineStore('shelters', () => {
  const shelters = ref<Shelter[]>([
    {
      id: 'shelter-1',
      name: 'Schron Publiczny - Centrum',
      address: 'ul. Marszałkowska 15',
      distance: 250,
      time: 3,
      capacity: 120,
      status: 'available'
    },
    {
      id: 'shelter-2',
      name: 'Metro Centrum',
      address: 'Stacja metra Centrum',
      distance: 400,
      time: 5,
      capacity: 300,
      status: 'available'
    },
    {
      id: 'shelter-3',
      name: 'Szkoła Podstawowa nr 25',
      address: 'ul. Królewska 8',
      distance: 550,
      time: 7,
      capacity: 80,
      status: 'limited'
    },
    {
      id: 'shelter-4',
      name: 'Parking Podziemny - Plac Zamkowy',
      address: 'Plac Zamkowy 1',
      distance: 650,
      time: 8,
      capacity: 150,
      status: 'available'
    },
    {
      id: 'shelter-5',
      name: 'Centrum Kultury',
      address: 'ul. Nowy Świat 23',
      distance: 800,
      time: 10,
      capacity: 200,
      status: 'full'
    }
  ])

  const currentLocation = ref('Warszawa, Śródmieście')
  const gpsDetected = ref(true)
  const activeFilters = ref<Set<FilterType>>(new Set(['shelters']))

  const filteredShelters = computed(() => {
    // For now, return all shelters
    // In a real app, this would filter based on activeFilters
    return shelters.value
  })

  const nearestShelter = computed(() => {
    return shelters.value.reduce((nearest, current) => {
      return current.distance < nearest.distance ? current : nearest
    }, shelters.value[0])
  })

  function toggleFilter(filter: FilterType) {
    if (activeFilters.value.has(filter)) {
      activeFilters.value.delete(filter)
    } else {
      activeFilters.value.add(filter)
    }
  }

  function isFilterActive(filter: FilterType): boolean {
    return activeFilters.value.has(filter)
  }

  function setLocation(location: string) {
    currentLocation.value = location
  }

  function getStatusLabel(status: Shelter['status']): string {
    switch (status) {
      case 'available':
        return 'Dostępny'
      case 'limited':
        return 'Ograniczone'
      case 'full':
        return 'Pełny'
      default:
        return 'Nieznany'
    }
  }

  function getStatusColor(status: Shelter['status']): string {
    switch (status) {
      case 'available':
        return '#10b981' // green
      case 'limited':
        return '#f59e0b' // yellow/orange
      case 'full':
        return '#ef4444' // red
      default:
        return '#6b7280' // gray
    }
  }

  return {
    shelters,
    currentLocation,
    gpsDetected,
    activeFilters,
    filteredShelters,
    nearestShelter,
    toggleFilter,
    isFilterActive,
    setLocation,
    getStatusLabel,
    getStatusColor
  }
})
