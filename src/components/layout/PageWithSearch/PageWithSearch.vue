<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
  <div>
    <PageTitle :title="title" />
  </div>
  <div class="fit row wrap justify-start items-start content-start q-mt-lg">
    <slot name="filter" />

    <q-space />

    <div class="row wrap justify-start items-start content-start q-gutter-sm">
      <slot name="actions" />
    </div>
  </div>
  <div>
    <slot />
  </div>
</template>
