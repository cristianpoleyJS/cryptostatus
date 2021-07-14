<template>
  <nuxt-link
    :to="`/price/${asset.id}`"
    class="asset display-grid cursor-pointer">
    <span>{{ asset.index + 1 }}</span>
    <span>
      <span class="text-capitalize">{{ asset.id }}</span>
      <span class="symbol">{{ asset.symbol }}</span>
    </span>
    <Price :price="asset.priceUsd" />
    <span
      class="text-align-center"
      :style="`color: ${
        asset.changePercent24Hr * 1 < 0
          ? 'rgb(223, 95, 103)'
          : 'rgb(0, 135, 90)'
      }`">
      {{ (asset.changePercent24Hr * 1).toFixed(2) }}
    </span>
    <span
      class="favorite text-align-center"
      @click.stop.prevent="addToFavorite">
      <i class="display-inline-block cursor-pointer" />
    </span>
  </nuxt-link>
</template>

<script>
import Price from '@/components/common/Price'

export default {
  components: {
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
      const favoriteAssets = localStorage.getItem('cryptonineFavoriteAssets')
      console.log(favoriteAssets)
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
  grid-template-columns: 5fr 35fr 25fr 25fr 10fr;
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

.favorite i {
  background-image: url("../../assets/images/ico-favorite.svg");
  background-size: cover;
  width: 20px;
  height: 20px;
}

.favorite i.is-favorite {
  background-image: url("../../assets/images/ico-favorite-selected.svg");
}
</style>
