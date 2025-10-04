<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const router = useRouter()
const isSideMenuOpen = ref(false)

const navigateToBackpack = () => {
  router.push('/backpack')
}

const navigateToAlarms = () => {
  router.push('/alarm-sirens')
}

const navigateToShelters = () => {
  router.push('/shelters')
}

const navigateToFirstAid = () => {
  router.push('/first-aid')
}
</script>

<template>
  <div class="home-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="mKryzys"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Alert Banner -->
      <div class="alert-banner">
        <div class="alert-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 4l8.5 15h-17L12 6zm1 11h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
          </svg>
        </div>
        <div class="alert-content">
          <h3 class="alert-title">Brak aktywnych alertów</h3>
          <p class="alert-text">Sprawdzaj regularnie aktualizacje</p>
        </div>
      </div>

      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="hero-title">Przygotuj się na sytuacje kryzysowe</h1>
        <p class="hero-description">
          Aplikacja pomoże Ci przygotować się na sytuacje awaryjne i kryzysowe. Dowiedz się, co robić i gdzie się udać w razie niebezpieczeństwa.
        </p>
      </div>

      <!-- Feature Cards Grid -->
      <div class="feature-cards">
        <!-- Emergency Backpack Card -->
        <button class="feature-card" @click="navigateToBackpack">
          <div class="card-icon card-icon-blue">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="card-content">
            <h3 class="card-title">Plecak ewakuacyjny</h3>
            <p class="card-subtitle">Lista niezbędnych rzeczy</p>
          </div>
        </button>

        <!-- Alarm Sirens Card -->
        <button class="feature-card" @click="navigateToAlarms">
          <div class="card-icon card-icon-blue">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card-content">
            <h3 class="card-title">Syreny alarmowe</h3>
            <p class="card-subtitle">Rozpoznaj sygnały</p>
          </div>
        </button>

        <!-- Shelters Card -->
        <button class="feature-card" @click="navigateToShelters">
          <div class="card-icon card-icon-navy">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card-content">
            <h3 class="card-title">Schrony</h3>
            <p class="card-subtitle">Znajdź najbliższy</p>
          </div>
        </button>

        <!-- First Aid Card -->
        <button class="feature-card" @click="navigateToFirstAid">
          <div class="card-icon card-icon-pink">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card-content">
            <h3 class="card-title">Pierwsza pomoc</h3>
            <p class="card-subtitle">Instrukcje krok po kroku</p>
          </div>
        </button>
      </div>

      <!-- Emergency SOS Section -->
      <div class="emergency-section">
        <h2 class="emergency-title">Sytuacja awaryjna</h2>
        <button class="sos-button">
          <div class="sos-circle">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
              <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="sos-text">Naciśnij aby uruchomić dźwięk SOS</p>
        </button>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<style scoped>
.home-view {
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

/* Alert Banner */
.alert-banner {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-left: 4px solid #f59e0b;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
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
  margin: 0 0 4px 0;
}

.alert-text {
  font-size: 14px;
  color: #b45309;
  margin: 0;
  line-height: 1.5;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 32px;
}

.hero-title {
  font-size: 28px;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.hero-description {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Feature Cards Grid */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.feature-card {
  background: white;
  border: none;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.feature-card:active {
  transform: translateY(-2px);
}

.card-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.card-icon-blue {
  background-color: #dbeafe;
  color: #2563eb;
}

.card-icon-navy {
  background-color: #e0e7ff;
  color: #4f46e5;
}

.card-icon-pink {
  background-color: #fce7f3;
  color: #ec4899;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 6px 0;
}

.card-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

/* Emergency SOS Section */
.emergency-section {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}

.emergency-title {
  font-size: 20px;
  font-weight: 700;
  color: #991b1b;
  margin: 0 0 20px 0;
}

.sos-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 0;
}

.sos-circle {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(220, 38, 38, 0.4);
  transition: all 0.3s;
}

.sos-button:hover .sos-circle {
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(220, 38, 38, 0.5);
}

.sos-button:active .sos-circle {
  transform: scale(0.98);
}

.sos-text {
  font-size: 16px;
  font-weight: 600;
  color: #991b1b;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 480px) {
  .feature-cards {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 24px;
  }

  .card-icon {
    width: 64px;
    height: 64px;
  }
}
</style>
