export { default as CustomCursor } from '../..\\components\\CustomCursor.vue'
export { default as Designs } from '../..\\components\\Designs.vue'
export { default as DesignsNav } from '../..\\components\\DesignsNav.vue'
export { default as MainNav } from '../..\\components\\MainNav.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as Projects } from '../..\\components\\Projects.vue'

export const LazyCustomCursor = import('../..\\components\\CustomCursor.vue' /* webpackChunkName: "components/custom-cursor" */).then(c => c.default || c)
export const LazyDesigns = import('../..\\components\\Designs.vue' /* webpackChunkName: "components/designs" */).then(c => c.default || c)
export const LazyDesignsNav = import('../..\\components\\DesignsNav.vue' /* webpackChunkName: "components/designs-nav" */).then(c => c.default || c)
export const LazyMainNav = import('../..\\components\\MainNav.vue' /* webpackChunkName: "components/main-nav" */).then(c => c.default || c)
export const LazyNavigation = import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c)
export const LazyProjects = import('../..\\components\\Projects.vue' /* webpackChunkName: "components/projects" */).then(c => c.default || c)
