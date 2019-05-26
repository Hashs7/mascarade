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
    }
     
</style>