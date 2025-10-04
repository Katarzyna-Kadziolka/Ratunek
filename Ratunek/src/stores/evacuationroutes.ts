import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface EvacuationRoute {
  id: string
  name: string
  type: 'main' | 'alternative' | 'emergency'
  distance: number // in km
  time: number // in minutes
  density: 'low' | 'medium' | 'high'
  waypoints: string[]
  color: string
}

export type RouteType = 'main' | 'alternative' | 'emergency'

export const useEvacuationRoutesStore = defineStore('evacuationroutes', () => {
  const routes = ref<EvacuationRoute[]>([
    {
      id: 'route-a',
      name: 'Trasa A - Główna',
      type: 'main',
      distance: 12,
      time: 25,
      density: 'low',
      waypoints: ['Warszawa', 'Pruszków', 'Żyrardów'],
      color: '#10b981' // green
    },
    {
      id: 'route-b',
      name: 'Trasa B - Alternatywna',
      type: 'alternative',
      distance: 15,
      time: 30,
      density: 'medium',
      waypoints: ['Warszawa', 'Ożarów Maz.', 'Błonie'],
      color: '#3b82f6' // blue
    },
    {
      id: 'route-c',
      name: 'Trasa C - Awaryjna',
      type: 'emergency',
      distance: 18,
      time: 35,
      density: 'high',
      waypoints: ['Warszawa', 'Piaseczno', 'Konstancin'],
      color: '#f97316' // orange
    }
  ])

  const currentLocation = ref('Warszawa')
  const selectedRouteTypes = ref<Set<RouteType>>(new Set(['main', 'alternative', 'emergency']))

  const filteredRoutes = computed(() => {
    return routes.value.filter(route => selectedRouteTypes.value.has(route.type))
  })

  function toggleRouteType(type: RouteType) {
    if (selectedRouteTypes.value.has(type)) {
      selectedRouteTypes.value.delete(type)
    } else {
      selectedRouteTypes.value.add(type)
    }
  }

  function isRouteTypeSelected(type: RouteType): boolean {
    return selectedRouteTypes.value.has(type)
  }

  function setLocation(location: string) {
    currentLocation.value = location
  }

  function getDensityLabel(density: EvacuationRoute['density']): string {
    switch (density) {
      case 'low':
        return 'Niska gęstość'
      case 'medium':
        return 'Średnia gęstość'
      case 'high':
        return 'Wysoka gęstość'
      default:
        return 'Nieznana'
    }
  }

  function getRouteTypeLabel(type: RouteType): string {
    switch (type) {
      case 'main':
        return 'Główne'
      case 'alternative':
        return 'Alternatywne'
      case 'emergency':
        return 'Awaryjne'
      default:
        return 'Nieznany'
    }
  }

  return {
    routes,
    currentLocation,
    selectedRouteTypes,
    filteredRoutes,
    toggleRouteType,
    isRouteTypeSelected,
    setLocation,
    getDensityLabel,
    getRouteTypeLabel
  }
})
