<template>
  <img
    class="vertical-align-middle"
    :src="`https://crypto.com/price/_next/image.png?url=https%3A%2F%2Ftpp-static.crypto.com%2Ftoken%2Ficons%2F${coinId}%2Fcolor_icon.png&w=32&q=75`"
    :style="styleComponent"
    @error="changeIcon">
</template>

<script>
import iconCoinDefault from '@/assets/images/ico-coin.svg'

export default {
  props: {
    coinId: {
      type: String,
      required: true
    },
    styleComponent: {
      type: String,
      default: ''
    }
  },
  methods: {

    changeIcon (event) {
      const target = event.target || event.srcElement
      target.src = iconCoinDefault
    }
  }
}
</script>
