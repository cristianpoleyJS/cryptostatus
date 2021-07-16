<template>
  <section class="app-sidebar">
    <span class="app-sidebar-logo">
      <nuxt-link :to="'/'" class="cursor-pointer w-100-percent">
        <i class="display-block" />
      </nuxt-link>
    </span>

    <nav>
      <span>MAIN MENU</span>
      <ul>
        <li>
          <nuxt-link :to="'/'" class="cursor-pointer">
            <img src="@/assets/images/ico-home.svg">
            <span>Dashboard</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/favorites'" class="cursor-pointer">
            <img src="@/assets/images/ico-favorite-blue.svg">
            <span>My favorites</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
.app-sidebar {
  border-right: 1px solid var(--border-general-color);
  background-color: var(--bg-sidebar);
}

.app-sidebar-logo {
  border-bottom: 1px solid var(--border-general-color);
  height: 4rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

.app-sidebar-logo i {
  background-image: var(--bg-image-logo);
  background-size: cover;
  width: 200px;
  height: 26px;
}

nav {
  margin-top: 2rem;
}
nav > span {
  color: var(--third-text-color);
  font-size: 12px;
  padding: 0 2rem;
}

nav a {
  padding: 0 1rem;
  margin: 0 1rem;
  height: 40px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-10);
}

nav a:hover,
nav a.nuxt-link-exact-active {
  background-color: var(--bg-sidebar-hover);
}

nav a > img {
  width: 18px;
  margin-right: 1rem;
}
nav a > span {
  color: var(--second-text-color);
  font-weight: var(--font-weight-medium);
}
@media (max-width: 1024px) {
  .app-sidebar-logo {
    padding-left: 8px;
  }
  .app-sidebar-logo i {
    height: 22px;
    width: 48px;
  }
  nav > span,
  nav a > span {
    display: none;
  }
  nav a {
    padding: 0 14px;
    margin: 0 8px;
  }
}
</style>
