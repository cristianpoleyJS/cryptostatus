<template>
  <section>
    <div>
      <SkeletonPlaceholder variant="circle" :width="30" :height="30" />
      <SkeletonPlaceholder variant="text" :width="120" />
      <SkeletonPlaceholder variant="text" :width="40" />
      <SkeletonPlaceholder variant="text" :width="80" />
    </div>
    <SkeletonPlaceholder variant="rect" :width="800" :height="600" />
    <SkeletonPlaceholder variant="rect" :width="800" :height="100" />
  </section>
</template>

<script>
import SkeletonPlaceholder from '@/components/common/SkeletonPlaceholder'

export default {
    components: {
        SkeletonPlaceholder
    }
}
</script>

<style scoped>
  section {
    display: block;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    width: 100%;
    margin-bottom: 2rem;
  }
</style>
