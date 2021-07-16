<template>
    <span
      class="text-align-center"
      :class="{
          'negative': percent <= 0,
          'positive': percent > 0
      }">
      {{ format(percent) }}
    </span>
</template>

<script>
export default {
    props: {
        percent: {
            type: Number,
            required: true
        }
    },
    methods: {
        
        format (percent) {
            return percent > 0 ? `+${percent}%` : `${percent}%`
        }
    }
}
</script>

<style scoped>
    span {
        white-space: nowrap;
        border-radius: var(--border-radius-8);
        padding: 8px 10px;
        font-size: 14px;
        width: 74px;
        font-weight: var(--font-weight-medium);
        color: var(--white);
        display: inline-block;
    }

    span.negative {
        background-color: #ea3943;
    }

    span.positive {
        background-color: #16c784;
    }
</style>
