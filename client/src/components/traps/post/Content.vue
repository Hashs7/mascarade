<template>
    <div class="Content-container">
        <div class="Content-group">
            <img class="Content-image" src="../../../assets/logo.png"/>
            <p class="Content-title">{{title}}</p>
            <p class="Content-description">{{description}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Content",
        data: () => ({
          title: "Au programme des 6e le chinois ! ",
          description: "Le ministère de l’éducation nationale et de la jeunesse souhaite ajouter une nouvelle langue au programme scolaire des élèves de 6ème : le chinois !",
          image: "",
        }),
    }
</script>

<style scoped lang="scss">
    .Content {
      &-title {
        font-weight: bold;
        font-size: 1.6rem;
      }
    }
     
</style>