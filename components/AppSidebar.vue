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
      </ul>
    </nav>
  </section>
</template>

<style scoped>
.app-sidebar {
  border-right: 1px solid #eef1f4;
}

.app-sidebar-logo {
  border-bottom: 1px solid #eef1f4;
  height: 4rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

.app-sidebar-logo i {
  background-image: url("../assets/images/logo.svg");
  background-size: cover;
  width: 200px;
  height: 26px;
}

nav {
  margin-top: 2rem;
}
nav > span {
  color: #b4b8c5;
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
  border-radius: 10px;
}

nav a:hover {
  background-color: rgb(236, 245, 254);
}

nav a > img {
  width: 18px;
  margin-right: 1rem;
}
nav a > span {
  color: var(--second-color-app);
  font-weight: var(--base-typography-text-font-weight-medium);
}

@media (max-width: 1024px) {
  .app-sidebar-logo {
    padding-left: 8px;
  }
  .app-sidebar-logo i {
    background-image: url("../assets/images/mobile-logo.svg");
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
