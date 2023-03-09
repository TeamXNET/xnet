import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_4cbe69a4 from 'nuxt_plugin_plugin_4cbe69a4' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_sentryserver_60915f04 from 'nuxt_plugin_sentryserver_60915f04' // Source: ./sentry.server.js (mode: 'server')
import nuxt_plugin_sentryclient_69fddef6 from 'nuxt_plugin_sentryclient_69fddef6' // Source: ./sentry.client.js (mode: 'client')
import nuxt_plugin_plugin_e3d4466c from 'nuxt_plugin_plugin_e3d4466c' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_templatesplugin82a9b3fe_8a84d870 from 'nuxt_plugin_templatesplugin82a9b3fe_8a84d870' // Source: ./templates.plugin.82a9b3fe.js (mode: 'client')
import nuxt_plugin_googleanalytics_13a755a8 from 'nuxt_plugin_googleanalytics_13a755a8' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_7567d662 from 'nuxt_plugin_cookieuniversalnuxt_7567d662' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_toast_4f71912e from 'nuxt_plugin_toast_4f71912e' // Source: ./toast.js (mode: 'client')
import nuxt_plugin_workbox_3850cd54 from 'nuxt_plugin_workbox_3850cd54' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_d8f5ab2e from 'nuxt_plugin_metaplugin_d8f5ab2e' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_cfa66046 from 'nuxt_plugin_iconplugin_cfa66046' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_deviceplugin_1c45af76 from 'nuxt_plugin_deviceplugin_1c45af76' // Source: ./device.plugin.js (mode: 'all')
import nuxt_plugin_axios_0c16eaba from 'nuxt_plugin_axios_0c16eaba' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_axiossr_3ba944e1 from 'nuxt_plugin_axiossr_3ba944e1' // Source: ../plugins/axiossr (mode: 'all')
import nuxt_plugin_firebase_362e73fb from 'nuxt_plugin_firebase_362e73fb' // Source: ../plugins/firebase (mode: 'all')
import nuxt_plugin_VueClipboard_2d797278 from 'nuxt_plugin_VueClipboard_2d797278' // Source: ../plugins/VueClipboard (mode: 'all')
import nuxt_plugin_utils_f95abccc from 'nuxt_plugin_utils_f95abccc' // Source: ../plugins/utils.js (mode: 'all')
import nuxt_plugin_commandParser_ed9eaf3e from 'nuxt_plugin_commandParser_ed9eaf3e' // Source: ../plugins/commandParser.js (mode: 'client')
import nuxt_plugin_pwaclient_8372e9b8 from 'nuxt_plugin_pwaclient_8372e9b8' // Source: ../plugins/pwa.client.js (mode: 'client')
import nuxt_plugin_swhook_22585310 from 'nuxt_plugin_swhook_22585310' // Source: ../plugins/sw-hook (mode: 'client')
import nuxt_plugin_VueCountdown_cd7e8142 from 'nuxt_plugin_VueCountdown_cd7e8142' // Source: ../plugins/VueCountdown (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"bnb-blockchain","meta":[{"charset":"utf-8"},{"property":"viewport","content":"width=device-width, initial-scale=1"},{"property":"og:site_name","content":"[bitwave.tv]"},{"property":"og:image","content":"https:\u002F\u002Fcdn.bitwave.tv\u002Fstatic\u002Fimg\u002FBitwave_Banner.jpg","hid":"og:image"},{"property":"description","content":undefined,"hid":"description"}],"script":[],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico?3","crossorigin":"anonymouse"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Sans:500&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Material+Icons"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_4cbe69a4 === 'function') {
    await nuxt_plugin_plugin_4cbe69a4(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_sentryserver_60915f04 === 'function') {
    await nuxt_plugin_sentryserver_60915f04(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sentryclient_69fddef6 === 'function') {
    await nuxt_plugin_sentryclient_69fddef6(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_e3d4466c === 'function') {
    await nuxt_plugin_plugin_e3d4466c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_templatesplugin82a9b3fe_8a84d870 === 'function') {
    await nuxt_plugin_templatesplugin82a9b3fe_8a84d870(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_13a755a8 === 'function') {
    await nuxt_plugin_googleanalytics_13a755a8(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_7567d662 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_7567d662(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_4f71912e === 'function') {
    await nuxt_plugin_toast_4f71912e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_3850cd54 === 'function') {
    await nuxt_plugin_workbox_3850cd54(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_d8f5ab2e === 'function') {
    await nuxt_plugin_metaplugin_d8f5ab2e(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_cfa66046 === 'function') {
    await nuxt_plugin_iconplugin_cfa66046(app.context, inject)
  }

  if (typeof nuxt_plugin_deviceplugin_1c45af76 === 'function') {
    await nuxt_plugin_deviceplugin_1c45af76(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_0c16eaba === 'function') {
    await nuxt_plugin_axios_0c16eaba(app.context, inject)
  }

  if (typeof nuxt_plugin_axiossr_3ba944e1 === 'function') {
    await nuxt_plugin_axiossr_3ba944e1(app.context, inject)
  }

  if (typeof nuxt_plugin_firebase_362e73fb === 'function') {
    await nuxt_plugin_firebase_362e73fb(app.context, inject)
  }

  if (typeof nuxt_plugin_VueClipboard_2d797278 === 'function') {
    await nuxt_plugin_VueClipboard_2d797278(app.context, inject)
  }

  if (typeof nuxt_plugin_utils_f95abccc === 'function') {
    await nuxt_plugin_utils_f95abccc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_commandParser_ed9eaf3e === 'function') {
    await nuxt_plugin_commandParser_ed9eaf3e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pwaclient_8372e9b8 === 'function') {
    await nuxt_plugin_pwaclient_8372e9b8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_swhook_22585310 === 'function') {
    await nuxt_plugin_swhook_22585310(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_VueCountdown_cd7e8142 === 'function') {
    await nuxt_plugin_VueCountdown_cd7e8142(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
