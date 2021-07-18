<template>
  <main>
    <AppMobileHeader />
    <Nuxt class="router-view" />
    <AppMobileSidebar />
  </main>
</template>

<style scoped>
    main {
      height: 100vh;
      position: relative;
    }

    .router-view {
      padding: 1rem 1rem 120px 1rem;
      max-height: 100vh;
      overflow-y: auto;
    }
</style>
