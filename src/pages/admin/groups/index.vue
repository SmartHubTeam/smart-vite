<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>{{ t('title.group') }}</div>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
