<template>
    <div class="Harassment-container">
        <img class="Harassment-image" src="@/assets/logo.png"/>
        <div class="Harassment-group">
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
        border: 1.5px solid $white;
    }
    .Harassment-group {
        padding: 0 7rem 3.8rem 7rem;
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
        box-shadow: 0px 0px 20px $yellow;
        border-radius: 0.6rem;
        color: $yellow;
        font-size: 1.4rem;
        padding: 1rem 1.3rem;
      }
    }
</style>
