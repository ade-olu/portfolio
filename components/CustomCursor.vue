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

<script>
export default {
  name: "CustomCursor",
  props: {
    targets: Array,
    circleColor: String,
    circleColorHover: String,
    dotColor: String,
    dotColorHover: String,
    hoverSize: Number,
  },
  data() {
    return {
      scale: 1,
      x: null,
      y: null,
      circlePosX: null,
      circlePosY: null,
      dotPosX: null,
      dotPosY: null,
      circleStyle: null,
      dotStyle: null,
    };
  },
  methods: {
    customCursor(e) {
      // Cursor Pos
      this.x = e.clientX;
      this.y = e.clientY;

      // Cursor Circle
      const circle = this.$refs.customCursorCircle;
      this.circlePosX = this.x - circle.clientWidth / 2;
      this.circlePosY = this.y - circle.clientWidth / 2;

      // Cursor Dot
      const dot = this.$refs.customCursorDot;
      this.dotPosX = this.x - dot.clientWidth / 2;
      this.dotPosY = this.y - dot.clientHeight / 2;

      // Check if hovering over target
      let isHovering = false;
      const target = e.target;

      if (this.targets.length > 0) {
        for (let selector of this.targets) {
          if (selector.startsWith("[") && selector.endsWith("]")) {
            // Handle attribute selectors like '[data-cursor-hover]'
            const attr = selector.slice(1, -1);
            if (target.hasAttribute(attr)) {
              isHovering = true;
              break;
            }
            // Check parent elements
            const parent = target.closest(selector);
            if (parent) {
              isHovering = true;
              break;
            }
          } else {
            // Handle tag names - check if target matches exactly
            if (
              target.tagName &&
              target.tagName.toLowerCase() === selector.toLowerCase()
            ) {
              isHovering = true;
              break;
            }
            // Also check if any parent element matches using closest
            const matchedParent = target.closest(selector);
            if (matchedParent) {
              isHovering = true;
              break;
            }
          }
        }
      }

      // Change Style When Hovering On Selected Targets
      if (isHovering) {
        this.scale = this.hoverSize;
        this.circleStyle = { borderColor: this.circleColorHover };
        this.dotStyle = { backgroundColor: this.dotColorHover };
      } else {
        this.scale = 1;
        this.circleStyle = { borderColor: this.circleColor };
        this.dotStyle = { backgroundColor: this.dotColor };
      }

      // Move Custom Cursor
      circle.style.transform = `translate(${this.circlePosX}px,${this.circlePosY}px) scale(${this.scale})`;
      dot.style.transform = `translate(${this.dotPosX}px,${this.dotPosY}px)`;
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.customCursor);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.customCursor);
  },
};
</script>

<style scoped>
.custom-cursor {
  cursor: none;
  pointer-events: none;
  display: none;
  z-index: 50 !important;
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
  z-index: 50 !important;
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
  z-index: 50 !important;
}

@media screen and (min-width: 1025px) {
  .custom-cursor {
    display: block;
  }
}
</style>
