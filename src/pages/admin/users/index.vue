<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>{{ t('title.user.list') }}</div>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
