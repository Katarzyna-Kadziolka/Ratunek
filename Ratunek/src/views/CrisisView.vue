<script setup lang="ts">
import { ref } from 'vue'
import { useCrisisStore } from '@/stores/crisis'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const crisisStore = useCrisisStore()
const isSideMenuOpen = ref(false)
</script>

<template>
  <div class="crisis-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="Kryzys"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Need Help Alert Card -->
      <div class="need-help-card">
        <div class="alert-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 4l8.5 15h-17L12 6zm1 11h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
          </svg>
        </div>
        <h2 class="alert-title">Potrzebuję pomocy</h2>
        <p class="alert-description">
          Wyślij prośbę o pomoc do użytkowników w promieniu {{ crisisStore.searchRadius }} m
        </p>
        <button class="send-help-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Wyślij prośbę o pomoc
        </button>
      </div>

      <!-- Crisis Type Cards Grid -->
      <div class="crisis-type-grid">
        <button class="crisis-type-card crisis-card-orange">
          <div class="crisis-icon crisis-icon-orange">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" stroke="currentColor" stroke-width="2" fill="none"/>
              <circle cx="7" cy="17" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <circle cx="17" cy="17" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
          </div>
          <span class="crisis-label">Wypadek</span>
        </button>

        <button class="crisis-type-card crisis-card-blue">
          <div class="crisis-icon crisis-icon-blue">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" fill="currentColor"/>
            </svg>
          </div>
          <span class="crisis-label">Nagły wypadek</span>
        </button>

        <button class="crisis-type-card crisis-card-purple">
          <div class="crisis-icon crisis-icon-purple">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2c-1.3 2.7-2 5.3-2 8 0 3.3 1.8 5 4 5s4-1.7 4-5c0-2.7-.7-5.3-2-8-1.3 2-2 4-2 6 0 1.1-.4 2-1 2s-1-.9-1-2c0-2-.7-4-2-6z" fill="currentColor"/>
            </svg>
          </div>
          <span class="crisis-label">Pożar</span>
        </button>

        <button class="crisis-type-card crisis-card-green">
          <div class="crisis-icon crisis-icon-green">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
              <path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <span class="crisis-label">Inne</span>
        </button>
      </div>

      <!-- Active Requests Section -->
      <div class="active-requests-section">
        <h2 class="section-title">Aktywne prośby w pobliżu</h2>

        <div class="requests-list">
          <div
            v-for="request in crisisStore.requestsInRadius"
            :key="request.id"
            class="request-card"
          >
            <div class="request-header">
              <div class="request-icon" :style="{ background: crisisStore.getCrisisTypeColor(request.type) }">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path v-if="request.type === 'accident'" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="white" stroke-width="1.5" fill="none"/>
                  <path v-else-if="request.type === 'medical-emergency'" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="white"/>
                </svg>
              </div>
              <div class="request-info">
                <h3 class="request-title">{{ request.title }}</h3>
                <p class="request-time">{{ request.time }}</p>
              </div>
            </div>

            <p class="request-description">{{ request.description }}</p>

            <div class="request-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="margin-right: 6px;">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#6b7280" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="#6b7280" stroke-width="2"/>
              </svg>
              <span>{{ request.distance }} m od Ciebie</span>
            </div>

            <div class="request-actions">
              <button class="action-button primary" @click="crisisStore.offerHelp(request.id)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 6px;">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Pokaż drogę
              </button>
              <button class="action-button secondary" @click="crisisStore.callEmergency(request.id)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 6px;">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
                </svg>
                Zadzwoń
              </button>
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
.crisis-view {
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

/* Need Help Card */
.need-help-card {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-left: 4px solid #dc2626;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
}

.alert-icon {
  display: inline-flex;
  width: 64px;
  height: 64px;
  background: #dc2626;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 16px;
}

.alert-title {
  font-size: 24px;
  font-weight: 700;
  color: #991b1b;
  margin: 0 0 8px 0;
}

.alert-description {
  font-size: 14px;
  color: #b91c1c;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.send-help-button {
  width: 100%;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}

.send-help-button:hover {
  background: #b91c1c;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(220, 38, 38, 0.4);
}

.send-help-button:active {
  transform: translateY(0);
}

/* Crisis Type Grid */
.crisis-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.crisis-type-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 20px;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  min-height: 160px;
}

.crisis-type-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.crisis-type-card:active {
  transform: translateY(0);
}

/* Card-specific border colors */
.crisis-card-orange {
  border-color: #fed7aa;
  background: #fffbf5;
}

.crisis-card-blue {
  border-color: #bfdbfe;
  background: #f0f9ff;
}

.crisis-card-purple {
  border-color: #e9d5ff;
  background: #faf5ff;
}

.crisis-card-green {
  border-color: #d1fae5;
  background: #f0fdf4;
}

.crisis-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.crisis-icon-orange {
  background: #f97316;
  color: white;
}

.crisis-icon-blue {
  background: #3b82f6;
  color: white;
}

.crisis-icon-purple {
  background: #a855f7;
  color: white;
}

.crisis-icon-green {
  background: #22c55e;
  color: white;
}

.crisis-label {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
}

/* Active Requests Section */
.active-requests-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
}

.requests-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Request Card */
.request-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.request-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.request-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.request-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.request-info {
  flex: 1;
}

.request-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.request-time {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.request-description {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.request-location {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
}

.request-actions {
  display: flex;
  gap: 12px;
}

.action-button {
  flex: 1;
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.action-button.primary {
  background: #1e3a8a;
  color: white;
  box-shadow: 0 2px 8px rgba(30, 58, 138, 0.2);
}

.action-button.primary:hover {
  background: #1e40af;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
}

.action-button.secondary {
  background: white;
  color: #374151;
  border: 1px solid #e5e7eb;
}

.action-button.secondary:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.action-button:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 480px) {

  .request-actions {
    flex-direction: column;
  }

  .action-button {
    width: 100%;
  }
}
</style>
