<script setup lang="ts">
const { t } = useI18n()
const filter = reactive({})
</script>

<template>
  <PageWithSearch :title="t('title.user.list')">
    <template #filter>
      <UserSearchForm />
    </template>

    <template #actions>
      <q-btn label="Importar" color="positive" no-caps />
      <q-btn label="Cadastrar Usuário" color="primary" no-caps />
    </template>

    Tabela
  </PageWithSearch>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
