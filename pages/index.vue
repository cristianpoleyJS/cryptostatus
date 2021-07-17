<template>
  <section>
    <ListAssets
      :loading="$fetchState.pending"
      :assets="$store.getters.getAssets"
      @see-more="seeMore()" />
  </section>
</template>

<script>
import { RESET_ASSETS } from '@/store'
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  data () {
    return {
      limit: 20,
      offset: 0
    }
  },
  async fetch () {
    await this.dispatchActionGetAssets()
  },
  head () {
    return {
      title: 'CryptoNine - Dashboard'
    }
  },
  beforeDestroy () {
    this.$store.commit(RESET_ASSETS)
  },
  methods: {

    async dispatchActionGetAssets () {
      await this.$store.dispatch('actionGetAssets', { offset: this.offset })
    },

    seeMore () {
      this.offset += this.limit
      this.dispatchActionGetAssets()
    }
  },
  fetchOnServer: false
}
</script>
