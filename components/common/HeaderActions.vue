<template>
    <div>
        <span @click="changeCurrency">
            <i :class="`ico-currency ${currency}`" />
        </span>
        <span @click="changeTheme">
            <i :class="`ico-theme ${theme}`" />
        </span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currency: localStorage.getItem('cryptoNineCurrency'),
            theme: localStorage.getItem('cryptoNineTheme')
        }
    },
    methods: {
        
        changeCurrency () {
            const currency = this.currency === 'eur' ? 'usd' : 'eur'
            this.currency = currency
            localStorage.setItem('cryptoNineCurrency', currency)
        },

        changeTheme () {
            const theme = this.theme === 'light' ? 'dark' : 'light'
            this.theme = theme
            localStorage.setItem('cryptoNineTheme', theme)
        }
    }
}
</script>

<style scoped>
    div {
        border-left: 1px solid #eef1f4;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    span {
        background-color: #fafcfe;
        padding: 12px;
        border-radius: 3px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    span:hover {
        background-color: rgb(236, 245, 254);
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

    .ico-currency.eur {
        background-image: url('../../assets/images/ico-euro.svg');
    }
    .ico-currency.usd {
        background-image: url('../../assets/images/ico-dolar.svg');
    }
</style>
