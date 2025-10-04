<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()

const checklist = ref([
  { id: 1, text: 'Dokumenty osobiste w wodoszczelnej torebce', checked: true },
  { id: 2, text: 'Leki na 3 dni', checked: true },
  { id: 3, text: 'Woda pitna (1.5L na osobę)', checked: true },
  { id: 4, text: 'Jedzenie niewymagające gotowania', checked: true },
  { id: 5, text: 'Latarka i baterie', checked: true }
])

const goBack = () => {
  router.back()
}

const navigateToShelters = () => {
  router.push({ name: 'shelters' })
}
</script>

<template>
  <div class="evacuation-preparation-view">
    <!-- Header -->
    <header class="app-header">
      <button class="back-button" @click="goBack">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="header-content">
        <h1 class="header-title">Przygotowanie do ewakuacji</h1>
      </div>
      <button class="help-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <path d="M12 16v.01M12 12a2 2 0 0 1 2-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </header>

    <!-- Main Content -->
    <main class="main-content">

      <!-- Alert Box -->
      <div class="alert-box">
        <div class="alert-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
        <div class="alert-content">
          <h3 class="alert-title">Masz około 10-15 minut</h3>
          <p class="alert-text">na przygotowanie się do ewakuacji</p>
        </div>
      </div>

      <!-- Urgent Actions Section -->
      <section class="section">
        <h2 class="section-title">Pilne działania</h2>
        <div class="action-grid">
          <!-- Turn on Radio -->
          <button class="action-button action-radio">
            <div class="action-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"/>
              </svg>
            </div>
            <span class="action-label">Włącz radio</span>
          </button>

          <!-- Charge Phone -->
          <button class="action-button action-phone">
            <div class="action-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z"/>
              </svg>
            </div>
            <span class="action-label">Naładuj telefon</span>
          </button>

          <!-- Notify Family -->
          <button class="action-button action-family">
            <div class="action-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <span class="action-label">Powiadom rodzinę</span>
          </button>

          <!-- Prepare Backpack -->
          <button class="action-button action-backpack">
            <div class="action-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 6h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zm.75-12h-3V3.5h3V6zM16 18h-1.5V9H16v9z"/>
              </svg>
            </div>
            <span class="action-label">Przygotuj plecak</span>
          </button>
        </div>
      </section>

      <!-- Checklist Section -->
      <section class="section">
        <h2 class="section-title">Lista kontrolna</h2>
        <div class="checklist">
          <div v-for="item in checklist" :key="item.id" class="checklist-item">
            <input type="checkbox" :id="`check-${item.id}`" v-model="item.checked" class="checkbox" />
            <label :for="`check-${item.id}`" class="checklist-label">{{ item.text }}</label>
          </div>
        </div>
      </section>

      <!-- Continue Button -->
      <button class="continue-button" @click="navigateToShelters">
        Dalej - Znajdź schron
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Help Note -->
      <p class="help-note">Pomiń przygotowania - przejdź do nawigacji</p>
    </main>
  </div>
</template>

<style scoped>
.evacuation-preparation-view {
  min-height: 100vh;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
}

/* Header */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-button,
.help-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.back-button:hover,
.help-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.header-content {
  flex: 1;
  text-align: center;
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #1f2937;
}

.header-subtitle {
  font-size: 12px;
  font-weight: 400;
  margin: 2px 0 0 0;
  color: #6b7280;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 20px;
  padding-bottom: 40px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

/* Progress Bar */
.progress-section {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin: 0;
  min-width: 30px;
  text-align: right;
}

/* Alert Box */
.alert-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-left: 4px solid #f59e0b;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.alert-icon {
  color: #d97706;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-size: 16px;
  font-weight: 600;
  color: #92400e;
  margin: 0 0 2px 0;
}

.alert-text {
  font-size: 14px;
  color: #b45309;
  margin: 0;
}

/* Section */
.section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
}

/* Action Grid */
.action-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.action-button {
  background: white;
  border: none;
  border-radius: 12px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.action-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-radio .action-icon-wrapper {
  background: #fef2f2;
  color: #dc2626;
}

.action-phone .action-icon-wrapper {
  background: #eff6ff;
  color: #3b82f6;
}

.action-family .action-icon-wrapper {
  background: #f0fdf4;
  color: #16a34a;
}

.action-backpack .action-icon-wrapper {
  background: #faf5ff;
  color: #a855f7;
}

.action-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-align: center;
  line-height: 1.3;
}

/* Checklist */
.checklist {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border-radius: 8px;
  padding: 14px 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.checkbox {
  width: 20px;
  height: 20px;
  accent-color: #3b82f6;
  cursor: pointer;
  flex-shrink: 0;
}

.checklist-label {
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  flex: 1;
  line-height: 1.4;
}

/* Continue Button */
.continue-button {
  width: 100%;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 12px;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
}

.continue-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(30, 58, 138, 0.4);
}

.continue-button:active {
  transform: translateY(0);
}

/* Help Note */
.help-note {
  text-align: center;
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 480px) {
  .main-content {
    padding: 16px;
  }

  .action-grid {
    gap: 10px;
  }

  .action-button {
    padding: 16px 12px;
  }

  .action-icon-wrapper {
    width: 48px;
    height: 48px;
  }

  .action-label {
    font-size: 13px;
  }
}
</style>
