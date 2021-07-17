<template>
  <section class="w-full">
    <div class="display-flex align-items-center w-full">
      <SkeletonPlaceholder variant="circle" :width="30" :height="30" />
      <SkeletonPlaceholder variant="text" :width="120" />
      <SkeletonPlaceholder variant="text" :width="40" />
      <SkeletonPlaceholder variant="text" :width="80" />
    </div>
    <SkeletonPlaceholder variant="rect" :width="800" :height="600" />
    <SkeletonPlaceholder variant="rect" :width="800" :height="100" />
  </section>
</template>

<style scoped>
  div {
    grid-gap: 1rem;
    margin-bottom: 2rem;
  }
</style>
