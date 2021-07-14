<template>
  <section>
    <ListAssets
      :assets="assets"
      @see-more="seeMore()"/>
  </section>
</template>

<script>
import ListAssets from '@/components/dashboard/ListAssets'
import { getAssets } from '@/api'

export default {
  components: {
    ListAssets
  },
  async asyncData() {
    const response = await getAssets()
    const { data } = await response.json()
    return { assets: data }
  },
  methods: {

    seeMore () {
      console.log('entro')
    }
  }
}
</script>