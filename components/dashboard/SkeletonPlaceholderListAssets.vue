<template>
  <span>
    <a
      v-for="ix in new Array(length)"
      :key="ix"
      class="display-grid align-items-center">
      <SkeletonPlaceholder variant="circle" :width="30" :height="30" />
      <SkeletonPlaceholder variant="text" :width="420" />
      <SkeletonPlaceholder variant="text" :width="140" />
      <SkeletonPlaceholder variant="text" :width="120" />
      <SkeletonPlaceholder variant="circle" :width="30" :height="30" />
    </a>
  </span>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      default: 5
    }
  }
}
</script>

<style scoped>

  a {
    border-bottom: 1px solid var(--border-general-color);
    padding: 0 2rem;
    height: 54px;
    grid-template-columns: 5fr 48fr 22fr 17fr 5fr;
    grid-gap: 1rem;
  }
</style>
