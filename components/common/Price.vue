<template>
  <span>{{ format(price) }}</span>
</template>

<script>
import { formatCurrency } from '@/utils'

export default {
  props: {
    price: {
      type: String,
      required: true
    }
  },
  methods: {
    format (price) {
      return formatCurrency(price)
    }
  }
}
</script>
