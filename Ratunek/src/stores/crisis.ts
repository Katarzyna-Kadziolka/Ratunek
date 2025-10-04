import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type CrisisType = 'accident' | 'medical-emergency' | 'fire' | 'other'

export interface HelpRequest {
  id: string
  type: CrisisType
  title: string
  location: string
  description: string
  distance: number // in meters
  time: string
  requester: string
}

export const useCrisisStore = defineStore('crisis', () => {
  const activeRequests = ref<HelpRequest[]>([
    {
      id: 'request-1',
      type: 'accident',
      title: 'Wypadek samochodowy',
      location: 'ul. Krakowskiej',
      description: 'Potrzebuję pomocy przy wypadku na ul. Krakowskiej. Nie mogę wyjść z samochodu.',
      distance: 80,
      time: '2 min temu',
      requester: 'Anonymous'
    },
    {
      id: 'request-2',
      type: 'medical-emergency',
      title: 'Nagły wypadek medyczny',
      location: 'ul. Krakowskiej',
      description: 'Starszy mężczyzna zemdlał w parku. Potrzebuję kogoś z doświadczeniem w pierwszej pomocy.',
      distance: 25,
      time: '5 min temu',
      requester: 'Anonymous'
    }
  ])

  const userLocation = ref('Warszawa, Śródmieście')
  const searchRadius = ref(100) // in km

  const requestsInRadius = computed(() => {
    const radiusMeters = searchRadius.value * 1000
    return activeRequests.value.filter(request => request.distance <= radiusMeters)
  })

  function getCrisisTypeLabel(type: CrisisType): string {
    switch (type) {
      case 'accident':
        return 'Wypadek'
      case 'medical-emergency':
        return 'Nagły wypadek'
      case 'fire':
        return 'Pożar'
      case 'other':
        return 'Inne'
      default:
        return 'Nieznany'
    }
  }

  function getCrisisTypeColor(type: CrisisType): string {
    switch (type) {
      case 'accident':
        return '#ea580c' // orange
      case 'medical-emergency':
        return '#3b82f6' // blue
      case 'fire':
        return '#9333ea' // purple
      case 'other':
        return '#10b981' // green
      default:
        return '#6b7280' // gray
    }
  }

  function getCrisisTypeIcon(type: CrisisType): string {
    switch (type) {
      case 'accident':
        return '🚗'
      case 'medical-emergency':
        return '💙'
      case 'fire':
        return '🔥'
      case 'other':
        return '🌿'
      default:
        return '❓'
    }
  }

  function sendHelpRequest(type: CrisisType, description: string) {
    // In a real app, this would send the request to a server
    console.log('Sending help request:', type, description)
  }

  function offerHelp(requestId: string) {
    // In a real app, this would notify the requester
    console.log('Offering help for request:', requestId)
  }

  function callEmergency(requestId: string) {
    // In a real app, this would initiate an emergency call
    console.log('Calling emergency for request:', requestId)
  }

  return {
    activeRequests,
    userLocation,
    searchRadius,
    requestsInRadius,
    getCrisisTypeLabel,
    getCrisisTypeColor,
    getCrisisTypeIcon,
    sendHelpRequest,
    offerHelp,
    callEmergency
  }
})
