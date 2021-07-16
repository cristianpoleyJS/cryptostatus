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
import ChangePercent from '@/components/common/ChangePercent'
import TabsHours from '@/components/details/TabsHours'
import ExtraInfo from '@/components/details/ExtraInfo'
import Favorite from '@/components/common/Favorite'
import CoinIcon from '@/components/common/CoinIcon'
import Chart from '@/components/details/Chart'
import Price from '@/components/common/Price'

import { TAB_ALL } from '@/utils/constants'

export default {
  components: {
    ChangePercent,
    ExtraInfo,
    TabsHours,
    Favorite,
    CoinIcon,
    Chart,
    Price
  },
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
    max-width: calc(100% - 4rem);
    background-color: var(--bg-details-asset);
    border-radius: var(--border-radius-3);
    padding: 2rem;
    margin: 2rem 0 0 2rem;
  }

  .details-asset-header {
    grid-gap: 1rem;
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
</style>
