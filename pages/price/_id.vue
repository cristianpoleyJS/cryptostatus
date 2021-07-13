<template>
  <section>
      {{ asset }}
      <!-- id: {{ asset.id }}
      symbol: {{ asset.symbol }}
      name: {{ asset.name }} -->
  </section>
</template>

<script>
  import { getAssetById, openWatchPrices } from '@/api'

  export default {
    data () {
      return {
        id: null,
        watchPrice: null,
        asset: null
      }
    },
    async fetch({ params }) {
      this.id = params.id
      const response = await getAssetById(this.id)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`The ID "${this.id}" is not valid`)
        } else {
          throw new Error('Internal Server Error')
        }
      } else {
        const { data } = await response.json()
        this.watchPrice = openWatchPrices(this.id)
        this.asset = data
      }
    },
    // call fetch only on client-side
    fetchOnServer: false
  }
</script>
