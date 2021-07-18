<template>
  <SkeletonPlaceholderDetails v-if="$fetchState.pending" />
  <DetailsAsset
    v-else
    :asset="$store.getters.getAssetSelected" />
</template>

<script>
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  async fetch () {
    await this.$store.dispatch('actionGetAssetById', this.$route.params.id)
  },
  head () {
    return {
      title: 'CryptoNine - Details asset'
    }
  },
  fetchOnServer: false
}
</script>
