<script setup lang="ts">
import type { MenuItem } from '~/core/interfaces/layout'

const { menus } = defineProps<{
  menus: MenuItem[]
}>()
const { t } = useI18n()
</script>

<template>
  <q-toolbar class="bg-primary text-white shadow-2">
    <q-toolbar-title :shrink="true">
      <router-link :to="{ name: 'admin' }">
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <span v-if="$q.screen.gt.sm">
          SmartVite
        </span>
      </router-link>
    </q-toolbar-title>

    <q-btn
      v-for="item in menus"
      :key="item.label"
      :label="item.label" :to="item.to" stretch flat no-caps
      class="text-body2 text-weight-bold"
    />

    <q-space />

    <q-btn stretch flat :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </q-btn>

    <q-btn-dropdown stretch flat no-caps class="text-body2 text-weight-bold">
      <template #label>
        <span v-if="$q.screen.gt.sm">
          Leidison Siqueira
        </span>

        <q-avatar v-else icon="account_circle" />
      </template>

      <q-list>
        <q-item :to="{ name: 'admin-profile' }" clickable>
          <q-item-section avatar>
            <q-icon name="portrait" />
          </q-item-section>

          <q-item-section>{{ t('menu.your-profile') }}</q-item-section>
        </q-item>

        <q-item :to="{ name: 'admin-help' }" clickable>
          <q-item-section avatar>
            <q-icon name="help_outline" />
          </q-item-section>

          <q-item-section>{{ t('menu.help') }}</q-item-section>
        </q-item>

        <q-item :to="{ name: 'admin-settings' }" clickable>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>{{ t('menu.settings') }}</q-item-section>
        </q-item>

        <q-item :to="{ name: 'index' }" clickable>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section>{{ t('menu.sign-out') }}</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-toolbar>
</template>
