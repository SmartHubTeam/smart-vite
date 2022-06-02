<script setup lang="ts">
const { name, label, options, inline, dense } = defineProps<{
  name: string
  label: string
  options: any[]
  inline: boolean
  dense: boolean
}>()
const { errorMessage, value } = useField(name)
</script>

<template>
  <q-field
    :borderless="true"
    :error="!!errorMessage"
    :error-message="errorMessage"
  >
    <q-option-group
      v-model="value"
      :label="label"
      :options="options"
      :inline="inline"
      :dense="dense"
      type="checkbox"
    />
  </q-field>
</template>

