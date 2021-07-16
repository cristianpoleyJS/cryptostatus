<template>
    <span
        class="input-search-wrapper"
        :class="{
            'focusing': focusing
        }">
        <i class="ico-search" />
        <input
            :value="value"
            type="text"
            autocomplete="false"
            :placeholder="placeholder"
            @input.prevent.stop="updateValue($event.target.value)"
            @focus="focusing = true"
            @blur="focusing = false">
    </span>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: 'Search all assets'
        }
    },
    data () {
        return {
            focusing: false
        }
    },
    methods: {
        updateValue (value) {
            this.$emit('input', value)
        },

        clear () {
            this.$emit('input', '')
            this.$emit('clear')
        }
    }
}
</script>

<style scoped>
    span {
        height: 38px;
        background-color: var(--bg-input-search);
        box-sizing: border-box;
        border-radius: var(--border-radius-3);
        padding: 0 1rem;
        display: flex;
        align-items: center;
        width: 400px;
        margin-left: 1rem;
    }

    input {
        border-radius: 0;
        border: 0;
        height: 100%;
        width: 100%;
        outline: none;
        font-size: 14px;
        letter-spacing: 0;
        text-align: left;
        margin-right: 8px;
        padding: 0;
        max-height: 100%;
        background: transparent;
    }

    input:placeholder {
        color: #9caab9;
    }

    span.focusing {
        box-shadow: inset 0 0 0 1px var(--border-input-search);
    }

    i {
        background-image: url('../../assets/images/ico-search.svg');
        background-size: cover;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 12px;
    }
</style>
