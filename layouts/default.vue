<template>
  <main>
    <AppSidebar />

    <div>
      <AppHeader />
      <Nuxt class="router-view" />
    </div>
  </main>
</template>

<style scoped>
    main {
      display: grid;
      height: 100vh;
      grid-template-columns: 300px calc(100% - 300px);
    }

    .router-view {
      padding: 2rem;
      max-height: calc(100vh - 66px);
      overflow-y: auto;
    }

    @media (max-width: 1024px) {
      main {
        grid-template-columns: 64px calc(100% - 64px);
      }
    }

    @media (max-width: 460px) {
      .router-view {
        padding: 1rem;
      }
    }
</style>
