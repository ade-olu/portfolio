// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Remove 'target: static' - Nuxt 4 handles this automatically

  // Nuxt 4 compatibility
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-01-23",

  // @ts-expect-error - nitro config is valid but not in types
  nitro: {
    preset: "static" as const,
  },

  app: {
    // Add page transition here
    pageTransition: {
      name: "page",
      mode: "out-in",
    },

    head: {
      title: "Oluwatobiloba Adegbaju - Web Developer & UI/UX Designer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "I'm a Web Developer and UI/UX Designer who loves building significant experiences for people.",
        },
        { name: "theme-color", content: "#FD5531" },
        {
          name: "apple-mobile-web-app-title",
          content: "Oluwatobiloba Adegbaju",
        },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://adeolu.netlify.app" },
        {
          property: "og:title",
          content: "Web Developer & UI/UX Designer",
        },
        { property: "og:site_name", content: "Oluwatobiloba Adegbaju" },
        {
          property: "og:image",
          content: "https://adeolu.netlify.app/twitter.png",
        },
        {
          property: "og:image:secure_url",
          content: "https://adeolu.netlify.app/twitter.png",
        },
        {
          property: "og:image:alt",
          content: "Web Developer & UI/UX Designer",
        },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@tobiadegbaju" },
        { name: "twitter:title", content: "Oluwatobiloba Adegbaju" },
        {
          name: "twitter:description",
          content: "Web Developer & UI/UX Designer",
        },
        {
          name: "twitter:image",
          content: "https://adeolu.netlify.app/twitter.png",
        },
        {
          name: "twitter:image:alt",
          content: "Web Developer & UI/UX Designer",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
        { rel: "canonical", href: "https://adeolu.netlify.app" },
      ],
    },
  },

  // CSS is now in app.config or here
  css: [
    "~/assets/styles/transition.css",
    "~/assets/styles/nav.css",
    "~/assets/styles/tailwind.css",
  ],

  // Modules
  modules: ["@nuxtjs/tailwindcss"],

  // Components auto-import (enabled by default, but explicit is clear)
  components: true,

  // Build configuration
  build: {
    transpile: ["gsap"],
  },

  // TypeScript config (optional but recommended)
  typescript: {
    strict: false,
    shim: false,
  },
}) as any; // Add type assertion here
