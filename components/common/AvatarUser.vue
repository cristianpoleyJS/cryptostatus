<template>
  <span
    class="bg-size-cover display-inline-block bg-size-cover vertical-align-middle bg-position-center w-full"
    @click="$emit('click')" />
</template>

<style scoped>

    span {
        width: 40px;
        height: 40px;
        border-radius: var(--border-radius-100-percent);
        background-image: var(--bg-image-avatar);
    }
</style>
