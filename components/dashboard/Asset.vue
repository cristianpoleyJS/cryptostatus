<template>
  <nuxt-link
    :to="`/price/${asset.id}`"
    class="asset display-grid cursor-pointer">
    <span>{{ asset.index + 1 }}</span>
    <span>
      <CoinIcon :coin-id="asset.id" :style-component="'width: 24px; margin-right: 1rem;'" />
      <span class="text-capitalize">{{ asset.id }}</span>
      <span class="symbol">{{ asset.symbol }}</span>
    </span>
    <Price :price="asset.priceUsd" />
    <span
      class="text-align-center"
      :style="`color: ${asset.changePercent24Hr * 1 < 0
        ? 'rgb(223, 95, 103)'
        : 'rgb(0, 135, 90)'}`">
      {{ (asset.changePercent24Hr * 1).toFixed(2) }}
    </span>
    <Favorite :coin-id="asset.id" />
  </nuxt-link>
</template>

<script>
import Favorite from '@/components/common/Favorite'
import CoinIcon from '@/components/common/CoinIcon'
import Price from '@/components/common/Price'

export default {
  components: {
    Favorite,
    CoinIcon,
    Price
  },
  props: {
    asset: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .asset {
    border-bottom: 1px solid #eef1f4;
    align-items: center;
    padding: 0 2rem;
    height: 54px;
    grid-template-columns: 5fr 40fr 20fr 25fr 10fr;
    transition: background-color 0.2s;
  }

  .asset:hover {
    background-color: rgb(236, 245, 254);
  }

  .asset span {
    font-weight: var(--base-typography-text-font-weight-medium);
  }

  .symbol {
    color: #a2a9b9;
    margin-left: 1rem;
    font-weight: var(--base-typography-text-font-weight-regular);
  }
</style>
