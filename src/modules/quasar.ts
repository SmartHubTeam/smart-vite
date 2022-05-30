import { Quasar } from 'quasar'
import { type UserModule } from '~/types'

// Setup Quasar
// https://quasar.dev/start/vite-plugin
export const install: UserModule = ({ app }) => {
  app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
  })
}
