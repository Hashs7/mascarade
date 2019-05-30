<template>
    <div class="Comment-container">
        <div class="Comment-header">
            <img class="Comment-image" src="../../../assets/logo.png"/>
            <p class="Comment-name">{{name}}</p>
            <p class="Comment-date">{{date}}</p>
        </div>
        <div class="Comment-content">
          <p class="Comment-description">{{description}} </p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Comment",
        data: () => ({
        }),
        props: [
          "name",
          "date",
          "description"
        ]
    }
</script>

<style scoped lang="scss">
    .Comment {
      &-container {
        display: flex;
        flex-direction: column;
        border: 2px solid lightgray;
        border-radius: 0.5rem;
        padding: 1rem 1rem;
        margin-bottom: 1rem;
      }
      &-header {
        display: flex;
        align-items: center;
      }
      &-name {
        font-weight: bold;
        font-size: 1.4rem;
        margin:0;
        margin-right: 1rem;
      }
      &-date {
        margin: 0;
      }
      &-description {
        margin-bottom: 0;
      }
      &-image {
        width: 3rem;
        height: 3rem;
      }
    }
     
</style>