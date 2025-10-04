<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSOSoundStore } from '@/stores/sosound'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const soSoundStore = useSOSoundStore()
const isSideMenuOpen = ref(false)

onMounted(() => {
  soSoundStore.detectLocation()
})

const callEmergency = (number: string) => {
  console.log(number)
}
</script>

<template>
  <div class="so-sound-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Dźwięk SOS"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Danger Alert -->
      <div class="danger-alert">
        <div class="alert-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 4l8.5 15h-17L12 6zm1 11h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
          </svg>
        </div>
        <div class="alert-content">
          <h3 class="alert-title">Użyj tylko w sytuacji zagrożenia życia</h3>
        </div>
      </div>

      <!-- Instruction Text -->
      <div class="instruction-card">
        <p class="instruction-text">
          Naciśnij przycisk SOS aby aktywować sygnał dźwiękowy i powiadomić służby ratunkowe o swojej lokalizacji.
        </p>
      </div>

      <!-- SOS Button -->
      <div class="sos-button-container">
        <button
          class="sos-button"
          :class="{ 'sos-button-active': soSoundStore.soundActive }"
          @click="soSoundStore.toggleSOSound()"
        >
          <div class="sos-circle">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
              <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="sos-text">
              <span class="sos-label">SOS</span>
              <span class="sos-action">NACIŚNIJ</span>
            </div>
          </div>
        </button>
      </div>

      <!-- GPS Location Section -->
      <div class="gps-section">
        <div class="gps-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="gps-icon">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#2c3e82" stroke-width="2"/>
            <circle cx="12" cy="10" r="3" stroke="#2c3e82" stroke-width="2"/>
          </svg>
          <h3 class="gps-title">Lokalizacja GPS</h3>
        </div>
        <p class="gps-description">
          Automatycznie wyślij swoją lokalizację do służb ratunkowych
        </p>
        <button
          class="gps-send-button"
          :disabled="soSoundStore.gpsLocationSent"
          @click="soSoundStore.sendGPSLocation()"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ soSoundStore.gpsLocationSent ? 'Lokalizacja wysłana' : 'Wyślij lokalizację GPS' }}
        </button>
      </div>

      <!-- Emergency Numbers -->
      <div class="emergency-numbers-section">
        <h2 class="section-title">Numery alarmowe</h2>
        <div class="emergency-numbers-list">
          <div
            v-for="contact in soSoundStore.emergencyNumbers"
            :key="contact.number"
            class="emergency-number-card"
            @click="callEmergency(contact.number)"
          >
            <div class="number-icon" :class="{ 'icon-phone': contact.icon === 'phone', 'icon-ambulance': contact.icon === 'ambulance' }">
              <svg v-if="contact.icon === 'phone'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <svg v-else-if="contact.icon === 'ambulance'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 10H4V5h16v5zm-8 8H6v-2h6v2zm6 0h-4v-2h4v2zM2 3h20v7H2V3zm0 9h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9z"/>
              </svg>
            </div>
            <div class="number-content">
              <div class="number-value">{{ contact.number }}</div>
              <div class="number-label">{{ contact.label }}</div>
            </div>
            <div class="call-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<style scoped>
.so-sound-view {
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

/* Danger Alert */
.danger-alert {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-left: 4px solid #dc2626;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.15);
}

.alert-icon {
  color: #dc2626;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-size: 18px;
  font-weight: 700;
  color: #991b1b;
  margin: 0;
  text-align: center;
}

/* Instruction Card */
.instruction-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.instruction-text {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  text-align: center;
}

/* SOS Button Container */
.sos-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.sos-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s;
}

.sos-button:hover {
  transform: scale(1.05);
}

.sos-button:active {
  transform: scale(0.98);
}

.sos-button-active .sos-circle {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 12px 40px rgba(220, 38, 38, 0.5);
  }
  50% {
    box-shadow: 0 12px 60px rgba(220, 38, 38, 0.7);
  }
}

.sos-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 12px 40px rgba(220, 38, 38, 0.4);
}

.sos-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.sos-label {
  font-size: 36px;
  font-weight: 900;
  color: white;
  letter-spacing: 2px;
}

.sos-action {
  font-size: 16px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
}

/* GPS Section */
.gps-section {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.gps-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.gps-icon {
  flex-shrink: 0;
}

.gps-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0;
}

.gps-description {
  font-size: 14px;
  color: #1e40af;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.gps-send-button {
  width: 100%;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.gps-send-button:hover:not(:disabled) {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.gps-send-button:active:not(:disabled) {
  transform: translateY(0);
}

.gps-send-button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Emergency Numbers Section */
.emergency-numbers-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
}

.emergency-numbers-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Emergency Number Card */
.emergency-number-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s;
}

.emergency-number-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.emergency-number-card:active {
  transform: translateY(0);
}

.number-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-phone {
  background-color: #fee2e2;
  color: #dc2626;
}

.icon-ambulance {
  background-color: #fef3c7;
  color: #f59e0b;
}

.number-content {
  flex: 1;
}

.number-value {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2px;
}

.number-label {
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.call-icon {
  flex-shrink: 0;
}

/* Responsive Design */
@media (max-width: 480px) {
  .sos-circle {
    width: 180px;
    height: 180px;
  }

  .sos-label {
    font-size: 32px;
  }

  .sos-action {
    font-size: 14px;
  }
}
</style>
