<template>
  <section>
    <ListAssets
      :show-see-more="false"
      :assets="$store.getters.getAssetsFavorites"
      :loading="$fetchState.pending || loading"
      @refresh="refreshListFavorites" />
  </section>
</template>

<script>
import { RESET_ASSETS } from '@/store'

export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  data () {
    return {
      loading: false
    }
  },
  async fetch () {
    await this.getFavorites()
  },
  head () {
    return {
      title: 'CryptoNine - Favorites'
    }
  },
  methods: {

    async getFavorites () {
      await this.$store.dispatch('actionGetFavoritesAssets')
    },

    async refreshListFavorites () {
      this.loading = true
      this.$store.commit(RESET_ASSETS)
      await this.getFavorites()
      this.loading = false
    }
  },
  fetchOnServer: false
}
</script>
