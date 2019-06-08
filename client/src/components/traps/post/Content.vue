<template>
    <div class="Content-container">
        <div class="Content-header">
            <img class="Content-image" src="../../../assets/logo.png"/>
        </div>
        <div class="Content-group">
          <p class="Content-title">{{title}}</p>
          <p class="Content-description">{{description}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Content",
        data: () => ({
        }),
        props: [
          "title",
          "description"
        ]
    }
</script>

<style scoped lang="scss">
    .Content {
      &-title {
        font-weight: bold;
        font-size: 1.6rem;
      }
      &-group {
        padding: 0 7rem 3.8rem 7rem;
      }
    }
     
</style>