<template>
  <div style="-webkit-tap-highlight-color: transparent !important">
    <!-- Custom Cursor -->
    <CustomCursor
      :targets="['a', 'button', 'input', '[data-cursor-hover]', 'img']"
      :circleColor="'#0F1221'"
      :circleColorHover="'#0F1221'"
      :dotColor="'#0F1221'"
      :dotColorHover="'#FD5531'"
      :hoverSize="0"
    />

    <!-- Page content goes here -->
    <slot />
  </div>
</template>
