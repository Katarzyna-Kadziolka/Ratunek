<script setup lang="ts">
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const settingsStore = useSettingsStore()
const isSideMenuOpen = ref(false)
</script>

<template>
  <div class="settings-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Ustawienia"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Notifications Section -->
      <section class="settings-section">
        <h2 class="section-title">Powiadomienia</h2>

        <!-- Crisis Alerts Toggle -->
        <div class="setting-item">
          <div class="setting-content">
            <h3 class="setting-label">Alerty kryzysowe</h3>
            <p class="setting-description">Otrzymuj ważne powiadomienia o zagrożeniach</p>
          </div>
          <label class="toggle-switch">
            <input
              type="checkbox"
              :checked="settingsStore.crisisAlertsEnabled"
              @change="settingsStore.toggleCrisisAlerts()"
            />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Weather Alerts Toggle -->
        <div class="setting-item">
          <div class="setting-content">
            <h3 class="setting-label">Alerty pogodowe</h3>
            <p class="setting-description">Ostrzeżenia meteorologiczne</p>
          </div>
          <label class="toggle-switch">
            <input
              type="checkbox"
              :checked="settingsStore.weatherAlertsEnabled"
              @change="settingsStore.toggleWeatherAlerts()"
            />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- System Tests Toggle -->
        <div class="setting-item">
          <div class="setting-content">
            <h3 class="setting-label">Testy systemu</h3>
            <p class="setting-description">Regularne testy syren alarmowych</p>
          </div>
          <label class="toggle-switch">
            <input
              type="checkbox"
              :checked="settingsStore.systemTestsEnabled"
              @change="settingsStore.toggleSystemTests()"
            />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Notification Frequency -->
        <button class="setting-item setting-item-clickable">
          <div class="setting-content">
            <h3 class="setting-label">Częstotliwość powiadomień</h3>
            <p class="setting-description">{{ settingsStore.getNotificationFrequencyLabel(settingsStore.notificationFrequency) }}</p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </section>

      <!-- Language Section -->
      <section class="settings-section">
        <h2 class="section-title">Język</h2>

        <!-- Language Selection -->
        <button class="setting-item setting-item-clickable">
          <div class="language-flag">🇵🇱</div>
          <div class="setting-content">
            <h3 class="setting-label">Polski</h3>
            <p class="setting-description">Język systemowy</p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </section>

      <!-- Location Section -->
      <section class="settings-section">
        <h2 class="section-title">Lokalizacja</h2>

        <!-- Default City -->
        <button class="setting-item setting-item-clickable">
          <div class="setting-content">
            <h3 class="setting-label">Domyślne miasto</h3>
            <p class="setting-description">{{ settingsStore.defaultCity }}</p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Auto Location Toggle -->
        <div class="setting-item">
          <div class="setting-content">
            <h3 class="setting-label">Automatyczna lokalizacja</h3>
            <p class="setting-description">Używaj bieżącej lokalizacji GPS</p>
          </div>
          <label class="toggle-switch">
            <input
              type="checkbox"
              :checked="settingsStore.autoLocationEnabled"
              @change="settingsStore.toggleAutoLocation()"
            />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </section>

      <!-- About Section -->
      <section class="settings-section">
        <h2 class="section-title">Informacje o aplikacji</h2>

        <!-- About App -->
        <button class="setting-item setting-item-clickable">
          <div class="info-icon info-icon-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="setting-content">
            <h3 class="setting-label">O aplikacji</h3>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- FAQ -->
        <button class="setting-item setting-item-clickable">
          <div class="info-icon info-icon-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 16v.01M12 12a2 2 0 0 1 2-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="setting-content">
            <h3 class="setting-label">Często zadawane pytania</h3>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Submit Idea -->
        <button class="setting-item setting-item-clickable">
          <div class="info-icon info-icon-yellow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v20M17 7H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              <path d="M9 2h6M9 22h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="setting-content">
            <h3 class="setting-label">Prześlij swoją ideę</h3>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Technical Support -->
        <button class="setting-item setting-item-clickable">
          <div class="info-icon info-icon-green">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="setting-content">
            <h3 class="setting-label">Pomoc techniczna</h3>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Terms and Privacy -->
        <button class="setting-item setting-item-clickable">
          <div class="info-icon info-icon-purple">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="setting-content">
            <h3 class="setting-label">Regulamin i polityka prywatności</h3>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </section>

      <!-- App Info Footer -->
      <div class="app-info-footer">
        <p class="app-name">mKryzys</p>
        <p class="app-version">Wersja 1.2.3</p>
        <p class="app-copyright">© 2024 Rzeczpospolita Polska</p>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<style scoped>
.settings-view {
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

/* Settings Section */
.settings-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 12px 0;
  padding: 0 4px;
}

/* Setting Item */
.setting-item {
  background: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: left;
  width: 100%;
}

.setting-item-clickable {
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

.setting-item-clickable:hover {
  background-color: #f9fafb;
  transform: translateX(2px);
}

.setting-item-clickable:active {
  transform: translateX(0);
}

.setting-content {
  flex: 1;
}

.setting-label {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.setting-description {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  width: 50px;
  height: 28px;
  cursor: pointer;
  flex-shrink: 0;
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

/* Chevron Icon */
.chevron-icon {
  color: #9ca3af;
  flex-shrink: 0;
}

/* Language Flag */
.language-flag {
  width: 40px;
  height: 40px;
  background-color: #fee2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

/* Info Icons */
.info-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon-blue {
  background-color: #dbeafe;
  color: #2563eb;
}

.info-icon-yellow {
  background-color: #fef3c7;
  color: #f59e0b;
}

.info-icon-green {
  background-color: #d1fae5;
  color: #10b981;
}

.info-icon-purple {
  background-color: #e9d5ff;
  color: #9333ea;
}

/* App Info Footer */
.app-info-footer {
  text-align: center;
  padding: 24px 0;
  margin-top: 16px;
}

.app-name {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.app-version {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 4px 0;
}

.app-copyright {
  font-size: 13px;
  color: #9ca3af;
  margin: 0;
}
</style>
