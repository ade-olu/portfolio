<template>
  <div>
      <!-- Cursor -->
   <custom-cursor
      :targets="['img', 'a', 'button', 'input', 'your-hover-class']"
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
import CustomCursor from '../components/CustomCursor'

    export default {
     components: {
        CustomCursor
     }
    }
</script>

<style>
/* Fonts */
@font-face {
    font-family: 'Eudoxus Sans';
    src: url('../assets/fonts/EudoxusSans-Bold.eot');
    src: local('Eudoxus Sans Bold'), local('EudoxusSans-Bold'),
        url('../assets/fonts/EudoxusSans-Bold.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/EudoxusSans-Bold.woff2') format('woff2'),
        url('../assets/fonts/EudoxusSans-Bold.woff') format('woff'),
        url('../assets/fonts/EudoxusSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Eudoxus Sans';
    src: url('../assets/fonts/EudoxusSans-Light.eot');
    src: local('Eudoxus Sans Light'), local('EudoxusSans-Light'),
        url('../assets/fonts/EudoxusSans-Light.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/EudoxusSans-Light.woff2') format('woff2'),
        url('../assets/fonts/EudoxusSans-Light.woff') format('woff'),
        url('../assets/fonts/EudoxusSans-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Eudoxus Sans';
    src: url('../assets/fonts/EudoxusSans-ExtraBold.eot');
    src: local('Eudoxus Sans ExtraBold'), local('EudoxusSans-ExtraBold'),
        url('../assets/fonts/EudoxusSans-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/EudoxusSans-ExtraBold.woff2') format('woff2'),
        url('../assets/fonts/EudoxusSans-ExtraBold.woff') format('woff'),
        url('../assets/fonts/EudoxusSans-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Eudoxus Sans';
    src: url('../assets/fonts/EudoxusSans-ExtraLight.eot');
    src: local('Eudoxus Sans ExtraLight'), local('EudoxusSans-ExtraLight'),
        url('../assets/fonts/EudoxusSans-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/EudoxusSans-ExtraLight.woff2') format('woff2'),
        url('../assets/fonts/EudoxusSans-ExtraLight.woff') format('woff'),
        url('../assets/fonts/EudoxusSans-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Eudoxus Sans';
    src: url('../assets/fonts/EudoxusSans-Regular.eot');
    src: local('Eudoxus Sans Regular'), local('EudoxusSans-Regular'),
        url('../assets/fonts/EudoxusSans-Regular.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/EudoxusSans-Regular.woff2') format('woff2'),
        url('../assets/fonts/EudoxusSans-Regular.woff') format('woff'),
        url('../assets/fonts/EudoxusSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Eudoxus Sans';
    src: url('../assets/fonts/EudoxusSans-Medium.eot');
    src: local('Eudoxus Sans Medium'), local('EudoxusSans-Medium'),
        url('../assets/fonts/EudoxusSans-Medium.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/EudoxusSans-Medium.woff2') format('woff2'),
        url('../assets/fonts/EudoxusSans-Medium.woff') format('woff'),
        url('../assets/fonts/EudoxusSans-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

html {
  font-family: 'Eudoxus Sans';
  background-color: #FAFAFA;
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
