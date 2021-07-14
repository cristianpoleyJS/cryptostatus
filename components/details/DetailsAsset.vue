<template>
  <section class="details-asset">
    <div class="details-asset-header">
      <img :src="`https://www.blockchain.com/static/img/prices/prices-${asset.symbol.toLowerCase()}.svg`">
      <span>
        <span class="title">{{ asset.name }}</span>
        <span class="symbol">{{ asset.symbol }}</span>
        <Price :price="asset.priceUsd" />
      </span>
      <span
        class="favorite text-align-center"
        @click.stop.prevent="addToFavorite">
        <i class="display-inline-block cursor-pointer" />
      </span>
    </div>

    <DetailsChart :asset="asset" />
  </section>
</template>

<script>
import DetailsChart from '@/components/details/DetailsChart'
import Price from '@/components/common/Price'

export default {
  components: {
    DetailsChart,
    Price
  },
  props: {
    asset: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToFavorite () {
      return ''
    }
  }
}
</script>
<style scoped>
  .details-asset {
    display: block;
    width: 100%;
  }

  .details-asset-header {
    display: grid;
    align-items: center;
    grid-gap: 1rem;
    grid-template-columns: 40px calc(50% - 40px) calc(50% - 40px);
    width: 100%;
    font-size: 32px;
  }

  .details-asset-header .title {
    color: rgb(18, 29, 51);
    font-weight: 500;
  }

  .details-asset-header .symbol {
    margin: 0 1.5rem 0 0.5rem;
    color: rgb(152, 161, 178);
    font-weight: 600;
  }

  img {
    width: 40px;
    height: 40px;
  }
</style>
