import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bb575f3e = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _3183d8b6 = () => interopDefault(import('../pages/chat.vue' /* webpackChunkName: "pages/chat" */))
const _9687028e = () => interopDefault(import('../pages/chat/index.vue' /* webpackChunkName: "pages/chat/index" */))
const _402248be = () => interopDefault(import('../pages/chat/_room.vue' /* webpackChunkName: "pages/chat/_room" */))
const _13888026 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _3a8c9f7b = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1414159a = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _75e0f98a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _cd043780 = () => interopDefault(import('../pages/protected.vue' /* webpackChunkName: "pages/protected" */))
const _0b27d504 = () => interopDefault(import('../pages/replays.vue' /* webpackChunkName: "pages/replays" */))
const _161e99dc = () => interopDefault(import('../pages/report.vue' /* webpackChunkName: "pages/report" */))
const _50ba1bfa = () => interopDefault(import('../pages/signout.vue' /* webpackChunkName: "pages/signout" */))
const _0b341d94 = () => interopDefault(import('../pages/store/index.vue' /* webpackChunkName: "pages/store/index" */))
const _c3ecb310 = () => interopDefault(import('../pages/streamers.vue' /* webpackChunkName: "pages/streamers" */))
const _74d6d21e = () => interopDefault(import('../pages/streamkey.vue' /* webpackChunkName: "pages/streamkey" */))
const _68fbcf2c = () => interopDefault(import('../pages/tos.vue' /* webpackChunkName: "pages/tos" */))
const _8a15d444 = () => interopDefault(import('../pages/wavecoin-acceptable-use-policy.vue' /* webpackChunkName: "pages/wavecoin-acceptable-use-policy" */))
const _a34c2750 = () => interopDefault(import('../pages/overlay/chat/index.vue' /* webpackChunkName: "pages/overlay/chat/index" */))
const _d605e944 = () => interopDefault(import('../pages/store/soldout.vue' /* webpackChunkName: "pages/store/soldout" */))
const _68b1b680 = () => interopDefault(import('../pages/overlay/chat/_id.vue' /* webpackChunkName: "pages/overlay/chat/_id" */))
const _5568a716 = () => interopDefault(import('../pages/embed/_id.vue' /* webpackChunkName: "pages/embed/_id" */))
const _70589a6c = () => interopDefault(import('../pages/odysee/_claimId.vue' /* webpackChunkName: "pages/odysee/_claimId" */))
const _70e4fc64 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4b37389e = () => interopDefault(import('../pages/_watch/index.vue' /* webpackChunkName: "pages/_watch/index" */))
const _066175e2 = () => interopDefault(import('../pages/_watch/replay/_replay.vue' /* webpackChunkName: "pages/_watch/replay/_replay" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _bb575f3e,
    name: "admin"
  }, {
    path: "/chat",
    component: _3183d8b6,
    children: [{
      path: "",
      component: _9687028e,
      name: "chat"
    }, {
      path: ":room",
      component: _402248be,
      name: "chat-room"
    }]
  }, {
    path: "/dashboard",
    component: _13888026,
    name: "dashboard"
  }, {
    path: "/login",
    component: _3a8c9f7b,
    name: "login"
  }, {
    path: "/privacy",
    component: _1414159a,
    name: "privacy"
  }, {
    path: "/profile",
    component: _75e0f98a,
    name: "profile"
  }, {
    path: "/protected",
    component: _cd043780,
    name: "protected"
  }, {
    path: "/replays",
    component: _0b27d504,
    name: "replays"
  }, {
    path: "/report",
    component: _161e99dc,
    name: "report"
  }, {
    path: "/signout",
    component: _50ba1bfa,
    name: "signout"
  }, {
    path: "/store",
    component: _0b341d94,
    name: "store"
  }, {
    path: "/streamers",
    component: _c3ecb310,
    name: "streamers"
  }, {
    path: "/streamkey",
    component: _74d6d21e,
    name: "streamkey"
  }, {
    path: "/tos",
    component: _68fbcf2c,
    name: "tos"
  }, {
    path: "/wavecoin-acceptable-use-policy",
    component: _8a15d444,
    name: "wavecoin-acceptable-use-policy"
  }, {
    path: "/overlay/chat",
    component: _a34c2750,
    name: "overlay-chat"
  }, {
    path: "/store/soldout",
    component: _d605e944,
    name: "store-soldout"
  }, {
    path: "/overlay/chat/:id",
    component: _68b1b680,
    name: "overlay-chat-id"
  }, {
    path: "/embed/:id?",
    component: _5568a716,
    name: "embed-id"
  }, {
    path: "/odysee/:claimId?",
    component: _70589a6c,
    name: "odysee-claimId"
  }, {
    path: "/",
    component: _70e4fc64,
    name: "index"
  }, {
    path: "/:watch",
    component: _4b37389e,
    name: "watch"
  }, {
    path: "/:watch/replay/:replay?",
    component: _066175e2,
    name: "watch-replay-replay"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
