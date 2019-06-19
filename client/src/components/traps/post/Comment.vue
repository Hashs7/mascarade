<template>
    <div class="comment__container">
        <div class="comment__header">
            <p class="comment__name">{{name}}</p>
            <p class="comment__date">{{date}}</p>
        </div>
        <div class="comment__content">
          <p class="comment__description">{{description}} </p>
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
    .comment {
      &__container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
      }
      &__header {
        display: flex;
        align-items: center;
      }
      &__name {
        font-weight: bold;
        font-size: 1.4rem;
        margin:0;
        margin-right: 1rem;
        color: $violet;
      }
      &__date {
        margin: 0;
        font-size: 1rem;
      }
      &__description {
        margin-bottom: 0;
      }
      &__image {
        width: 3rem;
        height: 3rem;
      }
    }
     
</style>