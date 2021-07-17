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

export default {
    beforeMount () {
        const themeLocalStorage = localStorage.getItem('cryptoNineTheme')
        if (!themeLocalStorage) {
            localStorage.setItem('cryptoNineTheme', THEME_LIGHT)
            document.body.className = THEME_LIGHT
            this.$store.commit(SET_THEME, THEME_LIGHT)
        } else {
            document.body.className = themeLocalStorage
            this.$store.commit(SET_THEME, themeLocalStorage)
        }

        const currencyLocalStorage = localStorage.getItem('cryptoNineCurrency')
        if (!currencyLocalStorage) {
            localStorage.setItem('cryptoNineCurrency', CURRENCY_USD)
            this.$store.commit(SET_CURRENCY, CURRENCY_USD)
        } else {
            this.$store.commit(SET_CURRENCY, CURRENCY_EURO)
        }
    },
    methods: {
        
        changeCurrency () {
            const currencyLocalStorage = localStorage.getItem('cryptoNineCurrency')
            const newVal = currencyLocalStorage === CURRENCY_USD
                ? CURRENCY_EURO
                : CURRENCY_USD
            localStorage.setItem('cryptoNineCurrency', newVal)
            this.$store.commit(SET_CURRENCY, newVal)
        },

        changeTheme () {
            const themeLocalStorage = localStorage.getItem('cryptoNineTheme')
            const newVal = themeLocalStorage === THEME_LIGHT
                ? THEME_DARK
                : THEME_LIGHT
            localStorage.setItem('cryptoNineTheme', newVal)
            document.body.className = newVal
            this.$store.commit(SET_THEME, newVal)
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

    .ico-currency.EUR {
        background-image: url('../../assets/images/ico-usd.svg');
    }
    .ico-currency.USD {
        background-image: url('../../assets/images/ico-euro.svg');
    }
</style>
