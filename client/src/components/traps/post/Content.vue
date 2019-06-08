<template>
    <div class="Content-container">
        <div class="Content-header">
            <img class="Content-image" src="../../../assets/fakenews.jpg"/>
        </div>
        <div class="Content-group">
          <p class="Content-title">{{title}}</p>
          <div class="Content-separate"></div>
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
        font-size: 2rem;
        line-height: 2.8rem;
        text-transform: uppercase;
        margin-top: 4.8rem;
        max-width: 85%;
      }
      &-description {
        font-size: 1.4rem;
        line-height: 2.5rem;
      }
      &-separate {
        margin-top: 2rem;
        margin-bottom: 2rem;
        background: $white;
        height: 2px;
        width: 3rem;
      }
      &-group {
        padding: 0 7rem 0 7rem;
      }
      &-header {
        img {
          width: 100%;
        }
      }
    }
     
</style>