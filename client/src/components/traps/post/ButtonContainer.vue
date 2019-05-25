<template>
    <div class="Button-container">
        <div class="Button-group">
            <button class="Button-share" type="button">Partager</button>
            <button class="Button-report" type="button">Signaler</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonContainer",
        data: () => ({
        
        }),
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