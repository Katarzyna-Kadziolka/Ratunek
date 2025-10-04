<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <nav class="bottom-nav">
    <button class="nav-item" @click="router.push('/')">
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

    <button class="nav-item" @click="router.push('/crisis')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L1 21h22L12 2zm0 4l8.5 15h-17L12 6zm1 11h-2v2h2v-2zm0-6h-2v4h2v-4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Kryzys</span>
    </button>

  </nav>
</template>

<style scoped>
.bottom-nav {
  width: 100%;
  position: sticky;
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
</style>
