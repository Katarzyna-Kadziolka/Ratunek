<script setup lang="ts">
import { ref } from 'vue'
import { useBackpackStore } from '@/stores/backpack'
import { useQuizStore } from '@/stores/quiz'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const backpackStore = useBackpackStore()
const quizStore = useQuizStore()
const isSideMenuOpen = ref(false)
</script>

<template>
  <div class="emergency-backpack-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Plecak ewakuacyjny"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Emergency Backpack Info Card -->
      <div class="info-card">
        <div class="info-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div class="info-card-content">
          <h2 class="info-card-title">Plecak ewakuacyjny</h2>
          <p class="info-card-subtitle">Niezbędne przedmioty na wypadek sytuacji awaryjnych</p>
          <p class="info-card-description">
            Przygotuj plecak awaryjny z niezbędnymi przedmiotami, które pomogą Ci przetrwać 72 godziny w sytuacji kryzysowej.
          </p>
        </div>
        <div class="progress-indicator">
          <span class="progress-label">Postęp</span>
          <span class="progress-value">{{ backpackStore.progress }}</span>
        </div>
      </div>

      <!-- Checklist Items -->
      <div class="checklist">
        <div
          v-for="item in backpackStore.items"
          :key="item.id"
          class="checklist-item"
        >
          <input
            type="checkbox"
            :id="item.id"
            :checked="item.checked"
            @change="backpackStore.toggleItem(item.id)"
            class="checkbox"
          />
          <label :for="item.id" class="item-content">
            <div class="item-icon">{{ item.icon }}</div>
            <div class="item-text">
              <h3 class="item-title">{{ item.title }}</h3>
              <p class="item-description">{{ item.description }}</p>
            </div>
          </label>
        </div>
      </div>

      <!-- Check Knowledge Button -->
      <button class="check-knowledge-button" @click="quizStore.startQuiz()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Sprawdź swoją wiedzę
      </button>
    </main>

    <!-- Quiz Modal -->
    <div v-if="quizStore.quizState !== 'idle'" class="quiz-overlay" @click.self="quizStore.resetQuiz()">
      <!-- Question State -->
      <div v-if="quizStore.quizState === 'active' && quizStore.currentQuestion" class="quiz-modal">
        <div class="quiz-progress">Pytanie {{ quizStore.questionNumber }}/{{ quizStore.totalQuestions }}</div>
        <h2 class="quiz-item-name">{{ quizStore.currentQuestion.item }}</h2>
        <p class="quiz-question">Czy ten przedmiot jest niezbędny w plecaku ewakuacyjnym?</p>
        <div class="quiz-buttons">
          <button class="quiz-button quiz-button-take" @click="quizStore.answerQuestion('take')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Zabieram
          </button>
          <button class="quiz-button quiz-button-leave" @click="quizStore.answerQuestion('leave')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
            Zostawiam
          </button>
        </div>
      </div>

      <!-- Feedback State - Correct Answer -->
      <div v-if="quizStore.quizState === 'feedback' && quizStore.lastAnswerCorrect" class="quiz-modal feedback-modal">
        <div class="feedback-icon feedback-icon-success">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <h2 class="feedback-title feedback-title-success">Dobrze!</h2>
        <p class="feedback-text">Niezbędne do przetrwania</p>
        <button class="next-question-button" @click="quizStore.nextQuestion()">
          Następne pytanie
        </button>
      </div>

      <!-- Feedback State - Incorrect Answer -->
      <div v-if="quizStore.quizState === 'feedback' && !quizStore.lastAnswerCorrect" class="quiz-modal feedback-modal">
        <div class="feedback-icon feedback-icon-error">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </div>
        <h2 class="feedback-title feedback-title-error">Niepoprawnie</h2>
        <p class="feedback-text" v-if="quizStore.currentQuestion?.correctAnswer === 'take'">Jeste niezbędne do przetrwania</p>
        <p class="feedback-text" v-else>Nie jest niezbędne do przetrwania</p>
        <button class="next-question-button" @click="quizStore.nextQuestion()">
          Następne pytanie
        </button>
      </div>

      <!-- Completion State -->
      <div v-if="quizStore.quizState === 'completed'" class="quiz-modal completion-modal">
        <div class="completion-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h2 class="completion-title">Quiz zakończony!</h2>
        <p class="completion-score">Twój wynik: {{ quizStore.score }}/{{ quizStore.totalQuestions }}</p>
        <button class="restart-quiz-button" @click="quizStore.resetQuiz()">
          Zamknij
        </button>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<style scoped>
