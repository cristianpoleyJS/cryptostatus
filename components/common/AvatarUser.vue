<template>
  <img
    src="@/assets/images/avatar.svg"
    :style="{...styleProp}"
    @click="$emit('click')">
</template>

<script>
export default {
  props: {
    styleProp: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

    img {
        width: 100%;
        width: 40px;
        height: 40px;
        vertical-align: middle;
        display: inline-block;
        background-position: center;
        background-size: cover;
        border-radius: 100%;
    }
</style>
