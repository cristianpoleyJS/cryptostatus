<template>
    <span
      class="favorite text-align-center"
      @click.stop.prevent="changeFavorite">
      <i :class="`bg-size-cover display-inline-block cursor-pointer ${isFavorite ? 'is-favorite' : ''}`" />
    </span>
</template>

<script>
export default {
    props: {
        isFavorite: {
          type: Boolean,
          default: false
        },
        assetClicked: {
          type: Object,
          required: true
        }
    },
    methods: {
        changeFavorite () {
          !this.isFavorite
          ? this.$store.dispatch('actionCheckFavorite', this.assetClicked)
          : this.$store.dispatch('actionUncheckFavorite', this.assetClicked)
        }
    }
}
</script>

<style>
  .favorite i {
    background-image: var(--bg-ico-action-favorite);
    width: 20px;
    height: 20px;
  }

  .favorite i.is-favorite {
    background-image: url("../../assets/images/ico-favorite-selected.svg");
  }
</style>
