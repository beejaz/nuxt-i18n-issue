import en from '~/locales/en.json'
import sv from '~/locales/sv.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'sv',
  messages: { sv, en },
}))
