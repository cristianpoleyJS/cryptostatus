<template>
  <img
    :src="`https://crypto.com/price/_next/image.png?url=https%3A%2F%2Ftpp-static.crypto.com%2Ftoken%2Ficons%2F${coinId}%2Fcolor_icon.png&w=32&q=75`"
    :style="styleComponent">
</template>

<script>
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
    }
}
</script>

<style scoped>
    img {
        vertical-align: middle;
    }
</style>
