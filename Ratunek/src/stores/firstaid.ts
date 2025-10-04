import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface FirstAidStep {
  id: string
  title: string
  stepNumber: number
  description: string
  expanded: boolean
}

export const useFirstAidStore = defineStore('firstaid', () => {
  const cprSteps = ref<FirstAidStep[]>([
    {
      id: 'check-consciousness',
      title: 'Sprawdź przytomność',
      stepNumber: 1,
      description: 'Delikatnie potrząśnij osobą i głośno zapytaj: "Czy wszystko w porządku?". Sprawdź czy osoba reaguje.',
      expanded: false
    },
    {
      id: 'call-help',
      title: 'Wezwij pomoc',
      stepNumber: 2,
      description: 'Zadzwoń pod numer 112 lub poproś kogoś o wezwanie pomocy. Podaj dokładną lokalizację i opis sytuacji.',
      expanded: false
    },
    {
      id: 'open-airway',
      title: 'Udrożnij drogi oddechowe',
      stepNumber: 3,
      description: 'Odchyl głowę do tyłu i unieś brodę, aby udrożnić drogi oddechowe. Sprawdź czy osoba oddycha.',
      expanded: false
    },
    {
      id: 'cpr-cycle',
      title: '30 uciśnięć, 2 wdechy',
      stepNumber: 4,
      description: 'Wykonaj 30 uciśnięć klatki piersiowej (głębokość 5-6 cm) i 2 oddechy ratownicze. Kontynuuj cykl do przyjazdu pomocy.',
      expanded: false
    }
  ])

  const metronomeActive = ref(false)
  const metronomeInterval = ref<number | null>(null)

  function toggleStep(id: string) {
    const step = cprSteps.value.find(s => s.id === id)
    if (step) {
      step.expanded = !step.expanded
    }
  }

  function startMetronome() {
    metronomeActive.value = true
    // In a real app, this would play a sound at 100-120 BPM
    // For now, we just set the active state
  }

  function stopMetronome() {
    metronomeActive.value = false
    if (metronomeInterval.value) {
      clearInterval(metronomeInterval.value)
      metronomeInterval.value = null
    }
  }

  function toggleMetronome() {
    if (metronomeActive.value) {
      stopMetronome()
    } else {
      startMetronome()
    }
  }

  return {
    cprSteps,
    metronomeActive,
    toggleStep,
    startMetronome,
    stopMetronome,
    toggleMetronome
  }
})
