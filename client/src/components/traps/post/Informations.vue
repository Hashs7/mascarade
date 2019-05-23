<template>
    <div class="Informations-container">
        <div class="Informations-group">
            <div class="Informations-content">
              <img class="Informations-image" src="../../../assets/logo.png"/>
              <p class="Informations-title">{{informations[0].title}}</p>
            </div>
            <div class="Informations-content">
              <img class="Informations-image" src="../../../assets/logo.png"/>
              <p class="Informations-title">{{informations[1].title}}</p>
            </div>
            <div class="Informations-content">
              <img class="Informations-image" src="../../../assets/logo.png"/>
              <p class="Informations-title">{{informations[2].title}}</p>
            </div>
            <div class="Informations-content">
              <img class="Informations-image" src="../../../assets/logo.png"/>
              <p class="Informations-title">{{informations[3].title}}</p>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        name: "Informations",
        data: () => ({
          informations: [{
              title: "Publié par Mr Chafoin",
              image: "",
            },{
              title: "60",
              image: "",
            },{
              title: "12",
              image: "",
            },{
              title: "Il y a 2h",
              image: "",
          }]
        }),
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