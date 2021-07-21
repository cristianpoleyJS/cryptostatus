<template>
  <section>
    <ListAssets
      :loading="$fetchState.pending || loading"
      :assets="$store.getters.getAssets"
      @see-more="seeMore"
      @refresh="refreshListAssets" />
  </section>
</template>

<script>
import { RESET_ASSETS, RESET_ASSETS_FINDED } from '@/store'
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  data () {
    return {
      limit: 20,
      offset: 0,
      loading: false
    }
  },
  async fetch () {
    await this.dispatchActionGetAssets()
  },
  head () {
    return {
      title: 'CryptoStatus'
    }
  },
  beforeDestroy () {
    this.$store.commit(RESET_ASSETS)
    this.$store.commit(RESET_ASSETS_FINDED)
  },
  methods: {

    async dispatchActionGetAssets () {
      await this.$store.dispatch('actionGetAssets', { offset: this.offset })
    },

    async refreshListAssets (obj) {
      this.loading = true
      obj.searchingAssets
        ? this.$store.commit(RESET_ASSETS_FINDED)
        : this.$store.commit(RESET_ASSETS)
      this.offset = 0
      await this.$store.dispatch('actionGetAssets', { limit: 20, offset: 0, text: obj.inputValue })
      this.loading = false
    },

    seeMore () {
      this.offset += this.limit
      this.dispatchActionGetAssets()
    }
  },
  fetchOnServer: false
}
</script>
