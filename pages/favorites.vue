<template>
  <section>
      <ListAssets
        :show-see-more="false"
        :assets="$store.getters.getAssetsFavorites"
        :loading="loading" />
  </section>
</template>

<script>
import ListAssets from '@/components/dashboard/ListAssets'

export default {
  components: {
    ListAssets
  },
  data () {
      return {
          loading: true
      }
  },
  async beforeMount () {
    await this.$store.dispatch('actionGetFavoritesAssets')
    this.loading = false
  }
}
</script>

<style scoped>

</style>
