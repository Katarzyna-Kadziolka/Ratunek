<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
}>()

const closeSideMenu = () => {
  emit('update:isOpen', false)
}

const navigateToBackpack = () => {
  closeSideMenu()
  router.push('/backpack')
}

const navigateToAlarms = () => {
  closeSideMenu()
  router.push('/alarm-sirens')
}

const navigateToShelters = () => {
  closeSideMenu()
  router.push('/shelters')
}

const navigateToEvacuationRoutes = () => {
  closeSideMenu()
  router.push('/evacuation-routes')
}

const navigateToFirstAid = () => {
  closeSideMenu()
  router.push('/first-aid')
}

const navigateToRCBAlerts = () => {
  closeSideMenu()
  router.push('/rcb-alerts')
}

const navigateToSOSound = () => {
  closeSideMenu()
  router.push('/so-sound')
}

const navigateToSettings = () => {
  closeSideMenu()
  router.push('/settings')
}
</script>

<template>
  <!-- Side Menu Overlay -->
  <div v-if="isOpen" class="side-menu-overlay" @click="closeSideMenu"></div>

  <!-- Side Menu Drawer -->
  <aside class="side-menu" :class="{ 'side-menu-open': isOpen }">
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

      <button class="side-menu-item" @click="navigateToEvacuationRoutes">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Drogi ewakuacyjne</span>
      </button>

      <button class="side-menu-item" @click="navigateToFirstAid">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Pierwsza pomoc</span>
      </button>

      <button class="side-menu-item" @click="navigateToSOSound">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Dźwięk SOS</span>
      </button>

      <button class="side-menu-item" @click="navigateToRCBAlerts">
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

      <button class="side-menu-item" @click="navigateToSettings">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span>Ustawienia</span>
      </button>
    </nav>
  </aside>
</template>

<style scoped>
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
