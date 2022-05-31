<script setup lang="ts">
// const user = useUserStore()
// const name = $ref(user.savedName)

const router = useRouter()

const { t } = useI18n()
</script>

<template>
  <q-btn @click="() => router.push('/admin')">
    {{ t('button.login') }}
  </q-btn>
</template>

<route lang="yaml">
meta:
  layout: promotional
</route>
