<script setup lang="ts">
import { useBackpackStore } from '@/stores/backpack'

const backpackStore = useBackpackStore()
</script>

<template>
  <div class="emergency-backpack-view">
    <!-- Header -->
    <header class="app-header">
      <button class="icon-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <h1 class="header-title">Plecak ewakuacyjny</h1>
      <button class="icon-button help-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <path d="M12 16v.01M12 12a2 2 0 0 1 2-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </header>

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
          <h2 class="info-card-title">Emergency Backpack</h2>
          <p class="info-card-subtitle">Essential items for emergency situations</p>
          <p class="info-card-description">
            Prepare your emergency backpack with essential items that can help you survive for 72 hours during crisis situations.
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
    <nav class="bottom-nav">
      <div class="pagination">
        <button class="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Home</span>
        </button>

        <div class="page-indicator">
          <button class="page-nav-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span class="page-number">5 / 7</span>
          <button class="page-nav-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <button class="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Lista</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.emergency-backpack-view {
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
}

.icon-button:hover {
  background-color: #f0f2f5;
}

.help-button {
  color: #6b7280;
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

/* Bottom Navigation */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 12px 20px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);
}

.pagination {
  display: flex;
  justify-content: space-between;
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
  padding: 4px 8px;
  font-size: 12px;
}

.nav-item:hover {
  color: #2c3e82;
}

.page-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  padding: 8px 16px;
}

.page-nav-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  display: flex;
  align-items: center;
  padding: 4px;
}

.page-nav-button:hover {
  color: #2c3e82;
}

.page-number {
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  min-width: 50px;
  text-align: center;
}
</style>
