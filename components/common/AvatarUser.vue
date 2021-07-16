<template>
  <img
    class="display-inline-block bg-size-cover vertical-align-middle bg-position-center w-full"
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
        width: 40px;
        height: 40px;
        border-radius: var(--border-radius-100-percent);
    }
</style>
