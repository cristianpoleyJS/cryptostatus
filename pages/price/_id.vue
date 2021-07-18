<template>
  <SkeletonPlaceholderDetails v-if="$fetchState.pending || loading" />
  <DetailsAsset
    v-else
    :asset="$store.getters.getAssetSelected"
    @refresh="refreshAssetData" />
</template>

<script>
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  data () {
    return {
      loading: false
    }
  },
  async fetch () {
    await this.getAsset()
  },
  head () {
    return {
      title: 'CryptoNine - Details asset'
    }
  },
  methods: {

    async getAsset () {
      await this.$store.dispatch('actionGetAssetById', this.$route.params.id)
    },

    async refreshAssetData () {
      this.loading = true
      await this.getAsset()
      this.loading = false
    }
  },
  fetchOnServer: false
}
</script>
