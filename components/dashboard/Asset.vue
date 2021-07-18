<template>
  <NuxtLink
    :to="`/price/${asset.id}`"
    class="asset display-grid cursor-pointer align-items-center">
    <span>{{ asset.rank }}</span>
    <span>
      <CoinIcon :coin-id="asset.id" :style-component="'width: 24px; margin-right: 1rem;'" />
      <span class="text-capitalize">{{ asset.id }}</span>
      <span class="symbol">{{ asset.symbol }}</span>
    </span>
    <Price :price="asset.price[$store.getters.getCurrency]" />
    <p class="text-align-center">
      <ChangePercent :percent="asset.changePercent24Hr" />
    </p>
    <Favorite
      :asset-clicked="asset"
      :is-favorite="asset.favorite" />
  </NuxtLink>
</template>

<script>
export default {
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
    border-bottom: 1px solid var(--border-general-color);
    padding: 0 2rem;
    height: 54px;
    grid-template-columns: var(--grid-template-columns-list);
  }

  .asset:hover {
    background-color: var(--bg-list-asset-hover);
  }

  .asset span {
    font-weight: var(--font-weight-medium);
  }

  .symbol {
    color: var(--third-text-color);
    margin-left: 12px;
    font-weight: var(--font-weight-regular);
  }
</style>
