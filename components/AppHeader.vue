<template>
  <section>
    <div class="app-header-wrapper display-grid align-items-center justify-center">
      <p class="app-header-welcome">
        <span class="title text-2xs">Hi!</span>
        <span class="description display-block text-2xs">Welcome back!</span>
      </p>
      <HeaderActions />
      <p class="app-header-avatar h-full text-align-center display-flex justify-center align-items-center">
        <AvatarUser />
      </p>
    </div>
  </section>
</template>

<style scoped>
    section {
        padding-left: 2rem;
        height: 64px;
        background-color: var(--bg-header);
        border-bottom: 1px solid var(--border-general-color);
    }

    .app-header-wrapper {
        height: 4rem;
        grid-template-columns: 70fr 15fr 15fr;
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
    @media (max-width: 460px) {
        section {
            padding-left: 0;
        }
        .app-header-wrapper {
            grid-template-columns: 50fr 20fr;
        }
        .app-header-welcome {
            display: none;
        }
    }
</style>
