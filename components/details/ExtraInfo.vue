<template>
  <div class="extra-info display-grid">
    <div>
      <label class="display-block">
        Market capitalization:
      </label>
      <span>{{ format(asset.marketCap[$store.getters.getCurrency]) }}</span>
    </div>
    <div v-if="asset.volume24Hr">
      <label class="display-block">
        Volume in 24 hours:
      </label>
      <span>{{ format(asset.volume24Hr[$store.getters.getCurrency]) }}</span>
    </div>
    <div>
      <label>
        Ranking:
      </label>
      {{ asset.rank }}
    </div>
    <a v-if="asset.explorer" :href="asset.explorer" target="_blank">
      More info
      <img src="@/assets/images/ico-external.svg">
    </a>
  </div>
</template>

<script>
import { formatCurrency } from '@/utils'

export default {
  props: {
    asset: {
      type: Object,
      required: true
    }
  },
  methods: {
    format (amount) {
      return formatCurrency(amount, this.$store.getters.getCurrency)
    }
  }
}
</script>

<style scoped>
    .extra-info {
        margin-top: 2rem;
        grid-template-columns: 50fr 50fr;
        grid-gap: 1rem 2rem;
        max-width: 800px;
    }

    label {
        font-weight: var(--font-weight-medium);
        margin-bottom: 8px;
    }

    a {
        color: var(--second-text-color);
        font-weight: var(--font-weight-medium);
    }
    a > img {
        vertical-align: baseline;
        margin-left: 6px;
        width: 14px;
    }
</style>
