<template>
  <section class="details-asset">
    <div class="details-asset-header">
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
    display: block;
    width: 100%;
    max-width: calc(100% - 4rem);
    background-color: var(--white);
    border-radius: 3px;
    padding: 2rem;
    margin: 2rem 0 0 2rem;
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
