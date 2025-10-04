<script setup lang="ts">
import { ref } from 'vue'
import { useFirstAidStore } from '@/stores/firstaid'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const firstAidStore = useFirstAidStore()
const isSideMenuOpen = ref(false)
</script>

<template>
  <div class="first-aid-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Pierwsza pomoc"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Danger Alert Card -->
      <div class="danger-alert">
        <div class="alert-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 4l8.5 15h-17L12 6zm1 11h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
          </svg>
        </div>
        <div class="alert-content">
          <h3 class="alert-title">Sytuacja zagrożenia życia</h3>
          <p class="alert-text">Wykonuj czynności spokojnie i dokładnie</p>
        </div>
      </div>

      <!-- CPR Section -->
      <div class="cpr-section">
        <h2 class="section-title">Resuscytacja krążeniowo-oddechowa</h2>

        <!-- CPR Steps -->
        <div class="steps-list">
          <div
            v-for="step in firstAidStore.cprSteps"
            :key="step.id"
            class="step-card"
          >
            <button
              class="step-header"
              @click="firstAidStore.toggleStep(step.id)"
            >
              <div class="step-left">
                <div class="step-icon">
                  <svg v-if="step.id === 'check-consciousness'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <svg v-else-if="step.id === 'call-help'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <svg v-else-if="step.id === 'open-airway'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12h4l3-9 4 18 3-9h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-else-if="step.id === 'cpr-cycle'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="step-text">
                  <h3 class="step-title">{{ step.title }}</h3>
                  <p class="step-number">Krok {{ step.stepNumber }}</p>
                </div>
              </div>
              <div class="step-toggle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  :class="{ 'rotated': step.expanded }"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
            <div v-if="step.expanded" class="step-content">
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <!-- Metronome Button -->
        <button class="metronome-button" @click="firstAidStore.toggleMetronome()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Odtwórz rytm do reanimacji
        </button>
        <p class="metronome-info">100-120 uderzeń na minutę</p>
      </div>

      <!-- Important Info Card -->
      <div class="info-box">
        <div class="info-header">
          <span class="info-icon">⚡</span>
          <h3 class="info-title">Ważne informacje</h3>
        </div>
        <ul class="info-list">
          <li>Nie przerywaj reanimacji do przybytia pomocy</li>
          <li>Zmieniaj się z inną osobą co 2 minuty</li>
          <li>Uciśkaj mocno i pozwalaj na pełne uniesienie klatki</li>
        </ul>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<style scoped>
.first-aid-view {
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
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.alert-icon {
  color: #dc2626;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-size: 16px;
  font-weight: 600;
  color: #991b1b;
  margin: 0 0 4px 0;
}

.alert-text {
  font-size: 14px;
  color: #b91c1c;
  margin: 0;
  line-height: 1.5;
}

/* CPR Section */
.cpr-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
}

/* Steps List */
.steps-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.step-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.step-header {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: left;
}

.step-header:hover {
  background-color: #f9fafb;
}

.step-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.step-icon {
  width: 48px;
  height: 48px;
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  flex-shrink: 0;
}

.step-text {
  flex: 1;
}

.step-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 2px 0;
}

.step-number {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.step-toggle svg {
  color: #6b7280;
  transition: transform 0.3s;
}

.step-toggle svg.rotated {
  transform: rotate(180deg);
}

.step-content {
  padding: 0 16px 16px 76px;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
}

.step-description {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

/* Metronome Button */
.metronome-button {
  width: 100%;
  background-color: #1e3a8a;
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
  margin-bottom: 8px;
}

.metronome-button:hover {
  background-color: #1e40af;
}

.metronome-button:active {
  background-color: #1e3a8a;
}

.metronome-info {
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Info Box */
.info-box {
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
  border-left: 4px solid #f59e0b;
  border-radius: 12px;
  padding: 16px;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.info-icon {
  font-size: 20px;
}

.info-title {
  font-size: 16px;
  font-weight: 600;
  color: #92400e;
  margin: 0;
}

.info-list {
  margin: 0;
  padding-left: 20px;
  list-style: none;
}

.info-list li {
  font-size: 14px;
  color: #b45309;
  line-height: 1.8;
  position: relative;
  padding-left: 8px;
}

.info-list li::before {
  content: "•";
  position: absolute;
  left: -12px;
  font-weight: bold;
}
</style>
