<template>
    <div class="Informations-container">
        <div class="Informations-group">
            <div class="Informations-content">
              <img class="Informations-image" src="../../../assets/logo.png"/>
              <p class="Informations-title">{{name}}</p>
            </div>
            <div class="Informations-content">
              <img class="Informations-image" src="../../../assets/logo.png"/>
              <p class="Informations-title">{{like}}</p>
            </div>
            <div class="Informations-content">
              <img class="Informations-image" src="../../../assets/logo.png"/>
              <p class="Informations-title">{{comment}}</p>
            </div>
            <div class="Informations-content">
              <img class="Informations-image" src="../../../assets/logo.png"/>
              <p class="Informations-title">{{date}}</p>
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
          "like",
          "comment",
          "date",
        ]
    }
</script>

<style scoped lang="scss">
    .Informations {
      &-group {
        display: flex;
        justify-content: space-between;
      }
      &-title {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 0;
        margin-left: 1rem;
      }
      &-image {
        width: 3rem;
        height: 3rem;
      }
      &-content {
        display: flex;
        align-items: center;
      }
    }
     
</style>