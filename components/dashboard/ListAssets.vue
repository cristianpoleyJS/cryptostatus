<template>
  <section>
    <h3 class="align-items-center display-flex justify-space-between text-xl">
      Assets

      <InputSearch v-model="inputSearch" />
    </h3>
    <div class="list-assets-header display-grid align-items-center">
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
      <EmptyResults v-else />
    </div>
    <div v-else>
      <SkeletonPlaceholderListAssets :length="20" />
    </div>
    <button
      v-if="showSeeMore"
      class="cursor-pointer display-flex justify-center align-items-center w-full"
      @click="$emit('see-more')">
      See more <img src="@/assets/images/ico-see-more.svg">
    </button>
  </section>
</template>

<script>
import SkeletonPlaceholderListAssets from '@/components/dashboard/SkeletonPlaceholderListAssets'
import EmptyResults from '@/components/common/EmptyResults'
import InputSearch from '@/components/common/InputSearch'
import Asset from '@/components/dashboard/Asset'

export default {
  components: {
    SkeletonPlaceholderListAssets,
    EmptyResults,
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

    h3 {
        padding: 0 2rem;
        height: 54px;
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
        padding: 0 2rem;
        height: 54px;
        grid-template-columns: var(--grid-template-columns-list);
        background-color: var(--bg-list-header);
        overflow-x: auto;
    }
    section div.list-assets-header span {
        font-weight: var(--font-weight-medium);
        color: var(--third-text-color);
    }

    button {
      height: 56px;
      font-weight: var(--font-weight-medium);
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
