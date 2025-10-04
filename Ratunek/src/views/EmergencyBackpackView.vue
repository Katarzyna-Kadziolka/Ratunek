<script setup lang="ts">
import { ref } from 'vue'
import { useBackpackStore } from '@/stores/backpack'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const backpackStore = useBackpackStore()
const isSideMenuOpen = ref(false)
</script>

<template>
  <div class="emergency-backpack-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Plecak ewakuacyjny"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Emergency Backpack Info Card -->
      <div class="info-card">
        <div class="info-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div class="info-card-content">
          <h2 class="info-card-title">Plecak ewakuacyjnyk</h2>
          <p class="info-card-subtitle">Niezbędne przedmioty na wypadek sytuacji awaryjnych</p>
          <p class="info-card-description">
            Przygotuj plecak awaryjny z niezbędnymi przedmiotami, które pomogą Ci przetrwać 72 godziny w sytuacji kryzysowej.
          </p>
        </div>
        <div class="progress-indicator">
          <span class="progress-label">Postęp</span>
          <span class="progress-value">{{ backpackStore.progress }}</span>
        </div>
      </div>

      <!-- Checklist Items -->
      <div class="checklist">
        <div
          v-for="item in backpackStore.items"
          :key="item.id"
          class="checklist-item"
        >
          <input
            type="checkbox"
            :id="item.id"
            :checked="item.checked"
            @change="backpackStore.toggleItem(item.id)"
            class="checkbox"
          />
          <label :for="item.id" class="item-content">
            <div class="item-icon">{{ item.icon }}</div>
            <div class="item-text">
              <h3 class="item-title">{{ item.title }}</h3>
              <p class="item-description">{{ item.description }}</p>
            </div>
          </label>
        </div>
      </div>

      <!-- Check Knowledge Button -->
      <button class="check-knowledge-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Sprawdź swoją wiedzę
      </button>
    </main>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<style scoped>
.emergency-backpack-view {
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

/* Info Card */
.info-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  position: relative;
}

.info-card-icon {
  width: 56px;
  height: 56px;
  background-color: #2c3e82;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 16px;
}

.info-card-title {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.info-card-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 12px 0;
}

.info-card-description {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

.progress-indicator {
  position: absolute;
  top: 24px;
  right: 24px;
  text-align: right;
}

.progress-label {
  display: block;
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
}

.progress-value {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e82;
}

/* Checklist */
.checklist {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.checklist-item {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.checkbox {
  width: 20px;
  height: 20px;
  margin-top: 4px;
  cursor: pointer;
  flex-shrink: 0;
}

.item-content {
  display: flex;
  gap: 12px;
  flex: 1;
  cursor: pointer;
  align-items: flex-start;
}

.item-icon {
  width: 40px;
  height: 40px;
  background-color: #e8f4ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.item-text {
  flex: 1;
}

.item-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.item-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

/* Check Knowledge Button */
.check-knowledge-button {
  width: 100%;
  background-color: #2c3e82;
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
  margin-bottom: 24px;
}

.check-knowledge-button:hover {
  background-color: #243266;
}

</style>
