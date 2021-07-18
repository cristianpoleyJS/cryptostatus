<template>
  <section class="display-grid align-items-center error-page">
    <img
      src="@/assets/images/404.svg"
      alt="404 image">
    <div class="text-align-left">
      <h2 class="text-2xl">
        Ouch, we didn't find what you are looking for.
      </h2>
    </div>
  </section>
</template>

<style scoped>
    .error-page {
        grid-gap: 4rem;
        justify-items: center;
        max-width: 700px;
        margin: 0 auto;
        flex-wrap: wrap;
        flex-direction: row;
        grid-template-columns: 40fr 60fr;
    }
    p {
        margin: 1rem 0;
    }

    img {
        width: 100%;
    }

    @media (max-width: 460px) {
        .error-page {
            flex-direction: column-reverse;
            margin: 1rem;
            display: flex;
        }
    }
</style>
