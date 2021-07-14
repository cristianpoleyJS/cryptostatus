<template>
  <section class="display-flex">
    <span class="display-flex app-header-hi">Hi!</span>
    <span class="display-block app-header-welcome">Welcome back!</span>
  </section>
</template>

<style scoped>
    section {
        border-bottom: 1px solid #eef1f4;
        height: 4rem;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        padding-left: 2rem;
        background-color: var(--white);
    }

    .app-header-hi {
        font-weight: var(--base-typography-text-font-weight-medium);
        margin-bottom: 6px;
        font-size: 14px;
    }
    .app-header-welcome {
        font-size: 14px;
        color: #c0c2c7;
    }
    @media (max-width: 460px) {
        section {
            padding-left: 1rem;
        }
    }
</style>
