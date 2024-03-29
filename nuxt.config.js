export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Oluwatobiloba Adegbaju - Frontend Developer & UI/UX Designer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I’m a Frontend Developer and UI/UX Designer who loves building significant experiences for people.',
      },
      {
        name: 'theme-color',
        property: 'theme-color',
        content: '#FD5531',
      },
      {
        name: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content: 'Oluwatobiloba Adegbaju',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://adeolu.dev',
      },
      {
        name: 'og:title',
        property: 'og:title',
        content: 'Frontend Developer & UI/UX Designer',
      },
      {
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'Oluwatobiloba Adegbaju',
      },
      {
        name: 'og:image',
        property: 'og:image',
        content: 'https://adeolu.dev/twitter.png',
      },
      {
        name: 'twitter:title',
        property: 'og:title',
        content: 'Oluwatobiloba Adegbaju',
      },

      {
        name: 'twitter:site_name',
        property: 'og:site_name',
        content: '@tobiadegbaju',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:description',
        property: 'twitter:description',
        content: 'Frontend Developer & UI/UX Designer',
      },

      {
        name: 'twitter:image',
        content: 'https://adeolu.dev/twitter.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Frontend Developer & UI/UX Designer',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://adeolu.dev/twitter.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Frontend Developer & UI/UX Designer',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/logo.svg' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://adeolu.dev',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/transition.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-scrollto/nuxt',

    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },
}
