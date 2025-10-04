import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface AlarmType {
  id: string
  title: string
  duration: string
  description: string
  color: string
  actionText: string
}

export const useAlarmsStore = defineStore('alarms', () => {
  const learningMode = ref(false)

  const alarmTypes = ref<AlarmType[]>([
    {
      id: 'air-raid',
      title: 'Alarm powietrzny',
      duration: 'Ciągły dźwięk przez 3 minuty',
      description: 'Sygnalizuje bezpośrednie zagrożenie atakiem z powietrza lub zagrożenie skażeniami.',
      color: '#dc2626',
      actionText: 'Zobacz co robić'
    },
    {
      id: 'alarm-cancellation',
      title: 'Odwołanie alarmu',
      duration: 'Jednostajny dźwięk przez 1 minutę',
      description: 'Informuje o zakończeniu zagrożenia i możliwości opuszczenia schronów.',
      color: '#16a34a',
      actionText: 'Zobacz co robić'
    },
    {
      id: 'general-alarm',
      title: 'Alarm ogólny',
      duration: 'Modulowany dźwięk przez 3 minuty',
      description: 'Ostrzega przed różnymi zagrożeniami: powódź, pożar, awaria chemiczna.',
      color: '#ea580c',
      actionText: 'Zobacz co robić'
    },
    {
      id: 'siren-test',
      title: 'Próba syren',
      duration: 'Krótki sygnał przez 20 sekund',
      description: 'Regularne testowanie systemu alarmowego - brak konieczności podejmowania działań.',
      color: '#2563eb',
      actionText: 'Zobacz co robić'
    }
  ])

  function toggleLearningMode() {
    learningMode.value = !learningMode.value
  }

  return { alarmTypes, learningMode, toggleLearningMode }
})
