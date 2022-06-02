<script setup lang="ts">
const { name, label } = defineProps<{
  name: string
  label: string
}>()
const { errorMessage, value } = useField(name)
</script>

<template>
  <q-input
    v-model="value"
    :label="label"
    :error-message="errorMessage"
    :error="!!errorMessage"
  />
</template>

