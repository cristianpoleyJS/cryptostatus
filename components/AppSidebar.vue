<template>
  <section class="app-sidebar">
    <span class="app-sidebar-logo display-flex align-items-center">
      <NuxtLink to="/" class="cursor-pointer w-full">
        <i class="display-block bg-size-cover" />
      </NuxtLink>
    </span>

    <nav>
      <span class="text-xs">MAIN MENU</span>
      <ul>
        <li>
          <NuxtLink to="/" class="display-flex align-items-center">
            <img src="@/assets/images/ico-home.svg">
            <span>Dashboard</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/favorites" class="display-flex align-items-center">
            <img src="@/assets/images/ico-favorite-blue.svg">
            <span>Favorites</span>
          </NuxtLink>
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
  padding-left: 2rem;
}

.app-sidebar-logo i {
  background-image: var(--bg-image-logo);
  width: 200px;
  height: 26px;
}

nav {
  margin-top: 2rem;
}
nav > span {
  color: var(--third-text-color);
  padding: 0 2rem;
}

nav a {
  padding: 0 1rem;
  margin: 0 1rem;
  height: 40px;
  margin-top: 1rem;
  border-radius: var(--border-radius-10);
}

nav a:hover,
nav a.NuxtLink-exact-active {
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
    margin: 0 8px 2rem;
  }
}
</style>
