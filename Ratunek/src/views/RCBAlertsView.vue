<script setup lang="ts">
import { ref } from 'vue'
import { useRCBAlertsStore } from '@/stores/rcbalerts'
import type { FilterType } from '@/stores/rcbalerts'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const rcbAlertsStore = useRCBAlertsStore()
const isSideMenuOpen = ref(false)
</script>

<template>
  <div class="rcb-alerts-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Alerty RCB"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Featured Alert Card -->
      <div v-if="rcbAlertsStore.latestAlert" class="featured-alert-card">
        <div class="alert-priority-badge" :style="{ color: rcbAlertsStore.getPriorityColor(rcbAlertsStore.latestAlert.priority) }">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;">
            <circle cx="12" cy="12" r="10"/>
          </svg>
          {{ rcbAlertsStore.getPriorityLabel(rcbAlertsStore.latestAlert.priority) }}
        </div>
        <div class="alert-time">{{ rcbAlertsStore.latestAlert.time }}</div>

        <h2 class="alert-title">{{ rcbAlertsStore.latestAlert.title }}</h2>

        <div class="alert-meta">
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Dzisiaj</span>
          </div>
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>{{ rcbAlertsStore.latestAlert.location }}</span>
          </div>
        </div>

        <p class="alert-description">{{ rcbAlertsStore.latestAlert.description }}</p>

        <button class="details-button">
          Pokaż szczegóły
        </button>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button
          v-for="filter in ['all', 'my-region', '24h'] as FilterType[]"
          :key="filter"
          class="filter-tab"
          :class="{ 'active': rcbAlertsStore.activeFilter === filter }"
          @click="rcbAlertsStore.setFilter(filter)"
        >
          {{ rcbAlertsStore.getFilterLabel(filter) }}
        </button>
      </div>

      <!-- Info Card -->
      <div class="info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="info-content">
          <h3 class="info-title">Jak działają alerty RCB?</h3>
          <p class="info-text">
            Rządowe Centrum Bezpieczeństwa wysyła ostrzeżenia o zagrożeniach bezpośrednio na Twój telefon.
          </p>
          <button class="info-link">Więcej informacji</button>
        </div>
      </div>

      <!-- Recent Alerts Section -->
      <div class="recent-alerts-section">
        <h2 class="section-title">Ostatnie alerty</h2>

        <div class="alerts-list">
          <div
            v-for="alert in rcbAlertsStore.filteredAlerts.slice(1)"
            :key="alert.id"
            class="alert-card"
          >
            <div class="alert-header">
              <div class="alert-priority-label" :style="{ color: rcbAlertsStore.getPriorityColor(alert.priority) }">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                {{ rcbAlertsStore.getPriorityLabel(alert.priority) }}
              </div>
              <span class="alert-time-small">{{ alert.time }}</span>
            </div>

            <h3 class="alert-card-title">{{ alert.title }}</h3>

            <div class="alert-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span>{{ alert.location }}</span>
            </div>

            <p class="alert-card-description">{{ alert.description }}</p>

            <button class="show-map-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="margin-right: 6px;">
                <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Pokaż na mapie
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
.rcb-alerts-view {
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

/* Featured Alert Card */
.featured-alert-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.alert-priority-badge {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.alert-time {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
}

.alert-title {
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.alert-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #6b7280;
}

.meta-item svg {
  color: #9ca3af;
}

.alert-description {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.details-button {
  width: 100%;
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 14px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.details-button:hover {
  background-color: #1e40af;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  background: white;
  padding: 6px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.filter-tab {
  flex: 1;
  background: none;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
}

.filter-tab:hover {
  background-color: #f9fafb;
}

.filter-tab.active {
  background-color: #1e3a8a;
  color: white;
}

/* Info Card */
.info-card {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.info-icon {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e3a8a;
  flex-shrink: 0;
}

.info-content {
  flex: 1;
}

.info-title {
  font-size: 15px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0 0 6px 0;
}

.info-text {
  font-size: 13px;
  color: #1e40af;
  line-height: 1.5;
  margin: 0 0 8px 0;
}

.info-link {
  background: none;
  border: none;
  color: #1e3a8a;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
}

.info-link:hover {
  color: #1e40af;
}

/* Recent Alerts Section */
.recent-alerts-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
}

.alerts-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Alert Card */
.alert-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.alert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.alert-priority-label {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.alert-time-small {
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
}

.alert-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.alert-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 8px;
}

.alert-location svg {
  color: #9ca3af;
}

.alert-card-description {
  font-size: 13px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0 0 12px 0;
}

.show-map-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
}

.show-map-button:hover {
  background-color: #f9fafb;
  border-color: #d1d5db;
}
</style>
