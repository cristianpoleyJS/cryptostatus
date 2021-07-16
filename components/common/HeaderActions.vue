<template>
    <div>
        <span @click="changeCurrency">
            <i :class="`ico-currency ${$store.getters.getCurrency}`" />
        </span>
        <span @click="changeTheme">
            <i :class="`ico-theme ${theme}`" />
        </span>
    </div>
</template>

<script>
import { THEME_DARK, THEME_LIGHT, CURRENCY_EUR, CURRENCY_DOLAR } from '@/utils/constants'
import { SET_CURRENCY } from '@/store'

export default {
    data () {
        return {
            theme: ''
        }
    },
    beforeMount () {
        const themeLocalStorage = localStorage.getItem('cryptoNineTheme')
        if (!themeLocalStorage) {
            localStorage.setItem('cryptoNineTheme', THEME_LIGHT)
            document.body.className = THEME_LIGHT
            this.theme = THEME_LIGHT
        } else {
            document.body.className = themeLocalStorage
            this.theme = themeLocalStorage
        }

        const currencyLocalStorage = localStorage.getItem('cryptoNineCurrency')
        if (!currencyLocalStorage) {
            localStorage.setItem('cryptoNineCurrency', CURRENCY_DOLAR)
            this.$store.commit(SET_CURRENCY, CURRENCY_DOLAR)
        } else {
            this.$store.commit(SET_CURRENCY, CURRENCY_EUR)
        }
    },
    methods: {
        
        changeCurrency () {
            const currencyLocalStorage = localStorage.getItem('cryptoNineCurrency')
            const newVal = currencyLocalStorage === CURRENCY_DOLAR
                ? CURRENCY_EUR
                : CURRENCY_DOLAR
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
            this.theme = newVal
        }
    }
}
</script>

<style scoped>
    div {
        border-left: 1px solid var(--border-general-color);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    span {
        background-color: var(--bg-header-actions);
        padding: 12px;
        border-radius: var(--border-radius-3);
        cursor: pointer;
    }

    i {
        background-size: cover;
        display: inline-block;
        width: 14px;
        height: 14px;
    }

    .ico-theme.dark {
        background-image: url('../../assets/images/ico-theme-dark.svg');
    }
    .ico-theme.light {
        background-image: url('../../assets/images/ico-theme-light.svg');
    }

    .ico-currency.EUR {
        background-image: url('../../assets/images/ico-euro.svg');
    }
    .ico-currency.USD {
        background-image: url('../../assets/images/ico-dolar.svg');
    }
</style>
