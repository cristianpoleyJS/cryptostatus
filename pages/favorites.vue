<template>
  <section>
    <ListAssets
      :show-see-more="false"
      :assets="$store.getters.getAssetsFavorites"
      :loading="$fetchState.pending" />
  </section>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('actionGetFavoritesAssets')
  },
  head () {
    return {
      title: 'CryptoNine - Favorites'
    }
  },
  fetchOnServer: false
}
</script>
