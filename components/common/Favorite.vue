<template>
    <span
      class="favorite text-align-center"
      @click.stop.prevent="addToFavorite">
      <i class="display-inline-block cursor-pointer" />
    </span>
</template>

<script>
export default {
    data () {
        return {
            favorite: false
        }
    },
    props: {
        coinId: {
            type: String,
            required: true
        }
    },
    methods: {
        addToFavorite () {
          const favorites = localStorage.getItem('cryptoNineFavorites')
          console.log(favorites)
        }
    }
}
</script>

<style>
  .favorite i {
    background-image: url("../../assets/images/ico-favorite.svg");
    background-size: cover;
    width: 20px;
    height: 20px;
  }

  .favorite i.is-favorite {
    background-image: url("../../assets/images/ico-favorite-selected.svg");
  }
</style>
