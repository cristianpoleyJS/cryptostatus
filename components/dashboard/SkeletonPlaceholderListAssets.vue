<template>
    <span>
        <a v-for="ix in new Array(length)" :key="ix">
            <SkeletonPlaceholder variant="circle" :width="30" :height="30" />
            <SkeletonPlaceholder variant="text" />
            <SkeletonPlaceholder variant="text" />
            <SkeletonPlaceholder variant="text" />
            <SkeletonPlaceholder variant="circle" :width="30" :height="30" />
        </a>
    </span>
</template>

<script>
import SkeletonPlaceholder from '@/components/common/SkeletonPlaceholder'

export default {
    components: {
        SkeletonPlaceholder
    },
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
    display: grid;
    border-bottom: 1px solid #eef1f4;
    align-items: center;
    padding: 0 2rem;
    height: 54px;
    grid-template-columns: 5fr 35fr 25fr 25fr 10fr;
    grid-gap: 1rem;
  }
</style>
