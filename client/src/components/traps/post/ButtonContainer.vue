<template>
    <div class="Button-container">
        <div class="Button-group">
            <button class="Button-share" type="button">{{title_1}}</button>
            <button class="Button-report" type="button">{{title_2}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonContainer",
        data: () => ({
        
        }),
        props: [
          "title_1",
          "title_2"
        ]
    }
</script>

<style scoped lang="scss">
    .Button {
      &-container {
       margin-top: 2rem;
      }
      &-share {
        margin-right: 1rem;
      }
      &-share, &-report {
        border: 2px solid cornflowerblue;
        padding: 0.2rem 0.6rem;
        color: cornflowerblue;
      }
    }
     
</style>