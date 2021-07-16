<template>
    <div class="extra-info">
        <div>
            <label class="display-block">
                Capitalización bursátil:
            </label>
            <span>{{ format(asset.marketCap[$store.getters.getCurrency]) }}</span>
        </div>
        <div v-if="asset.volumeUsd24Hr">
            <label class="display-block">
                Volumén en 24 horas:
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
        display: grid;
        grid-template-columns: 50fr 50fr;
        grid-gap: 1rem 2rem;
        max-width: 800px;
    }

    label {
        font-weight: 600;
        margin-bottom: 8px;
    }

    a {
        color: var(--second-color-app);
        font-weight: var(--base-typography-text-font-weight-medium);
    }
    a > img {
        vertical-align: baseline;
        margin-left: 6px;
        width: 14px;
    }
</style>
