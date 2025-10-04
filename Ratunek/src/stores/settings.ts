import { ref } from 'vue'
import { defineStore } from 'pinia'

export type NotificationFrequency = 'immediate' | 'hourly' | 'daily'
export type Language = 'pl' | 'en'

export const useSettingsStore = defineStore('settings', () => {
  // Notification settings
  const crisisAlertsEnabled = ref(true)
  const weatherAlertsEnabled = ref(true)
  const systemTestsEnabled = ref(false)
  const notificationFrequency = ref<NotificationFrequency>('immediate')

  // Language settings
  const language = ref<Language>('pl')
  const useSystemLanguage = ref(true)

  // Location settings
  const defaultCity = ref('Warszawa')
  const autoLocationEnabled = ref(true)

  function toggleCrisisAlerts() {
    crisisAlertsEnabled.value = !crisisAlertsEnabled.value
  }

  function toggleWeatherAlerts() {
    weatherAlertsEnabled.value = !weatherAlertsEnabled.value
  }

  function toggleSystemTests() {
    systemTestsEnabled.value = !systemTestsEnabled.value
  }

  function toggleAutoLocation() {
    autoLocationEnabled.value = !autoLocationEnabled.value
  }

  function setNotificationFrequency(frequency: NotificationFrequency) {
    notificationFrequency.value = frequency
  }

  function setLanguage(lang: Language) {
    language.value = lang
  }

  function setDefaultCity(city: string) {
    defaultCity.value = city
  }

  function getNotificationFrequencyLabel(frequency: NotificationFrequency): string {
    switch (frequency) {
      case 'immediate':
        return 'Natychmiastowe'
      case 'hourly':
        return 'Co godzinę'
      case 'daily':
        return 'Raz dziennie'
      default:
        return 'Natychmiastowe'
    }
  }

  function getLanguageLabel(lang: Language): string {
    switch (lang) {
      case 'pl':
        return 'Polski'
      case 'en':
        return 'English'
      default:
        return 'Polski'
    }
  }

  return {
    crisisAlertsEnabled,
    weatherAlertsEnabled,
    systemTestsEnabled,
    notificationFrequency,
    language,
    useSystemLanguage,
    defaultCity,
    autoLocationEnabled,
    toggleCrisisAlerts,
    toggleWeatherAlerts,
    toggleSystemTests,
    toggleAutoLocation,
    setNotificationFrequency,
    setLanguage,
    setDefaultCity,
    getNotificationFrequencyLabel,
    getLanguageLabel
  }
})
