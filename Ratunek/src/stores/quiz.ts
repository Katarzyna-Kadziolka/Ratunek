import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface QuizQuestion {
  id: string
  item: string
  correctAnswer: 'take' | 'leave'
}

export type QuizState = 'idle' | 'active' | 'feedback' | 'completed'

export const useQuizStore = defineStore('quiz', () => {
  const questions = ref<QuizQuestion[]>([
    {
      id: 'water',
      item: 'Woda',
      correctAnswer: 'take'
    },
    {
      id: 'book',
      item: 'Książka',
      correctAnswer: 'leave'
    },
    {
      id: 'firstaid',
      item: 'Apteczka',
      correctAnswer: 'take'
    },
    {
      id: 'boardgame',
      item: 'Gra planszowa',
      correctAnswer: 'leave'
    },
    {
      id: 'flashlight',
      item: 'Latarka',
      correctAnswer: 'take'
    },
    {
      id: 'perfume',
      item: 'Perfumy',
      correctAnswer: 'leave'
    },
    {
      id: 'radio',
      item: 'Radio',
      correctAnswer: 'take'
    },
    {
      id: 'tv',
      item: 'Telewizor',
      correctAnswer: 'leave'
    }
  ])

  const currentQuestionIndex = ref(0)
  const score = ref(0)
  const quizState = ref<QuizState>('idle')
  const lastAnswerCorrect = ref(false)

  const currentQuestion = computed(() => {
    if (currentQuestionIndex.value < questions.value.length) {
      return questions.value[currentQuestionIndex.value]
    }
    return null
  })

  const totalQuestions = computed(() => questions.value.length)

  const questionNumber = computed(() => currentQuestionIndex.value + 1)

  function startQuiz() {
    currentQuestionIndex.value = 0
    score.value = 0
    quizState.value = 'active'
    lastAnswerCorrect.value = false
  }

  function answerQuestion(answer: 'take' | 'leave') {
    if (!currentQuestion.value || quizState.value !== 'active') {
      return
    }

    const correct = answer === currentQuestion.value.correctAnswer
    lastAnswerCorrect.value = correct

    if (correct) {
      score.value++
    }

    quizState.value = 'feedback'
  }

  function nextQuestion() {
    currentQuestionIndex.value++

    if (currentQuestionIndex.value >= questions.value.length) {
      quizState.value = 'completed'
    } else {
      quizState.value = 'active'
    }
  }

  function resetQuiz() {
    currentQuestionIndex.value = 0
    score.value = 0
    quizState.value = 'idle'
    lastAnswerCorrect.value = false
  }

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    score,
    quizState,
    lastAnswerCorrect,
    totalQuestions,
    questionNumber,
    startQuiz,
    answerQuestion,
    nextQuestion,
    resetQuiz
  }
})
