<template>
  <span :class="`text-align-center display-inline-block text-2xs ${percent > 0 ? 'positive' : 'negative'}`">
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
        width: 74px;
        font-weight: var(--font-weight-medium);
        color: var(--white);
    }

    span.negative {
        background-color: var(--color-negative-change);
    }

    span.positive {
        background-color: var(--color-positive-change);
    }
</style>
