<template>
  <section class="details-asset w-full display-block">
    <div class="details-asset-header display-flex align-items-center w-full text-2xl">
      <CoinIcon :coin-id="asset.id" />
      <span>
        <span class="title">{{ asset.name }}</span>
        <span class="symbol">{{ asset.symbol }}</span>
        <Price :price="asset.price[$store.getters.getCurrency]" />
      </span>
      <ChangePercent :percent="asset.changePercent24Hr" />
      <Favorite
        :asset-clicked="asset"
        :is-favorite="asset.favorite" />
      <ButtonRefresh @click="$emit('refresh')" />
    </div>

    <TabsHours
      :tab-selected="tabSelected"
      @select-tab="$e => tabSelected = $e" />
    <Chart
      :asset="asset"
      :tab="tabSelected" />
    <ExtraInfo :asset="asset" />
  </section>
</template>

<script>
import { TAB_ALL } from '@/utils/constants'

export default {
  props: {
    asset: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      tabSelected: TAB_ALL
    }
  }
}
</script>
<style scoped>
  .details-asset {
    max-width: calc(100% - 2rem);
    max-height: calc(100vh - 124px);
    background-color: var(--bg-details-asset);
    border-radius: var(--border-radius-3);
    margin: 1rem;
  }

  .details-asset-header {
    grid-gap: 1rem;
    white-space: nowrap;
  }

  .details-asset-header .symbol {
    margin: 0 1.5rem 0 0.5rem;
    color: var(--third-text-color);
    font-weight: var(--font-weight-medium);
  }

  img {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 460px) {
    .details-asset {
      max-width: calc(100vw - 1rem)
    }
  }
</style>
