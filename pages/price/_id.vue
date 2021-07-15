<template>
  <SkeletonPlaceholderDetails v-if="loading" />
  <DetailsAsset
    v-else
    :asset="$store.getters.getAssetSelected" />
</template>

<script>
import SkeletonPlaceholderDetails from '@/components/details/SkeletonPlaceholderDetails'
import DetailsAsset from '@/components/details/DetailsAsset'

export default {
  components: {
    SkeletonPlaceholderDetails,
    DetailsAsset
  },
  data () {
    return {
      loading: true
    }
  },
  async beforeMount () {
    await this.$store.dispatch('actionGetAssetById', this.$route.params.id)
    this.loading = false
  }
}
</script>
