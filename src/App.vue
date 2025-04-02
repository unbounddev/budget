<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu'
import MenuIcon from './components/icons/MenuIcon.vue'
const visible = ref(true)
const items = [
  { label: 'Home', route: '/' },
  { label: 'Transactions', route: '/transactions' },
  { label: 'Budget', route: '/budget' },
  { label: 'Settings', route: '/settings' },
]
</script>

<template>
  <header>
    <Drawer v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div class="drawer-container">
          <div class="drawer-close">
            <span @click="closeCallback">
              <MenuIcon :size="28" />
            </span>
          </div>
          <Menu style="border: none" :model="items">
            <template #item="{ item, props }">
              <RouterLink :to="item.route" v-slot="{ href, navigate }" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                  <!-- <span :class="item.icon" /> -->
                  <span style="font-weight: bold">{{ item.label }}</span>
                </a>
              </RouterLink>
            </template>
          </Menu>
        </div>
      </template>
    </Drawer>
    <span style="cursor: pointer" @click="visible = true">
      <MenuIcon :size="28" />
    </span>
  </header>
  <RouterView />
</template>

<style scoped>
.drawer-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.drawer-close {
  display: flex;
  justify-content: end;
  margin: 0.5rem;
}

.drawer-close > span {
  cursor: pointer;
}
</style>
