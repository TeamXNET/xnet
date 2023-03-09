import VueLib from 'vue'
import merge from 'lodash.mergewith'
import * as Sentry from '@sentry/browser'

export default function (ctx, inject) {
  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
