module.exports = {
  purge: {
    enabled: true,
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.js",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { min: "360px" }, // small
      sm: { min: "375px" }, // medium
      "sm-plus": { min: "384px" }, // medium2
      "phone-sm": { min: "411px" }, // phone
      "phone-md": { min: "412px" }, // mob
      "phone-lg": { min: "414px" }, // mobile
      "tablet-xs": { min: "601px" }, // tab
      "tablet-sm": { min: "768px" }, // tablet1
      "tablet-md": { min: "800px" }, // tablet2
      "tablet-lg": { min: "962px" }, // tablet3
      lg: { min: "1024px" }, // large
      "laptop-sm": { min: "1152px" }, // macbook
      xl: { min: "1280px" }, // xlarge
      laptop: { min: "1366px" }, // lap
      desktop: { min: "1440px" }, // desktop
      "desktop-lg": { min: "1500px" }, // surface
      "2xl": { min: "1536px" }, // 2xlarge
      "3xl": { min: "1920px" }, // 3xlarge
    },
    extend: {
      colors: {
        "brand-orange": "#FD5531", // orange
        "brand-orange-light": "#FE673B", // orange2
        "background-light": "#F4F6FB", // light
        "background-light-alt": "#EBF1FF", // light2
        "white-soft": "#FAFAFA", // white
        "black-primary": "#0F1221", // black
        "black-opacity-50": "rgba(15, 18, 33, 0.5)", // bl
        "black-opacity-10": "rgba(15, 18, 33, 0.1)", // bl2
        "gray-dark": "#3F4551", // grey
        gray: "#858A93", // grey2
        "gray-light": "#CBCCCF", // grey3
        "orange-pastel": "#FAD0C7", // lightorange
        "travu-dark-1": "#111827", // travu
        "travu-dark-2": "#171E2D", // travu2
        weatherly: "#061f18", // weatherly
        vect: "#16131D", // vect
        "success-green": "#00BF69", // green
        ear1: "#00070F", // ear1
        getfood: "#064442", // getfood
        talkease: "#6C47FF", // talkease
        tripvoyager: "#3E64FF", // tripvoyager
        "purple-light": "#F3F5FF", // lightpurple
        "sky-light": "#ECF0F3", // lightskyblue
        "macos-dark": "#1E1F2B", // macos
        "oneui-dark": "#20222C", // oneui
        "purple-primary": "#546DEE", // purple
      },
      fontFamily: {
        heading: ["Grifter"], // head
        body: ["Plus Jakarta Sans"], // body
      },
      fontSize: {
        "heading-1": "2.125rem", // fsize
        "heading-2": "2.5rem", // tfsize
        "heading-3": "2.625rem", // ofsize
        "heading-4": "2.8rem", // lfsize
        "heading-5": "3.25rem", // xlfsize
        "heading-6": "3.375rem", // 2xlfsize
        display: "1.75rem", // fsz
      },
      lineHeight: {
        tight: "2.75rem", // pht
        normal: "3.25rem", // lht
        loose: "3.75rem", // lglht
        "extra-loose": "4.25rem", // xlglht
      },
      width: {
        "width-1": "1.0625rem", // hb3
        "width-2": "1.125rem", // hb
        "width-3": "1.5625rem", // media
        "width-4": "1.6875rem", // media2
        "width-5": "1.875rem", // media3
        "width-6": "2.813rem", // wt
        "width-7": "3.125rem", // sz
        "width-8": "3.75rem", // sz2
        "width-9": "4.5rem", // xt
        "width-10": "5.5rem", // xt2
        "width-11": "6.5rem", // xt3
        "width-12": "7.5rem", // ff
        "width-13": "8.5rem", // ff2
        "width-14": "9.5rem", // ff3
        "width-15": "10.5rem", // sz3
        "width-16": "10.938rem", // mwh
        "width-17": "11.5rem", // ff4
        "width-18": "12.979rem", // cs
        "width-19": "16.727rem", // cs2
        "width-20": "17.474rem", // cs3
      },
      height: {
        "height-1": "1.5625rem", // media
        "height-2": "1.625rem", // med
        "height-3": "1.6875rem", // media2
        "height-4": "1.8125rem", // med2
        "height-5": "1.875rem", // media3
        "height-6": "3.625rem", // bsz
        "height-7": "4.5rem", // bht
        "height-8": "4.75rem", // bht2
        "height-9": "6rem", // ht
        "height-10": "14.5rem", // mbh
        "height-11": "16.25rem", // mb
        "height-12": "16.5rem", // mb4
        "height-13": "18.5rem", // mb2
        "height-14": "18.75rem", // mb3
        "height-15": "19rem", // mbh4
        "height-16": "21.5rem", // mbh2
        "height-17": "25rem", // mbh5
        "height-18": "26.5rem", // mbh3
      },
      margin: {
        small: "1.125rem", // mr
        special: "21.076rem", // mr-sp
        large: "3.25rem", // t
      },
      padding: {
        "logo-padding": "4.125rem", // logo
        "padding-width-1": "17rem", // pw3
        "padding-width-2": "25rem", // pw
        "padding-width-3": "32rem", // pw2
        "spacing-1": "5.5rem", // spc
        "spacing-2": "6.5rem", // spc2
      },
      borderWidth: {
        thin: "1.5px", // one
      },
      maxWidth: {
        "max-width-1": "21.886rem", // mx2
        "max-width-2": "22rem", // mx
        "max-width-3": "22.886rem", // mx3
        "max-width-4": "23.136rem", // mx4
        "max-width-5": "26rem", // mw
        "max-width-6": "34rem", // mw2
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
      },
    },
  },
  variants: {
    margin: ["hover"],
    margin: ["responsive", "hover"],
    extend: {},
  },
  plugins: [],
};
