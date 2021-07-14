<template>
  <section>
    <h2 class="display-flex">
      Assets
    </h2>
    <div class="display-grid list-assets-header">
      <span>#</span>
      <span>Coin name</span>
      <span>Current Price</span>
      <span class="text-align-center">Change 24hr</span>
      <span class="text-align-center">Action</span>
    </div>
    <div>
      <Asset
        v-for="(asset, ix) in assets"
        :key="asset.id"
        :asset="{
          ...asset,
          index: ix
        }" />
    </div>
    <button @click="$emit('see-more')">
      See more
    </button>
  </section>
</template>

<script>
import Asset from '@/components/dashboard/Asset'

export default {
  components: {
    Asset
  },
  props: {
    assets: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

    section {
        background-color: var(--white);
        max-width: 1200px;
        overflow-x: auto;
    }

    h2 {
        padding: 0 2rem;
        height: 54px;
        flex-direction: row;
        align-items: center;
        font-size: 18px;
        font-weight: var(--base-typography-text-font-weight-medium);
    }
    section div {
        min-width: 600px;
    }

    section div.list-assets-header {
        border-top: 1px solid #eef1f4;
        border-bottom: 1px solid #eef1f4;
        align-items: center;
        padding: 0 2rem;
        height: 54px;
        grid-template-columns: 5fr 35fr 25fr 25fr 10fr;
        background-color: #fafcfe;
        overflow-x: auto;
    }
    section div.list-assets-header span {
        font-weight: var(--base-typography-text-font-weight-medium);
        color: #96a0b4;
    }
</style>
