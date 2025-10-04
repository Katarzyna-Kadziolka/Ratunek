import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface EmergencyNumber {
  number: string
  label: string
  icon: 'phone' | 'ambulance'
}

export const useSOSoundStore = defineStore('sosound', () => {
  const soundActive = ref(false)
  const gpsLocationSent = ref(false)
  const currentLocation = ref('Wykrywanie lokalizacji...')
  const locationDetected = ref(false)

  const emergencyNumbers = ref<EmergencyNumber[]>([
    {
      number: '112',
      label: 'Numer alarmowy',
      icon: 'phone'
    },
    {
      number: '999',
      label: 'Pogotowie',
      icon: 'ambulance'
    }
  ])

  function activateSOSound() {
    soundActive.value = true
    // In a real app, this would play SOS sound
    console.log('SOS sound activated')
  }

  function deactivateSOSound() {
    soundActive.value = false
    console.log('SOS sound deactivated')
  }

  function toggleSOSound() {
    if (soundActive.value) {
      deactivateSOSound()
    } else {
      activateSOSound()
    }
  }

  function sendGPSLocation() {
    gpsLocationSent.value = true
    // In a real app, this would send GPS coordinates to emergency services
    console.log('GPS location sent to emergency services')
  }

  function detectLocation() {
    locationDetected.value = true
    currentLocation.value = 'Warszawa, Śródmieście'
    // In a real app, this would use browser geolocation API
  }

  return {
    soundActive,
    gpsLocationSent,
    currentLocation,
    locationDetected,
    emergencyNumbers,
    activateSOSound,
    deactivateSOSound,
    toggleSOSound,
    sendGPSLocation,
    detectLocation
  }
})
