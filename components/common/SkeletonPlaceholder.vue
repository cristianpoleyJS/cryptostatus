<template>
  <span
    v-if="variant === 'text'"
    class="skeleton-placeholder-variant-text"
    :style="`width: ${width}px; height: ${height}px`" />
  <span
    v-else-if="variant === 'circle'"
    class="skeleton-placeholder-variant-circle"
    :style="`width: ${width}px; height: ${height}px`" />
  <span
    v-else-if="variant === 'rect'"
    class="skeleton-placeholder-variant-rect"
    :style="`width: ${width}px; height: ${height}px`" />
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'text',
      validator (value) {
        return ['text', 'circle', 'rect'].includes(value)
      }
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 20
    }
  }
}
</script>

<style scoped>
    span {
        position: relative;
        overflow: hidden;
        background: #ccc;
        display: inline-block;
    }
    span::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #ccc, #eae9e9, #ccc);
        animation: progress 1s ease-in-out infinite;
    }
    .skeleton-placeholder-variant-text,
    .skeleton-placeholder-variant-rect {
        border-radius: var(--border-radius-4);
    }
    .skeleton-placeholder-variant-circle {
        border-radius: var(--border-radius-100);
    }
    @keyframes progress {
        0% {
            transform: translate3d(-100%, 0, 0);
        }
        100% {
            transform: translate3d(100%, 0, 0);
        }
    }
</style>
