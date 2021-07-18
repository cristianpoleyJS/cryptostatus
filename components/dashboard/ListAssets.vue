<template>
  <section>
    <div class="list-assets-title align-items-center display-flex justify-space-between text-xl">
      <h3>Assets</h3>

      <div class="display-flex">
        <InputSearch v-model="inputSearch" />
        <ButtonRefresh @click="$emit('refresh')" />
      </div>
    </div>
    <div class="list-assets-header display-grid align-items-center">
      <span>#</span>
      <span>Coin name</span>
      <span>Current Price</span>
      <span class="text-align-center">Change 24hr</span>
      <span class="text-align-center">Action</span>
    </div>
    <div class="wrapper-list">
      <template v-if="!loading">
        <template v-if="assetsFiltered.length">
          <Asset
            v-for="asset in assetsFiltered"
            :key="asset.id"
            :asset="asset" />
        </template>
        <EmptyResults v-else />
      </template>
      <SkeletonPlaceholderListAssets v-else :length="10" />
    </div>
    <button
      v-if="showSeeMore && inputSearch.length === 0"
      class="see-more-button cursor-pointer display-flex justify-center align-items-center w-full"
      @click="$emit('see-more')">
      See more <img src="@/assets/images/ico-see-more.svg">
    </button>
  </section>
</template>

<script>
export default {
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

    div.list-assets-title {
        padding: 0 2rem;
        height: 54px;
        grid-template-columns: 20fr 80fr;
    }
    div.list-assets-title h3 {
        font-size: 18px;
        font-weight: var(--font-weight-medium);
    }

    div.wrapper-list {
        min-width: 600px;
    }

    div.list-assets-header {
        min-width: 600px;
        border-top: 1px solid var(--border-general-color);
        border-bottom: 1px solid var(--border-general-color);
        padding: 0 2rem;
        height: 54px;
        grid-template-columns: var(--grid-template-columns-list);
        background-color: var(--bg-list-header);
        overflow-x: auto;
    }
    div.list-assets-header span {
        font-weight: var(--font-weight-medium);
        color: var(--third-text-color);
    }

    button.see-more-button {
      height: 56px;
      font-weight: var(--font-weight-medium);
      background-color: var(--bg-list-assets);
      color: var(--second-text-color);
    }
    button.see-more-button img {
      width: 14px;
      margin-left: 1rem;
    }
    button.see-more-button:hover {
      background-color: var(--bg-list-asset-hover);
    }
</style>
