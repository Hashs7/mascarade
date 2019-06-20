<template>
    <div class="informations__container">
        <div class="informations__group">
            <div class="informations__content">
              <p class="informations__title">Publié par <span>{{name}}</span></p>
              <p class="informations__date">{{date}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Informations",
        data: () => ({
        
        }),
        props: [
          "name",
          "date",
        ]
    }
</script>

<style scoped lang="scss">
    .informations {
      &__container {
        padding: 0 7rem 0 7rem;
        position: relative;
        bottom: 3.5rem;
      }
      &__title {
        font-size: 1.6rem;
        margin-bottom: 0;
        span {
          font-weight: bold;
        }
      }
      &__date {
        font-size: 1rem;
        margin-bottom: 0;
      }
      &__group {
        display: flex;
        flex-direction: column;
        border-radius: 2.6rem;
        padding: 1rem 1.3rem;
        color: $white;
        width: 24.4rem;
        height: 5.2rem;
        justify-content: center;
        align-items: center;
        background: $violet;
      }
    }
     
</style>