<template>
  <section class="details-asset">
    <div class="details-asset-header">
      <CoinIcon :coin-id="asset.id" />
      <span>
        <span class="title">{{ asset.name }}</span>
        <span class="symbol">{{ asset.symbol }}</span>
        <Price :price="asset.priceUsd" />
      </span>
      <Favorite :coin-id="asset.id" />
    </div>

    <DetailsChart :asset="asset" />
  </section>
</template>

<script>
import DetailsChart from '@/components/details/DetailsChart'
import Favorite from '@/components/common/Favorite'
import CoinIcon from '@/components/common/CoinIcon'
import Price from '@/components/common/Price'

export default {
  components: {
    DetailsChart,
    Favorite,
    CoinIcon,
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
    display: flex;
    align-items: center;
    grid-gap: 1rem;
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
