import { Notify } from 'quasar'

export const FeedbackService = {
  success(message?: string): void {
    Notify.create({
      type: 'positive',
      message: message ?? 'Operação realizada com sucesso',
    })
  },
  error(e: any, message?: string): void {
    console.error('Ocorreu um erro: ', e)

    Notify.create({
      type: 'negative',
      message: `${message ?? 'Ocorreu um erro'}: ${e}`,
    })
  },
}
