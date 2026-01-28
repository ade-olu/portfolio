<template>
  <div class="custom-cursor">
    <div
      class="custom-cursor__circle"
      :style="circleStyle"
      ref="customCursorCircle"
    ></div>
    <div
      class="custom-cursor__dot"
      :style="dotStyle"
      ref="customCursorDot"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Props
const props = defineProps({
  targets: {
    type: Array,
    default: () => [],
  },
  circleColor: {
    type: String,
    default: "#0F1221",
  },
  circleColorHover: {
    type: String,
    default: "#0F1221",
  },
  dotColor: {
    type: String,
    default: "#0F1221",
  },
  dotColorHover: {
    type: String,
    default: "#FD5531",
  },
  hoverSize: {
    type: Number,
    default: 0,
  },
});

// Refs
const customCursorCircle = ref(null);
const customCursorDot = ref(null);

// Reactive state
const scale = ref(1);
const x = ref(null);
const y = ref(null);
const circlePosX = ref(null);
const circlePosY = ref(null);
const dotPosX = ref(null);
const dotPosY = ref(null);
const isHovering = ref(false);

// Computed styles
const circleStyle = computed(() => ({
  borderColor: isHovering.value ? props.circleColorHover : props.circleColor,
}));

const dotStyle = computed(() => ({
  backgroundColor: isHovering.value ? props.dotColorHover : props.dotColor,
}));

// Methods
const customCursor = (e) => {
  // Cursor Pos
  x.value = e.clientX;
  y.value = e.clientY;

  // Cursor Circle
  const circle = customCursorCircle.value;
  if (!circle) return;

  circlePosX.value = x.value - circle.clientWidth / 2;
  circlePosY.value = y.value - circle.clientWidth / 2;

  // Cursor Dot
  const dot = customCursorDot.value;
  if (!dot) return;

  dotPosX.value = x.value - dot.clientWidth / 2;
  dotPosY.value = y.value - dot.clientHeight / 2;

  // Check if hovering over target
  isHovering.value = false;
  const target = e.target;

  if (props.targets.length > 0) {
    for (let selector of props.targets) {
      if (selector.startsWith("[") && selector.endsWith("]")) {
        // Handle attribute selectors like '[data-cursor-hover]'
        const attr = selector.slice(1, -1);
        if (target.hasAttribute(attr)) {
          isHovering.value = true;
          break;
        }
        // Check parent elements
        const parent = target.closest(selector);
        if (parent) {
          isHovering.value = true;
          break;
        }
      } else {
        // Handle tag names - check if target matches exactly
        if (
          target.tagName &&
          target.tagName.toLowerCase() === selector.toLowerCase()
        ) {
          isHovering.value = true;
          break;
        }
        // Also check if any parent element matches using closest
        const matchedParent = target.closest(selector);
        if (matchedParent) {
          isHovering.value = true;
          break;
        }
      }
    }
  }

  // Change scale when hovering
  scale.value = isHovering.value ? props.hoverSize : 1;

  // Move Custom Cursor
  circle.style.transform = `translate(${circlePosX.value}px, ${circlePosY.value}px) scale(${scale.value})`;
  dot.style.transform = `translate(${dotPosX.value}px, ${dotPosY.value}px)`;
};

// Lifecycle
onMounted(() => {
  window.addEventListener("mousemove", customCursor);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", customCursor);
});
</script>

<style scoped>
.custom-cursor {
  cursor: none;
  pointer-events: none;
  display: none;
  z-index: 60 !important;
}

.custom-cursor__circle {
  position: fixed;
  cursor: none;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  border: 2px solid #0f1221;
  border-radius: 50%;
  transform: translate(-100%, -100%);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 60 !important;
}

.custom-cursor__dot {
  position: fixed;
  cursor: none;
  top: 1px;
  left: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #0f1221;
  transform: translate(-100%, -100%);
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 60 !important;
}

@media screen and (min-width: 1025px) {
  .custom-cursor {
    display: block;
  }
}
</style>
