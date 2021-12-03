import Vue from 'vue'

const components = {
  CustomCursor: () => import('../..\\components\\CustomCursor.vue' /* webpackChunkName: "components/custom-cursor" */).then(c => c.default || c),
  Designs: () => import('../..\\components\\Designs.vue' /* webpackChunkName: "components/designs" */).then(c => c.default || c),
  DesignsNav: () => import('../..\\components\\DesignsNav.vue' /* webpackChunkName: "components/designs-nav" */).then(c => c.default || c),
  MainNav: () => import('../..\\components\\MainNav.vue' /* webpackChunkName: "components/main-nav" */).then(c => c.default || c),
  Navigation: () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c),
  Projects: () => import('../..\\components\\Projects.vue' /* webpackChunkName: "components/projects" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
