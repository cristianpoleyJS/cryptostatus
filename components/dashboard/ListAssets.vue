<template>
  <section>
    <h2>
      Assets

      <InputSearch v-model="inputSearch" />
    </h2>
    <div class="display-grid list-assets-header">
      <span>#</span>
      <span>Coin name</span>
      <span>Current Price</span>
      <span class="text-align-center">Change 24hr</span>
      <span class="text-align-center">Action</span>
    </div>
    <div v-if="!loading">
      <template v-if="assetsFiltered.length">
        <Asset
          v-for="asset in assetsFiltered"
          :key="asset.id"
          :asset="asset" />
      </template>
      <span v-else class="empty-no-results">No results</span>
    </div>
    <div v-else>
      <SkeletonPlaceholderListAssets :length="20" />
    </div>
    <button
      v-if="showSeeMore"
      @click="$emit('see-more')">
      See more <img src="@/assets/images/ico-see-more.svg">
    </button>
  </section>
</template>

<script>
import SkeletonPlaceholderListAssets from '@/components/dashboard/SkeletonPlaceholderListAssets'
import InputSearch from '@/components/common/InputSearch'
import Asset from '@/components/dashboard/Asset'

export default {
  components: {
    SkeletonPlaceholderListAssets,
    InputSearch,
    Asset
  },
  props: {
    assets: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    showSeeMore: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      inputSearch: ''
    }
  },
  computed: {

    assetsFiltered () {
      return this.assets.filter((asset) => {
        return asset.id.includes(this.inputSearch) ||
              asset.symbol.includes(this.inputSearch)
      })
    }
  }
}
</script>

<style scoped>

    section {
        background-color: var(--bg-list-assets);
        max-width: 1200px;
        overflow-x: auto;
    }

    h2 {
        padding: 0 2rem;
        height: 54px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        grid-template-columns: 20fr 80fr;
        font-size: 18px;
        font-weight: var(--font-weight-medium);
    }
    section div {
        min-width: 600px;
    }

    section div.list-assets-header {
        border-top: 1px solid var(--border-general-color);
        border-bottom: 1px solid var(--border-general-color);
        align-items: center;
        padding: 0 2rem;
        height: 54px;
        grid-template-columns: 5fr 50fr 20fr 15fr 10fr;
        background-color: var(--bg-list-header);
        overflow-x: auto;
    }
    section div.list-assets-header span {
        font-weight: var(--font-weight-medium);
        color: var(--third-text-color);
    }

    .empty-no-results {
      font-style: italic;
      display: flex;
      justify-content: center;
      height: 56px;
      align-items: center;
    }

    button {
      width: 100%;
      height: 56px;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-weight: var(--font-weight-medium);
      justify-content: center;
      background-color: var(--bg-list-assets);
      color: var(--second-text-color);
    }
    button img {
      width: 14px;
      margin-left: 1rem;
    }
    button:hover {
      background-color: var(--bg-list-asset-hover);
    }
</style>
