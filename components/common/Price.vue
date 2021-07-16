<template>
  <span>{{ format(price) }}</span>
</template>

<script>
import { formatCurrency } from '@/utils'

export default {
  props: {
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    format (price) {
      return formatCurrency(price, this.$store.getters.getCurrency)
    }
  }
}
</script>
