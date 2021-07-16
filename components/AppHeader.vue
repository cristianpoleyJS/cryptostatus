<template>
  <section>
      <div class="app-header-wrapper display-grid">
        <p class="app-header-welcome">
            <span class="title">Hi!</span>
            <span class="description display-block">Welcome back!</span>
        </p>
        <HeaderActions />
        <p class="app-header-avatar">
            <AvatarUser />
        </p>
      </div>
  </section>
</template>

<script>
import HeaderActions from '@/components/common/HeaderActions'
import AvatarUser from '@/components/common/AvatarUser'

export default {
    components: {
        HeaderActions,
        AvatarUser
    }
}
</script>

<style scoped>
    section {
        padding-left: 2rem;
        height: 64px;
        background-color: var(--bg-header);
        border-bottom: 1px solid var(--border-general-color);
    }

    .app-header-wrapper {
        height: 4rem;
        align-items: center;
        grid-template-columns: 70fr 15fr 15fr;
        max-width: 1356px;
        justify-content: center;
    }

    .app-header-welcome .title {
        font-weight: var(--font-weight-medium);
        color: var(--main-text-color);
        font-size: 14px;
    }
    .app-header-welcome .description {
        font-size: 14px;
        color: var(--third-text-color);
    }
    .app-header-avatar {
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
