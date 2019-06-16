<template>
    <div class="Informations-container">
        <div class="Informations-group">
            <div class="Informations-content">
              <p class="Informations-title">Publié par <span>{{name}}</span></p>
              <p class="Informations-date">{{date}}</p>
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
    .Informations {
      &-container {
        padding: 0 7rem 0 7rem;
        position: relative;
        bottom: 3.5rem;
      }
      &-title {
        font-size: 1.6rem;
        margin-bottom: 0;
        span {
          font-weight: bold;
        }
      }
      &-date {
        font-size: 1rem;
        margin-bottom: 0;
      }
      &-group {
        display: flex;
        flex-direction: column;
        border: 1px solid $blue;
        border-radius: 2.6rem;
        padding: 1rem 1.3rem;
        color: $blue;
        width: 24.4rem;
        height: 5.2rem;
        justify-content: center;
        align-items: center;
        background: $white;
      }
    }
     
</style>