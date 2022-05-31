<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <q-layout view="hHh lpR fff">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title :shrink="true">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          SmartVite
        </q-toolbar-title>

        <nav v-if="$q.screen.gt.sm" class="q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <router-link :to="{ name: 'admin' }" class="text-white">
            {{ t('menu.dashboard') }}
          </router-link>

          <router-link :to="{ name: 'admin-groups' }" class="text-white">
            {{ t('menu.groups') }}
          </router-link>

          <router-link :to="{ name: 'admin-users' }" class="text-white">
            {{ t('menu.users') }}
          </router-link>
        </nav>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn dense flat no-wrap>
            <span class="text-capitalize text-body2 text-weight-bold">Leidison Siqueira</span>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item :to="{ name: 'admin-profile' }" clickable class="GL__menu-link">
                  <q-item-section>{{ t('menu.your-profile') }}</q-item-section>
                </q-item>
                <q-separator />
                <q-item :to="{ name: 'admin-help' }" clickable class="GL__menu-link">
                  <q-item-section>{{ t('menu.help') }}</q-item-section>
                </q-item>
                <q-item :to="{ name: 'admin-settings' }" clickable class="GL__menu-link">
                  <q-item-section>{{ t('menu.settings') }}</q-item-section>
                </q-item>
                <q-item :to="{ name: 'index' }" clickable class="GL__menu-link">
                  <q-item-section>{{ t('menu.sign-out') }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bg-white>
      <q-toolbar>
        <q-space />
        <a href="https://smarthub.com.br">
          <q-img
            src="https://drive.google.com/u/0/uc?id=1Rj5l5vOPdXNuNpQjj-SV7IFF_9vCdps7&export=download"
            style="width: 150px"
          />
        </a>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
