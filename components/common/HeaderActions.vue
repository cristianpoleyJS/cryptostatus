<template>
  <div class="display-flex align-items-center justify-space-evenly h-full">
    <span class="cursor-pointer" @click="changeCurrency">
      <i :class="`bg-size-cover display-inline-block ico-currency ${$store.getters.getCurrency}`" />
    </span>
    <span class="cursor-pointer" @click="changeTheme">
      <i :class="`bg-size-cover display-inline-block ico-theme ${$store.getters.getTheme}`" />
    </span>
  </div>
</template>

<script>
import { THEME_DARK, THEME_LIGHT, CURRENCY_EURO, CURRENCY_USD } from '@/utils/constants'
import { SET_CURRENCY, SET_THEME } from '@/store'

const CURRENCY_ITEM_STORAGE = 'cryptoNineCurrency'
const THEME_ITEM_STORAGE = 'cryptoNineTheme'

export default {
  beforeMount () {
    const themeLocalStorage = localStorage.getItem(THEME_ITEM_STORAGE)
    if (!themeLocalStorage) {
      this.setThemeStoreAndStorage(THEME_LIGHT)
    } else {
      document.body.className = themeLocalStorage
      this.$store.commit(SET_THEME, themeLocalStorage)
    }

    const currencyLocalStorage = localStorage.getItem(CURRENCY_ITEM_STORAGE)
    currencyLocalStorage
      ? this.$store.commit(SET_CURRENCY, currencyLocalStorage)
      : this.setCurrencyStoreAndStorage(CURRENCY_USD)
  },
  methods: {

    changeTheme () {
      const themeLocalStorage = localStorage.getItem(THEME_ITEM_STORAGE)
      const newVal = themeLocalStorage === THEME_LIGHT
        ? THEME_DARK
        : THEME_LIGHT
      this.setThemeStoreAndStorage(newVal)
    },

    changeCurrency () {
      const currencyLocalStorage = localStorage.getItem(CURRENCY_ITEM_STORAGE)
      const newVal = currencyLocalStorage === CURRENCY_USD
        ? CURRENCY_EURO
        : CURRENCY_USD
      this.setCurrencyStoreAndStorage(newVal)
    },

    setThemeStoreAndStorage (val) {
      localStorage.setItem(THEME_ITEM_STORAGE, val)
      document.body.className = val
      this.$store.commit(SET_THEME, val)
    },

    setCurrencyStoreAndStorage (val) {
      localStorage.setItem(CURRENCY_ITEM_STORAGE, val)
      this.$store.commit(SET_CURRENCY, val)
    }
  }
}
</script>

<style scoped>
    div {
        border-left: 1px solid var(--border-general-color);
    }

    span {
        background-color: var(--bg-header-actions);
        padding: 12px;
        border-radius: var(--border-radius-3);
    }

    i {
        width: 14px;
        height: 14px;
    }

    .ico-theme {
        background-image: var(--bg-ico-theme);
    }

    .ico-currency.USD {
        background-image: url('../../assets/images/ico-euro.svg');
    }
    .ico-currency.EUR {
        background-image: url('../../assets/images/ico-usd.svg');
    }
</style>
