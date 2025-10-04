<script setup lang="ts">
import { ref } from 'vue'
import { useAlarmsStore } from '@/stores/alarms'
import { useRouter } from 'vue-router'

const alarmsStore = useAlarmsStore()
const router = useRouter()
const isSideMenuOpen = ref(false)

const openSideMenu = () => {
  isSideMenuOpen.value = true
}

const closeSideMenu = () => {
  isSideMenuOpen.value = false
}

const navigateToBackpack = () => {
  closeSideMenu()
  router.push('/')
}

const navigateToAlarms = () => {
  closeSideMenu()
  router.push('/alarm-sirens')
}
</script>

<template>
  <div class="alarm-sirens-view">
    <!-- Side Menu Overlay -->
    <div v-if="isSideMenuOpen" class="side-menu-overlay" @click="closeSideMenu"></div>

    <!-- Side Menu Drawer -->
    <aside class="side-menu" :class="{ 'side-menu-open': isSideMenuOpen }">
      <div class="side-menu-header">
        <h2 class="side-menu-title">Ratunek</h2>
        <button class="close-button" @click="closeSideMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <nav class="side-menu-nav">
        <button class="side-menu-item" @click="navigateToBackpack">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M12 1v6m0 6v6M23 12h-6m-6 0H5" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>Plecak ewakuacyjny</span>
        </button>

        <button class="side-menu-item" @click="navigateToAlarms">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Syreny alarmowe</span>
        </button>

        <button class="side-menu-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Schrony</span>
        </button>

        <button class="side-menu-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Drogi ewakuacyjne</span>
        </button>

        <button class="side-menu-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Pierwsza pomoc</span>
        </button>

        <button class="side-menu-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Dźwięk SOS</span>
        </button>

        <button class="side-menu-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
            <path d="M20 8v6M23 11h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Integracja z RBC</span>
        </button>

        <button class="side-menu-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>Logowanie przez mObywatel</span>
        </button>

        <button class="side-menu-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>Ustawienia</span>
        </button>
      </nav>
    </aside>

    <!-- Header -->
    <header class="app-header">
      <button class="icon-button" @click="openSideMenu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <h1 class="header-title">Syreny alarmowe</h1>
      <div class="icon-button-placeholder"></div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- General Info Card -->
      <div class="info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4M12 16h.01" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="info-content">
          <h3 class="info-title">Testy ogólnokrajowe:</h3>
          <p class="info-text">
            Syreny alarmowe są testowane w pierwszą środę każdego miesiąca o godzinie 12:00.
          </p>
        </div>
      </div>

      <!-- Learning Mode Toggle -->
      <div class="learning-mode-card">
        <div class="learning-mode-content">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="learning-icon">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="learning-mode-label">Tryb nauki</span>
        </div>
        <label class="toggle-switch">
          <input
            type="checkbox"
            :checked="alarmsStore.learningMode"
            @change="alarmsStore.toggleLearningMode()"
          />
          <span class="toggle-slider"></span>
        </label>
      </div>

      <!-- Alarm Cards -->
      <div class="alarm-cards">
        <div
          v-for="alarm in alarmsStore.alarmTypes"
          :key="alarm.id"
          class="alarm-card"
        >
          <div class="alarm-header">
            <h3 class="alarm-title">{{ alarm.title }}</h3>
            <button class="play-button" :style="{ backgroundColor: alarm.color }">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
          <p class="alarm-duration">{{ alarm.duration }}</p>
          <p class="alarm-description">{{ alarm.description }}</p>
          <div class="alarm-actions">
            <button class="action-button primary" :style="{ backgroundColor: alarm.color }">
              {{ alarm.actionText }}
            </button>
            <button class="action-button secondary">
              Rozpoznaj dźwięk
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <button class="nav-item" @click="router.push('/')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Home</span>
      </button>

      <button class="nav-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Mapa</span>
      </button>

      <button class="nav-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Info</span>
      </button>

      <button class="nav-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Lista</span>
      </button>
    </nav>
  </div>
</template>

<style scoped>
.alarm-sirens-view {
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
  background-color: #1e3a8a;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  flex: 1;
  text-align: center;
}

.icon-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.icon-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.icon-button-placeholder {
  width: 40px;
  height: 40px;
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

/* General Info Card */
.info-card {
  background: #e0f2fe;
  border-left: 4px solid #1e3a8a;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.info-icon {
  color: #1e3a8a;
  flex-shrink: 0;
}

.info-content {
  flex: 1;
}

.info-title {
  font-size: 14px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0 0 4px 0;
}

.info-text {
  font-size: 14px;
  color: #1e40af;
  margin: 0;
  line-height: 1.5;
}

/* Learning Mode Card */
.learning-mode-card {
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.learning-mode-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.learning-icon {
  color: #1e3a8a;
}

.learning-mode-label {
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  width: 50px;
  height: 28px;
  cursor: pointer;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d5db;
  border-radius: 28px;
  transition: 0.3s;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

.toggle-switch input:checked + .toggle-slider {
  background-color: #1e3a8a;
}

.toggle-switch input:checked + .toggle-slider:before {
  transform: translateX(22px);
}

/* Alarm Cards */
.alarm-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.alarm-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.alarm-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.alarm-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.play-button {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.play-button:active {
  transform: scale(0.98);
}

.alarm-duration {
  font-size: 14px;
  color: #1f2937;
  font-weight: 500;
  margin: 0 0 8px 0;
}

.alarm-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.alarm-actions {
  display: flex;
  gap: 12px;
}

.action-button {
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.action-button.primary {
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.action-button.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.action-button.secondary {
  background-color: white;
  color: #4b5563;
  border: 1px solid #d1d5db;
}

.action-button.secondary:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

/* Bottom Navigation */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 8px 20px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.nav-item {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 12px;
  flex: 1;
  transition: color 0.2s;
}

.nav-item:hover {
  color: #1e3a8a;
}

.nav-item svg {
  flex-shrink: 0;
}

/* Side Menu Overlay */
.side-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
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

/* Side Menu Drawer */
.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 80vw;
  background-color: white;
  z-index: 1001;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.side-menu-open {
  transform: translateX(0);
}

/* Side Menu Header */
.side-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
}

.side-menu-title {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: #f3f4f6;
}

/* Side Menu Navigation */
.side-menu-nav {
  padding: 8px 0;
}

.side-menu-item {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: left;
  color: #374151;
  font-size: 16px;
}

.side-menu-item:hover {
  background-color: #f9fafb;
}

.side-menu-item .menu-icon {
  flex-shrink: 0;
  color: #6b7280;
}

.side-menu-item span {
  flex: 1;
  font-weight: 500;
}
</style>
