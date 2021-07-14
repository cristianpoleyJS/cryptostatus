<template>
  <DetailsAsset :asset="asset" />
</template>

<script>
import DetailsAsset from '@/components/details/DetailsAsset'
import { getAssetById, openWatchPrices } from '@/api'

export default {
  components: {
    DetailsAsset
  },
  async asyncData ({ params }) {
    const id = params.id
    const response = await getAssetById(id)
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`The ID "${id}" is not valid`)
      } else {
        throw new Error('Internal Server Error')
      }
    } else {
      const { data } = await response.json()
      return { asset: data, watchPrice: openWatchPrices(id), id }
    }
  },
  // call fetch only on client-side
  fetchOnServer: false
}
</script>
