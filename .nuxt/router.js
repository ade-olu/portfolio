import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3309d78c = () => interopDefault(import('..\\pages\\designs\\3d.vue' /* webpackChunkName: "pages/designs/3d" */))
const _4fd96e0a = () => interopDefault(import('..\\pages\\designs\\illustrations.vue' /* webpackChunkName: "pages/designs/illustrations" */))
const _576162bd = () => interopDefault(import('..\\pages\\designs\\ui.vue' /* webpackChunkName: "pages/designs/ui" */))
const _1fe03be9 = () => interopDefault(import('..\\pages\\designs\\works.vue' /* webpackChunkName: "pages/designs/works" */))
const _18d2ebd1 = () => interopDefault(import('..\\pages\\works\\ear1.vue' /* webpackChunkName: "pages/works/ear1" */))
const _03aeef84 = () => interopDefault(import('..\\pages\\works\\findfont.vue' /* webpackChunkName: "pages/works/findfont" */))
const _609a3d24 = () => interopDefault(import('..\\pages\\works\\getfood.vue' /* webpackChunkName: "pages/works/getfood" */))
const _653bfb82 = () => interopDefault(import('..\\pages\\works\\portfolio.vue' /* webpackChunkName: "pages/works/portfolio" */))
const _e4856448 = () => interopDefault(import('..\\pages\\works\\travu.vue' /* webpackChunkName: "pages/works/travu" */))
const _2b6f8105 = () => interopDefault(import('..\\pages\\works\\venzone.vue' /* webpackChunkName: "pages/works/venzone" */))
const _3da293f4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/designs/3d",
    component: _3309d78c,
    name: "designs-3d"
  }, {
    path: "/designs/illustrations",
    component: _4fd96e0a,
    name: "designs-illustrations"
  }, {
    path: "/designs/ui",
    component: _576162bd,
    name: "designs-ui"
  }, {
    path: "/designs/works",
    component: _1fe03be9,
    name: "designs-works"
  }, {
    path: "/works/ear1",
    component: _18d2ebd1,
    name: "works-ear1"
  }, {
    path: "/works/findfont",
    component: _03aeef84,
    name: "works-findfont"
  }, {
    path: "/works/getfood",
    component: _609a3d24,
    name: "works-getfood"
  }, {
    path: "/works/portfolio",
    component: _653bfb82,
    name: "works-portfolio"
  }, {
    path: "/works/travu",
    component: _e4856448,
    name: "works-travu"
  }, {
    path: "/works/venzone",
    component: _2b6f8105,
    name: "works-venzone"
  }, {
    path: "/",
    component: _3da293f4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
