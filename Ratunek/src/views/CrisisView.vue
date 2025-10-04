<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNav from '@/components/BottomNav.vue'

const isSideMenuOpen = ref(false)
const router = useRouter()

const navigateTo = (routeName: string) => {
  router.push({ name: routeName })
}
</script>

<template>
  <div class="crisis-view">
    <!-- Side Menu -->
    <SideMenu v-model:is-open="isSideMenuOpen" />

    <!-- Header -->
    <AppHeader
      title="mKryzys"
      subtitle="Tryb awaryjny"
      @open-menu="isSideMenuOpen = true"
    />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Crisis Situation Card -->
      <div class="crisis-situation-card">
        <div class="alert-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
        <h2 class="crisis-title">Sytuacja kryzysowa</h2>
        <p class="crisis-description">Wybierz odpowiednią akcję poniżej</p>
      </div>

      <!-- Action Cards -->
      <div class="action-cards-list">
        <!-- I Hear Alarm -->
        <div class="action-card" @click="navigateTo('alarm-sirens')">
          <div class="action-icon alarm-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
            </svg>
          </div>
          <div class="action-content">
            <h3 class="action-title">Słyszę alarm</h3>
            <p class="action-subtitle">Instrukcje krok po kroku</p>
          </div>
          <svg class="action-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- I'm Injured / Trapped -->
        <div class="action-card" @click="navigateTo('so-sound')">
          <div class="action-icon injured-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
            </svg>
          </div>
          <div class="action-content">
            <h3 class="action-title">Jestem ranny / uwięziony</h3>
            <p class="action-subtitle">Numery alarmowe i przycisk SOS</p>
          </div>
          <svg class="action-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- I See Injured Person -->
        <div class="action-card" @click="navigateTo('first-aid')">
          <div class="action-icon first-aid-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
            </svg>
          </div>
          <div class="action-content">
            <h3 class="action-title">Widzę ranną osobę</h3>
            <p class="action-subtitle">Instrukcje pierwszej pomocy</p>
          </div>
          <svg class="action-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Find Help Point -->
        <div class="action-card" @click="navigateTo('shelters')">
          <div class="action-icon location-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div class="action-content">
            <h3 class="action-title">Znajdź punkt pomocy</h3>
            <p class="action-subtitle">Mapa najbliższych schronów</p>
          </div>
          <svg class="action-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- I Need Help -->
        <div class="action-card">
          <div class="action-icon help-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm-1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <div class="action-content">
            <h3 class="action-title">Potrzebuję pomocy</h3>
            <p class="action-subtitle">Wyślij prośbę o pomoc</p>
          </div>
          <svg class="action-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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

/* Crisis Situation Card */
.crisis-situation-card {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  margin-bottom: 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.alert-icon {
  display: inline-flex;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  margin-bottom: 16px;
}

.crisis-title {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.crisis-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* Action Cards List */
.action-cards-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.action-card:active {
  transform: translateY(0);
}

.action-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Icon Colors */
.alarm-icon {
  background: #fff7ed;
  color: #f97316;
}

.injured-icon {
  background: #fef2f2;
  color: #dc2626;
}

.first-aid-icon {
  background: #eff6ff;
  color: #3b82f6;
}

.location-icon {
  background: #eff6ff;
  color: #3b82f6;
}

.help-icon {
  background: #f5f3ff;
  color: #a855f7;
}

.action-content {
  flex: 1;
}

.action-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.action-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.action-arrow {
  flex-shrink: 0;
}

/* Responsive Design */
@media (max-width: 480px) {
  .main-content {
    padding: 16px;
  }

  .crisis-situation-card {
    padding: 24px 20px;
  }

  .action-card {
    padding: 14px;
  }

  .action-icon {
    width: 44px;
    height: 44px;
  }

  .action-title {
    font-size: 15px;
  }

  .action-subtitle {
    font-size: 12px;
  }
}
</style>