.emergency-backpack-view {
  min-height: 100vh;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
}


/* Main Content */
.main-content {
  flex: 1;
  padding: 20px;
  padding-bottom: 100px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

/* Info Card */
.info-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  position: relative;
}

.info-card-icon {
  width: 56px;
  height: 56px;
  background-color: #2c3e82;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 16px;
}

.info-card-title {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.info-card-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 12px 0;
}

.info-card-description {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

.progress-indicator {
  position: absolute;
  top: 24px;
  right: 24px;
  text-align: right;
}

.progress-label {
  display: block;
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
}

.progress-value {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e82;
}

/* Checklist */
.checklist {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.checklist-item {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.checkbox {
  width: 20px;
  height: 20px;
  margin-top: 4px;
  cursor: pointer;
  flex-shrink: 0;
}

.item-content {
  display: flex;
  gap: 12px;
  flex: 1;
  cursor: pointer;
  align-items: flex-start;
}

.item-icon {
  width: 40px;
  height: 40px;
  background-color: #e8f4ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.item-text {
  flex: 1;
}

.item-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.item-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

/* Check Knowledge Button */
.check-knowledge-button {
  width: 100%;
  background-color: #2c3e82;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  margin-bottom: 24px;
}

.check-knowledge-button:hover {
  background-color: #243266;
}

/* Quiz Overlay */
.quiz-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Quiz Modal */
.quiz-modal {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Quiz Progress */
.quiz-progress {
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 500;
}

/* Quiz Item Name */
.quiz-item-name {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e82;
  text-align: center;
  margin: 0 0 16px 0;
}

/* Quiz Question */
.quiz-question {
  font-size: 16px;
  color: #4b5563;
  text-align: center;
  margin: 0 0 32px 0;
  line-height: 1.5;
}

/* Quiz Buttons */
.quiz-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quiz-button {
  width: 100%;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: white;
}

.quiz-button-take {
  background-color: #10b981;
}

.quiz-button-take:hover {
  background-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.quiz-button-leave {
  background-color: #ef4444;
}

.quiz-button-leave:hover {
  background-color: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.quiz-button:active {
  transform: translateY(0);
}

/* Feedback Modal */
.feedback-modal {
  text-align: center;
}

.feedback-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  animation: scaleIn 0.4s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.feedback-icon-success {
  background-color: #10b981;
  color: white;
}

.feedback-icon-error {
  background-color: #ef4444;
  color: white;
}

.feedback-title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.feedback-title-success {
  color: #10b981;
}

.feedback-title-error {
  color: #ef4444;
}

.feedback-text {
  font-size: 15px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.6;
}

.next-question-button {
  width: 100%;
  padding: 16px 24px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.next-question-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.next-question-button:active {
  transform: translateY(0);
}

/* Completion Modal */
.completion-modal {
  text-align: center;
}

.completion-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #2c3e82;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  animation: scaleIn 0.4s ease-out;
}

.completion-title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 12px 0;
}

.completion-score {
  font-size: 20px;
  color: #2c3e82;
  font-weight: 600;
  margin: 0 0 32px 0;
}

.restart-quiz-button {
  width: 100%;
  padding: 16px 24px;
  background-color: #2c3e82;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.restart-quiz-button:hover {
  background-color: #243266;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(44, 62, 130, 0.3);
}

.restart-quiz-button:active {
  transform: translateY(0);
}

</style>
