<script setup lang="ts">
import { ref } from 'vue'
import { useSheltersStore } from '@/stores/shelters'
import { useRouter } from 'vue-router'

const sheltersStore = useSheltersStore()
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

const navigateToShelters = () => {
  closeSideMenu()
  router.push('/shelters')
}
</script>

<template>
  <div class="shelters-view">
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

        <button class="side-menu-item" @click="navigateToShelters">
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
      <button class="icon-button" @click="openSideMenu">☰</button>
      <h1 class="header-title">Schrony</h1>
      <button class="icon-button">🔍</button>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Location Section -->
      <div class="location-section">
        <div class="location-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="location-icon">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#2c3e82" stroke-width="2"/>
            <circle cx="12" cy="10" r="3" stroke="#2c3e82" stroke-width="2"/>
          </svg>
          <span class="location-label">Twoja lokalizacja</span>
          <button class="change-button">Zmień</button>
        </div>
        <input type="text" class="location-input" placeholder="Wpisz miasto lub użyj GPS" />
        <div v-if="sheltersStore.gpsDetected" class="gps-detected">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" fill="#10b981"/>
            <path d="M12 1v6m0 6v6M23 12h-6m-6 0H5" stroke="#10b981" stroke-width="2"/>
          </svg>
          <span>Wykryto GPS: {{ sheltersStore.currentLocation }}</span>
        </div>
      </div>

      <!-- Filters -->
      <div class="filters-section">
        <h3 class="filters-title">Filtruj zasoby</h3>
        <div class="filter-buttons">
          <button class="filter-btn active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/>
            </svg>
            Schrony
          </button>
          <button class="filter-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 4.19 9.84zM17.91 3.5l-7.02 7.01 2.83 2.83a4.008 4.008 0 0 0 4.19-9.84z" stroke="currentColor" stroke-width="2"/>
            </svg>
            Żywność
          </button>
          <button class="filter-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke="currentColor" stroke-width="2"/>
            </svg>
            Woda
          </button>
          <button class="filter-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14h-2v-2h2v2zm0-4h-2V7h2v6z" stroke="currentColor" stroke-width="2"/>
            </svg>
            Apteka
          </button>
          <button class="filter-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/>
            </svg>
            Nocleg
          </button>
        </div>
      </div>

      <!-- Navigate Button -->
      <button class="navigate-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
          <circle cx="12" cy="12" r="2" fill="white"/>
          <path d="M12 2v4m0 12v4M22 12h-4M6 12H2" stroke="white" stroke-width="2"/>
        </svg>
        Nawiguj do najbliższego schronu
      </button>

      <!-- Map Section -->
      <div class="map-section">
        <div class="map-placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="map-marker">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#2c3e82"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
        </div>
        <div class="map-controls">
          <button class="map-control-btn">+</button>
          <button class="map-control-btn">−</button>
        </div>
      </div>

      <!-- Shelters List -->
      <div class="shelters-list">
        <h2 class="list-title">Najbliższe schrony <span class="count">{{ sheltersStore.shelters.length }} znalezionych</span></h2>
        <div
          v-for="shelter in sheltersStore.filteredShelters"
          :key="shelter.id"
          class="shelter-card"
        >
          <div class="shelter-header">
            <h3 class="shelter-name">{{ shelter.name }}</h3>
            <span class="status-badge" :style="{ backgroundColor: sheltersStore.getStatusColor(shelter.status) }">
              {{ sheltersStore.getStatusLabel(shelter.status) }}
            </span>
          </div>
          <p class="shelter-address">{{ shelter.address }}</p>
          <div class="shelter-info">
            <div class="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" stroke="#6b7280" stroke-width="2"/>
              </svg>
              <span>{{ shelter.time }} min ({{ shelter.distance }}m)</span>
            </div>
            <div class="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6b7280" stroke-width="2"/>
                <circle cx="9" cy="7" r="4" stroke="#6b7280" stroke-width="2"/>
              </svg>
              <span>{{ shelter.capacity }} miejsc</span>
            </div>
          </div>
          <button class="navigate-btn">Nawiguj</button>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <button class="nav-item">
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
.shelters-view {
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

.header-title {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e82;
  margin: 0;
  flex: 1;
  text-align: center;
}

.icon-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #2c3e82;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
  font-size: 20px;
}

.icon-button:hover {
  background-color: #f0f2f5;
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

/* Location Section */
.location-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.location-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.location-label {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  flex: 1;
}

.change-button {
  background: none;
  border: none;
  color: #2c3e82;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;
}

.location-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 8px;
}

.location-input:focus {
  outline: none;
  border-color: #2c3e82;
}

.gps-detected {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f0fdf4;
  border-radius: 6px;
  font-size: 13px;
  color: #10b981;
}

/* Filters Section */
.filters-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.filters-title {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 12px 0;
}

.filter-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 20px;
  font-size: 13px;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  background-color: #f9fafb;
}

.filter-btn.active {
  background-color: #2c3e82;
  color: white;
  border-color: #2c3e82;
}

.filter-btn svg {
  width: 18px;
  height: 18px;
}

/* Navigate Button */
.navigate-button {
  width: 100%;
  background-color: #2c3e82;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  margin-bottom: 16px;
}

.navigate-button:hover {
  background-color: #243266;
}

/* Map Section */
.map-section {
  position: relative;
  background: white;
  border-radius: 12px;
  height: 250px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e0f2fe 0%, #bfdbfe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-marker {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.map-controls {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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

/* Shelters List */
.shelters-list {
  margin-bottom: 20px;
}

.list-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.count {
  font-size: 14px;
  font-weight: 400;
  color: #6b7280;
}

.shelter-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-top: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.shelter-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 12px;
}

.shelter-name {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  flex: 1;
}

.status-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  white-space: nowrap;
}

.shelter-address {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 12px 0;
}

.shelter-info {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #6b7280;
}

.navigate-btn {
  width: 100%;
  background-color: #2c3e82;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.navigate-btn:hover {
  background-color: #243266;
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
  color: #2c3e82;
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
