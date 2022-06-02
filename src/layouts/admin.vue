<script setup lang="ts">
import type { MenuItem } from '~/core/interfaces/layout'
import { MenuService } from '~/core/services/menu-service'

const { t } = useI18n()
const menus: MenuItem[] = reactive(MenuService.list(t))
</script>

<template>
  <q-layout view="hHh lpR fff">
    <q-header class="bg-primary text-white">
      <Toolbar :menus="$q.screen.gt.sm && menus.filter(item => item.enabled())" />
    </q-header>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
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
