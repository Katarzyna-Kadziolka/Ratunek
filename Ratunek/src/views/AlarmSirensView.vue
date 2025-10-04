<script setup lang="ts">
import { ref } from 'vue'
import { useAlarmsStore } from '@/stores/alarms'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const alarmsStore = useAlarmsStore()
const isSideMenuOpen = ref(false)
</script>

<template>
  <div class="alarm-sirens-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Syreny alarmowe"
      @open-menu="isSideMenuOpen = true"
    />

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
    <BottomNav />
  </div>
</template>

<style scoped>
.alarm-sirens-view {
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

</style>
