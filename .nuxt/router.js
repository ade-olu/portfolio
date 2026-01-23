import Vue from "vue";
import Router from "vue-router";
import { normalizeURL, decode } from "ufo";
import { interopDefault } from "./utils";
import scrollBehavior from "./router.scrollBehavior.js";

const _6d0f2157 = () =>
  interopDefault(
    import(
      "..\\pages\\designs\\3d.vue" /* webpackChunkName: "pages/designs/3d" */
    ),
  );
const _ed6a0666 = () =>
  interopDefault(
    import(
      "..\\pages\\designs\\illustrations.vue" /* webpackChunkName: "pages/designs/illustrations" */
    ),
  );
const _4415204c = () =>
  interopDefault(
    import(
      "..\\pages\\designs\\ui.vue" /* webpackChunkName: "pages/designs/ui" */
    ),
  );
const _26c23dac = () =>
  interopDefault(
    import(
      "..\\pages\\designs\\works.vue" /* webpackChunkName: "pages/designs/works" */
    ),
  );
const _c1320e24 = () =>
  interopDefault(
    import(
      "..\\pages\\works\\ear1.vue" /* webpackChunkName: "pages/works/ear1" */
    ),
  );
const _58f2824a = () =>
  interopDefault(
    import(
      "..\\pages\\works\\findfont.vue" /* webpackChunkName: "pages/works/findfont" */
    ),
  );
const _52d6399e = () =>
  interopDefault(
    import(
      "..\\pages\\works\\getfood.vue" /* webpackChunkName: "pages/works/getfood" */
    ),
  );
const _3ba49885 = () =>
  interopDefault(
    import(
      "..\\pages\\works\\portfolio.vue" /* webpackChunkName: "pages/works/portfolio" */
    ),
  );
const _78a0caed = () =>
  interopDefault(
    import(
      "..\\pages\\works\\talkease.vue" /* webpackChunkName: "pages/works/talkease" */
    ),
  );
const _4caa3742 = () =>
  interopDefault(
    import(
      "..\\pages\\works\\travu.vue" /* webpackChunkName: "pages/works/travu" */
    ),
  );
const _84dcf92a = () =>
  interopDefault(
    import(
      "..\\pages\\works\\tripvoyager.vue" /* webpackChunkName: "pages/works/tripvoyager" */
    ),
  );
const _430b5633 = () =>
  interopDefault(
    import(
      "..\\pages\\works\\vect.vue" /* webpackChunkName: "pages/works/vect" */
    ),
  );
const _24313184 = () =>
  interopDefault(
    import(
      "..\\pages\\works\\weatherly.vue" /* webpackChunkName: "pages/works/weatherly" */
    ),
  );
const _36a61ce3 = () =>
  interopDefault(
    import("..\\pages\\index.vue" /* webpackChunkName: "pages/index" */),
  );

const emptyFn = () => {};

Vue.use(Router);

export const routerOptions = {
  mode: "history",
  base: "/",
  linkActiveClass: "nuxt-link-active",
  linkExactActiveClass: "nuxt-link-exact-active",
  scrollBehavior,

  routes: [
    {
      path: "/designs/3d",
      component: _6d0f2157,
      name: "designs-3d",
    },
    {
      path: "/designs/illustrations",
      component: _ed6a0666,
      name: "designs-illustrations",
    },
    {
      path: "/designs/ui",
      component: _4415204c,
      name: "designs-ui",
    },
    {
      path: "/designs/works",
      component: _26c23dac,
      name: "designs-works",
    },
    {
      path: "/works/ear1",
      component: _c1320e24,
      name: "works-ear1",
    },
    {
      path: "/works/findfont",
      component: _58f2824a,
      name: "works-findfont",
    },
    {
      path: "/works/getfood",
      component: _52d6399e,
      name: "works-getfood",
    },
    {
      path: "/works/portfolio",
      component: _3ba49885,
      name: "works-portfolio",
    },
    {
      path: "/works/talkease",
      component: _78a0caed,
      name: "works-talkease",
    },
    {
      path: "/works/travu",
      component: _4caa3742,
      name: "works-travu",
    },
    {
      path: "/works/tripvoyager",
      component: _84dcf92a,
      name: "works-tripvoyager",
    },
    {
      path: "/works/vect",
      component: _430b5633,
      name: "works-vect",
    },
    {
      path: "/works/weatherly",
      component: _24313184,
      name: "works-weatherly",
    },
    {
      path: "/",
      component: _36a61ce3,
      name: "index",
    },
  ],

  fallback: false,
};

export function createRouter(ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base;
  const router = new Router({ ...routerOptions, base });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === "string") {
      to = normalizeURL(to);
    }
    return resolve(to, current, append);
  };

  return router;
}
