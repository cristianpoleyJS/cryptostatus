<template>
  <button class="cursor-pointer" @click="$emit('click')">
    <i class="display-inline-block bg-size-cover" />
  </button>
</template>

<style scoped>

    button {
      background-color: transparent;
      width: 40px;
      margin-left: 1rem;
    }
    button i {
      background-image: var(--bg-ico-refresh);
      width: 14px;
      height: 14px;
    }
</style>
