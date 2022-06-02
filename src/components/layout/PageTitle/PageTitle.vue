<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
  <span class="page-title">{{ title }}</span>
</template>
