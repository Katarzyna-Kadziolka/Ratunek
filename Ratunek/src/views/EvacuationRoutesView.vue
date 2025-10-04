<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useEvacuationRoutesStore } from '@/stores/evacuationroutes'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const router = useRouter()
const evacuationRoutesStore = useEvacuationRoutesStore()
const isSideMenuOpen = ref(false)

const navigateToBackpack = () => {
  router.push('/')
}

const navigateToShelters = () => {
  router.push('/shelters')
}
</script>

<template>
  <div class="evacuation-routes-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Drogi ewakuacyjne"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Warning Alert -->
      <div class="warning-alert">
        <div class="warning-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 4l8.5 15h-17L12 6zm1 11h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
          </svg>
        </div>
        <div class="warning-content">
          <span class="warning-text">Sprawdź aktualne ostrzeżenia w Twojej okolicy</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="chevron-icon">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Location Section -->
      <div class="location-section">
        <label class="location-label">Wybierz lokalizację</label>
        <div class="location-input-wrapper">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="location-pin-icon">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#2c3e82" stroke-width="2"/>
            <circle cx="12" cy="10" r="3" stroke="#2c3e82" stroke-width="2"/>
          </svg>
          <input
            type="text"
            class="location-input"
            :value="evacuationRoutesStore.currentLocation"
            @input="evacuationRoutesStore.setLocation(($event.target as HTMLInputElement).value)"
          />
          <button class="gps-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="#6b7280"/>
              <path d="M12 1v6m0 6v6M23 12h-6m-6 0H5" stroke="#6b7280" stroke-width="2"/>
            </svg>
          </button>
          <button class="dropdown-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Map Section -->
      <div class="map-section">
        <div class="map-placeholder">
          <!-- Map Legend -->
          <div class="map-legend">
            <div class="legend-item">
              <div class="legend-color" style="background-color: #10b981;"></div>
              <span class="legend-label">Główne</span>
            </div>
            <div class="legend-item">
              <div class="legend-color" style="background-color: #3b82f6;"></div>
              <span class="legend-label">Alternatywne</span>
            </div>
            <div class="legend-item">
              <div class="legend-color" style="background-color: #f97316;"></div>
              <span class="legend-label">Awaryjne</span>
            </div>
          </div>

          <!-- Emergency Evacuation Marker -->
          <div class="emergency-marker">
            Awaryjny<br/>Ewakuacja
          </div>

          <!-- Route Lines Visual Representation -->
          <svg class="route-lines" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice">
            <!-- Green Route (Main) -->
            <path d="M 150 250 Q 100 200, 50 150 Q 40 100, 50 50"
                  stroke="#10b981" stroke-width="4" fill="none" stroke-linecap="round"/>
            <!-- Blue Route (Alternative) -->
            <path d="M 150 250 Q 180 180, 200 120 Q 210 80, 230 40"
                  stroke="#3b82f6" stroke-width="4" fill="none" stroke-linecap="round"/>
            <!-- Orange Route (Emergency) -->
            <path d="M 150 250 Q 200 220, 220 180 Q 240 140, 250 100"
                  stroke="#f97316" stroke-width="4" fill="none" stroke-linecap="round"/>

            <!-- Route Markers -->
            <circle cx="150" cy="250" r="6" fill="#dc2626"/>
            <circle cx="50" cy="50" r="5" fill="#10b981"/>
            <circle cx="230" cy="40" r="5" fill="#3b82f6"/>
            <circle cx="250" cy="100" r="5" fill="#f97316"/>
            <circle cx="100" cy="150" r="4" fill="#10b981"/>
            <circle cx="200" cy="120" r="4" fill="#3b82f6"/>
            <circle cx="220" cy="180" r="4" fill="#f97316"/>
          </svg>
        </div>
        <div class="map-controls">
          <button class="map-control-btn">+</button>
          <button class="map-control-btn">−</button>
          <button class="map-control-btn compass-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 2v4M12 18v4M22 12h-4M6 12H2" stroke="currentColor" stroke-width="2"/>
              <path d="M12 8l-2 6 6-2-4-4z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Quick Navigation Buttons -->
      <div class="quick-nav-buttons">
        <button class="quick-nav-btn" @click="navigateToBackpack">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M12 1v6m0 6v6M23 12h-6m-6 0H5" stroke="currentColor" stroke-width="2"/>
          </svg>
          Plecak ewakuacyjny
        </button>
        <button class="quick-nav-btn" @click="navigateToShelters">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>
          Najbliższy schron
        </button>
      </div>

      <!-- Routes List Section -->
      <div class="routes-list-section">
        <h2 class="section-title">Dostępne trasy ewakuacyjne</h2>

        <div class="routes-list">
          <div
            v-for="route in evacuationRoutesStore.routes"
            :key="route.id"
            class="route-card"
          >
            <div class="route-header">
              <div class="route-type-indicator" :style="{ backgroundColor: route.color }"></div>
              <div class="route-main-info">
                <h3 class="route-name">{{ route.name }}</h3>
                <div class="route-meta">
                  <span class="route-distance">{{ route.distance }} km</span>
                </div>
              </div>
            </div>

            <div class="route-details">
              <div class="route-waypoints">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="margin-right: 6px;">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#6b7280" stroke-width="2"/>
                </svg>
                <span>{{ route.waypoints.join(' → ') }}</span>
              </div>

              <div class="route-stats">
                <div class="stat-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#6b7280" stroke-width="2"/>
                    <path d="M12 6v6l4 2" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span>~{{ route.time }} min</span>
                </div>
                <div class="stat-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6b7280" stroke-width="2"/>
                    <circle cx="9" cy="7" r="4" stroke="#6b7280" stroke-width="2"/>
                  </svg>
                  <span>{{ evacuationRoutesStore.getDensityLabel(route.density) }}</span>
                </div>
              </div>
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
.evacuation-routes-view {
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

/* Warning Alert */
.warning-alert {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-left: 4px solid #dc2626;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.warning-alert:hover {
  transform: translateX(2px);
}

.warning-icon {
  color: #dc2626;
  flex-shrink: 0;
}

.warning-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.warning-text {
  font-size: 14px;
  font-weight: 500;
  color: #991b1b;
}

.chevron-icon {
  color: #dc2626;
  flex-shrink: 0;
}

/* Location Section */
.location-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.location-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 8px;
}

