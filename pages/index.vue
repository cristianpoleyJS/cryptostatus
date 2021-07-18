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
import { RESET_ASSETS } from '@/store'
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
      title: 'CryptoNine'
    }
  },
  beforeDestroy () {
    this.$store.commit(RESET_ASSETS)
  },
  methods: {

    async dispatchActionGetAssets () {
      await this.$store.dispatch('actionGetAssets', { offset: this.offset })
    },

    async refreshListAssets () {
      this.loading = true
      this.$store.commit(RESET_ASSETS)
      this.offset = 0
      await this.dispatchActionGetAssets()
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
