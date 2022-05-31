<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>{{ t('title.group.update') }} - {{ 'Administrador' }}</div>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