.location-input-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 12px;
  background: white;
}

.location-pin-icon {
  flex-shrink: 0;
}

.location-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  color: #1f2937;
  font-weight: 500;
}

.gps-button,
.dropdown-button {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Map Section */
.map-section {
  position: relative;
  background: white;
  border-radius: 12px;
  height: 350px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e0f2fe 0%, #bfdbfe 50%, #dbeafe 100%);
  position: relative;
  overflow: hidden;
}

.route-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
}

/* Map Legend */
.map-legend {
  position: absolute;
  top: 16px;
  left: 16px;
  background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-color {
  width: 24px;
  height: 3px;
  border-radius: 2px;
}

.legend-label {
  font-size: 13px;
  color: #1f2937;
  font-weight: 500;
}

/* Emergency Marker */
.emergency-marker {
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  background: #dc2626;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4);
  z-index: 10;
}

/* Map Controls */
.map-controls {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
}

.map-control-btn {
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
}

.map-control-btn:hover {
  background-color: #f9fafb;
}

.compass-btn {
  font-size: 16px;
}

/* Quick Navigation Buttons */
.quick-nav-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.quick-nav-btn {
  flex: 1;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.quick-nav-btn:hover {
  background-color: #f9fafb;
  border-color: #2c3e82;
  color: #2c3e82;
}

.quick-nav-btn svg {
  stroke: currentColor;
}

/* Routes List Section */
.routes-list-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
}

.routes-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Route Card */
.route-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.route-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.route-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.route-type-indicator {
  width: 4px;
  height: 48px;
  border-radius: 2px;
  flex-shrink: 0;
}

.route-main-info {
  flex: 1;
}

.route-name {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.route-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.route-distance {
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.route-details {
  margin-left: 16px;
}

.route-waypoints {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 8px;
  line-height: 1.5;
}

.route-stats {
  display: flex;
  gap: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #6b7280;
}

.stat-item svg {
  flex-shrink: 0;
}
</style>
