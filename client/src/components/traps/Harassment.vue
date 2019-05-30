<template>
    <div class="Harassment-container">
        <img class="Harassment-image" src="@/assets/logo.png"/>
        <Informations name="Publié par Dylan" like="23" comment="82" date="Il y a 5 heures" />
        <Comment name="Bryan Philipo" date="Il y a 2h" description="Trop moche c'est quoi cette photo !"/>
        <Comment name="Lucie Bernard" date="Il y a 3 jours" description="Grave je préférerai être morte qu’avoir ta tête !"/>
        <div class="Button-container">
          <div class="Button-group">
            <button class="Button-share" type="button">Commenter</button>
            <button class="Button-report" type="button" @click="updateReport">Signaler</button>
          </div>
        </div>
    </div>
</template>

<script>
    import Informations from '@/components/traps/post/Informations';
    import Comment from '@/components/traps/post/Comment';
    export default {
        name: "Harassment",
        components: { Informations, Comment},
        data: () => ({
        }),
        methods: {
            updateReport() {
                this.$store.dispatch('updateAchievement', {type: 'reports', amount: 1})
            },
            updateShare() {
                this.$store.dispatch('updateAchievement', {type: 'shares', amount: 1})
            }
        },
    }
</script>

<style scoped lang="scss">
    .Harassment-container {
        background-color: #fff;
        padding: 2rem;
        border: 1px solid grey;
    }
    .Informations-container {
      margin-bottom: 1rem;
    }
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
