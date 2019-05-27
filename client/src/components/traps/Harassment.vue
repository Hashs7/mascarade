<template>
    <div class="Harassment-container">
        <img class="Harassment-image" src="@/assets/logo.png"/>
        <Informations name="Publié par Dylan" like="23" comment="82" date="Il y a 5 heures" />
        <Comment name="Bryan Philipo" date="Il y a 2h" description="Trop moche c'est quoi cette photo !"/>
        <Comment name="Lucie Bernard" date="Il y a 3 jours" description="Grave je préférais être morte qu’avoir ta tête !"/>
        <ButtonContainer titleFirst="Commenter" titleSecond="Signaler" />
    </div>
</template>

<script>
    import Informations from '@/components/traps/post/Informations';
    import ButtonContainer from '@/components/traps/post/ButtonContainer';
    import Comment from '@/components/traps/post/Comment';
    export default {
        name: "Harassment",
        components: { Informations, ButtonContainer, Comment},
        data: () => ({
        }),
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
</style>
