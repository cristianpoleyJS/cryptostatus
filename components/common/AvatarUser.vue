<template>
  <span
    class="bg-size-cover display-inline-block bg-size-cover vertical-align-middle bg-position-center w-full"
    :style="{...styleProp}"
    @click="$emit('click')" />
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

    span {
        width: 40px;
        height: 40px;
        border-radius: var(--border-radius-100-percent);
        background-image: var(--bg-image-avatar);
    }
</style>
