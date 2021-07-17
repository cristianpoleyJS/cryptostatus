<template>
  <section class="app-sidebar display-flex w-full align-items-center">
    <NuxtLink to="/" class="display-flex align-items-center">
      <img src="@/assets/images/ico-home.svg">
    </NuxtLink>
    <NuxtLink to="/favorites" class="display-flex align-items-center">
      <img src="@/assets/images/ico-favorite-blue.svg">
    </NuxtLink>
  </section>
</template>

<style scoped>
.app-sidebar {
  border-top: 1px solid var(--border-general-color);
  background-color: var(--bg-sidebar);
  bottom: 0;
  height: 56px;
  left: 0;
  z-index: 1;
  position: absolute;
  flex-direction: row;
}

a {
  padding: 0 1rem;
  margin: 0 1rem;
  height: 40px;
  border-radius: var(--border-radius-10);
}

a:hover,
a.nuxt-link-exact-active {
  background-color: var(--bg-sidebar-hover);
}

a > img {
  width: 18px;
}
</style>
