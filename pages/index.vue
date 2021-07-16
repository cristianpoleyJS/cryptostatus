<template>
  <section>
    <ListAssets
      :loading="loading"
      :assets="$store.getters.getAssets"
      @see-more="seeMore()" />
  </section>
</template>

<script>
import ListAssets from '@/components/dashboard/ListAssets'
import { RESET_ASSETS } from '@/store'

export default {
  components: {
    ListAssets
  },
  data () {
    return {
      loading: true,
      limit: 20,
      offset: 0
    }
  },
  async beforeMount () {
    await this.dispatchActionGetAssets()
    this.loading = false
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
    },

    openAsset () {
      this.limit = 20
      this.offset = 0
    }
  }
}
</script>
