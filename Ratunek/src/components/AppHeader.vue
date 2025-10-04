<script setup lang="ts">
interface Props {
  title: string
  variant?: 'default' | 'primary'
  rightButtonType?: 'help' | 'search' | 'none'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  rightButtonType: 'none'
})

const emit = defineEmits<{
  openMenu: []
}>()
</script>

<template>
  <header class="app-header" :class="{ 'app-header--primary': variant === 'primary' }">
    <button class="icon-button" @click="emit('openMenu')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <h1 class="header-title">{{ title }}</h1>

    <!-- Right button -->
    <button v-if="rightButtonType === 'help'" class="icon-button help-button">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        <path d="M12 16v.01M12 12a2 2 0 0 1 2-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <button v-else-if="rightButtonType === 'search'" class="icon-button">
      🔍
    </button>
    <div v-else class="icon-button-placeholder"></div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: white;
  color: #2c3e82;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
}

.app-header--primary {
  background-color: #1e3a8a;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  flex: 1;
  text-align: center;
}

.icon-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
  font-size: 20px;
}

.icon-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.app-header--primary .icon-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.help-button {
  color: #6b7280;
}

.app-header--primary .help-button {
  color: white;
}

.icon-button-placeholder {
  width: 40px;
  height: 40px;
}
</style>
