<template>
  <section>
    <div class="app-header-wrapper display-grid align-items-center justify-center">
      <span class="app-header-logo">
        <NuxtLink to="/" class="cursor-pointer w-full">
          <i class="display-block bg-size-cover" />
        </NuxtLink>
      </span>
      <HeaderActions />
      <p class="app-header-avatar h-full text-align-center display-flex justify-center align-items-center">
        <AvatarUser />
      </p>
    </div>
  </section>
</template>

<style scoped>
    section {
        padding-left: 1rem;
        height: 64px;
        background-color: var(--bg-header);
        border-bottom: 1px solid var(--border-general-color);
    }

    .app-header-wrapper {
        height: 4rem;
        grid-template-columns: 15fr 65fr 20fr;
        max-width: 1356px;
    }

    .app-header-welcome .title {
        font-weight: var(--font-weight-medium);
        color: var(--main-text-color);
    }
    .app-header-welcome .description {
        color: var(--third-text-color);
    }
    .app-header-avatar {
        border-left: 1px solid var(--border-general-color);
    }

    .app-header-logo {
      padding-right: 1rem;
      border-right: 1px solid var(--border-general-color);
    }

    .app-header-logo i {
      background-image: var(--bg-image-logo);
      width: 56px;
      vertical-align: middle;
      height: 26px;
    }

</style>
