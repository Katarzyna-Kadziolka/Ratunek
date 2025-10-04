import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type AlertPriority = 'highest' | 'medium' | 'low'
export type FilterType = 'all' | 'my-region' | '24h'

export interface RCBAlert {
  id: string
  priority: AlertPriority
  title: string
  location: string
  description: string
  time: string
  category: string
  date: Date
}

export const useRCBAlertsStore = defineStore('rcbalerts', () => {
  const alerts = ref<RCBAlert[]>([
    {
      id: 'alert-1',
      priority: 'highest',
      title: 'Ostrzeżenie meteorologiczne - silny wiatr',
      location: 'Warszawa',
      description: 'Prognozowane są bardzo silne porywy wiatru do 120 km/h. Zaleca się pozostanie w domach i unikanie...',
      time: '12:34',
      category: 'weather',
      date: new Date()
    },
    {
      id: 'alert-2',
      priority: 'medium',
      title: 'Ostrzeżenie przed oblodzeniem',
      location: 'Kraków, Małopolskie',
      description: 'Prognozowane są opady marznące powodujące gołoledź na drogach i chodnikach.',
      time: '11:20',
      category: 'weather',
      date: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
    },
    {
      id: 'alert-3',
      priority: 'low',
      title: 'Test systemu ostrzegania',
      location: 'Cała Polska',
      description: 'Test miesięczny systemu Cell Broadcast. Nie wymaga żadnych działań.',
      time: '10:45',
      category: 'test',
      date: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      id: 'alert-4',
      priority: 'highest',
      title: 'Ostrzeżenie przed burzami',
      location: 'Gdańsk, Pomorskie',
      description: 'Silne burze z gradem i porywistym wiatrem. Możliwe podtopienia.',
      time: 'Wczoraj',
      category: 'weather',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    }
  ])

  const activeFilter = ref<FilterType>('all')
  const userRegion = ref('Warszawa')

  const filteredAlerts = computed(() => {
    const now = new Date()
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

    switch (activeFilter.value) {
      case 'my-region':
        return alerts.value.filter(alert =>
          alert.location.includes(userRegion.value)
        )
      case '24h':
        return alerts.value.filter(alert =>
          alert.date >= twentyFourHoursAgo
        )
      default:
        return alerts.value
    }
  })

  const latestAlert = computed(() => {
    if (alerts.value.length === 0) return null
    return alerts.value[0]
  })

  function setFilter(filter: FilterType) {
    activeFilter.value = filter
  }

  function getPriorityLabel(priority: AlertPriority): string {
    switch (priority) {
      case 'highest':
        return 'ALERT NAJWYŻSZY'
      case 'medium':
        return 'ALERT ŚREDNI'
      case 'low':
        return 'ALERT NISKI'
      default:
        return 'ALERT'
    }
  }

  function getPriorityColor(priority: AlertPriority): string {
    switch (priority) {
      case 'highest':
        return '#dc2626' // red
      case 'medium':
        return '#ea580c' // orange
      case 'low':
        return '#16a34a' // green
      default:
        return '#6b7280' // gray
    }
  }

  function getFilterLabel(filter: FilterType): string {
    switch (filter) {
      case 'all':
        return 'Wszystkie'
      case 'my-region':
        return 'Mój region'
      case '24h':
        return '24h'
      default:
        return 'Wszystkie'
    }
  }

  return {
    alerts,
    activeFilter,
    userRegion,
    filteredAlerts,
    latestAlert,
    setFilter,
    getPriorityLabel,
    getPriorityColor,
    getFilterLabel
  }
})
