<template>
  <div style="-webkit-tap-highlight-color: transparent !important">
    <!-- Cursor -->
    <custom-cursor
      :targets="['a', 'button', 'input', '[data-cursor-hover]', 'img']"
      :circleColor="'#0F1221'"
      :circleColorHover="'#0F1221'"
      :dotColor="'#0F1221'"
      :dotColorHover="'#FD5531'"
      :hoverSize="0"
    ></custom-cursor>

    <Nuxt />
  </div>
</template>

<script>
import CustomCursor from "../components/CustomCursor";

export default {
  components: {
    CustomCursor,
  },

  mounted() {},
};
</script>

<style>
/* Fonts */
@font-face {
  font-family: "Grifter";
  src: url("../assets/fonts/Grifter-Bold.eot");
  src: local("Grifter Bold"), local("Grifter-Bold"),
    url("../assets/fonts/Grifter-Bold.eot?#iefix") format("embedded-opentype"),
    url("../assets/fonts/Grifter-Bold.woff2") format("woff2"),
    url("../assets/fonts/Grifter-Bold.woff") format("woff"),
    url("../assets/fonts/Grifter-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("../assets/fonts/PlusJakartaSans-Bold.eot");
  src: local("Plus Jakarta Sans Bold"), local("PlusJakartaSans-Bold"),
    url("../assets/fonts/PlusJakartaSans-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/PlusJakartaSans-Bold.woff2") format("woff2"),
    url("../assets/fonts/PlusJakartaSans-Bold.woff") format("woff"),
    url("../assets/fonts/PlusJakartaSans-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("../assets/fonts/PlusJakartaSans-Light.eot");
  src: local("Plus Jakarta Sans Light"), local("PlusJakartaSans-Light"),
    url("../assets/fonts/PlusJakartaSans-Light.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/PlusJakartaSans-Light.woff2") format("woff2"),
    url("../assets/fonts/PlusJakartaSans-Light.woff") format("woff"),
    url("../assets/fonts/PlusJakartaSans-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("../assets/fonts/PlusJakartaSans-ExtraBold.eot");
  src: local("Plus Jakarta Sans ExtraBold"), local("PlusJakartaSans-ExtraBold"),
    url("../assets/fonts/PlusJakartaSans-ExtraBold.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/PlusJakartaSans-ExtraBold.woff2") format("woff2"),
    url("../assets/fonts/PlusJakartaSans-ExtraBold.woff") format("woff"),
    url("../assets/fonts/PlusJakartaSans-ExtraBold.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("../assets/fonts/PlusJakartaSans-ExtraLight.eot");
  src: local("Plus Jakarta Sans ExtraLight"),
    local("PlusJakartaSans-ExtraLight"),
    url("../assets/fonts/PlusJakartaSans-ExtraLight.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/PlusJakartaSans-ExtraLight.woff2") format("woff2"),
    url("../assets/fonts/PlusJakartaSans-ExtraLight.woff") format("woff"),
    url("../assets/fonts/PlusJakartaSans-ExtraLight.ttf") format("truetype");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("../assets/fonts/PlusJakartaSans-Regular.eot");
  src: local("Plus Jakarta Sans Regular"), local("PlusJakartaSans-Regular"),
    url("../assets/fonts/PlusJakartaSans-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/PlusJakartaSans-Regular.woff2") format("woff2"),
    url("../assets/fonts/PlusJakartaSans-Regular.woff") format("woff"),
    url("../assets/fonts/PlusJakartaSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("../assets/fonts/PlusJakartaSans-Medium.eot");
  src: local("Plus Jakarta Sans Medium"), local("PlusJakartaSans-Medium"),
    url("../assets/fonts/PlusJakartaSans-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/PlusJakartaSans-Medium.woff2") format("woff2"),
    url("../assets/fonts/PlusJakartaSans-Medium.woff") format("woff"),
    url("../assets/fonts/PlusJakartaSans-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

html {
  font-family: "Plus Jakarta Sans";
  background-color: #fafafa;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

* {
  cursor: none;
}
</style>
