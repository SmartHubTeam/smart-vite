<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { FeedbackService } from '~/core/services/feedback-service'

const { t } = useI18n()

const validationSchema = yup.object({
  search: yup.string().required().email().label('Email address'),
  statuses: yup.array().required().label('Full name'),
  // password: yup.string().required().min(6).label('Password'),
  // terms: yup
  //   .boolean()
  //   .required()
  //   .isTrue('You must agree to terms and conditions')
  //   .label('terms agreement'),
  // subscribed: yup
  //   .boolean()
  //   .required()
  //   .isTrue('This is unusal but you have to subscribe')
  //   .label('subscription agreement'),
})

const initialValues = { search: '', statuses: [] }

const {
  handleSubmit,
} = useForm({ initialValues, validationSchema })

const onSubmit = handleSubmit((values, { resetForm }) => {
  console.log(JSON.stringify(values, null, 2))

  resetForm()

  FeedbackService.success()
})

const onReset = () => {
}
</script>

<template>
  <q-form
    class="q-gutter-md row items-start"
    @submit="onSubmit"
    @reset="onReset"
  >
    <InputWithValidation
      name="search"
      placeholder="Pesquise por nome ou e-mail"
      rounded outlined dense hide-bottom-space
    />

    <CheckboxWithValidation
      name="statuses"
      :options="[
        { label: 'Ativos', value: 1 },
        { label: 'Inativos', value: 2 },
      ]"
      inline hide-bottom-space
    />

    <q-btn label="Filtros avançados" color="primary" flat no-caps class="q-ml-sm" />
  </q-form>
</template>

