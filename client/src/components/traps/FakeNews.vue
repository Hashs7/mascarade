<template>
    <div class="FakeNews-container">
        <Content title="Au programme des 6e le chinois !" description="Le ministère de l’éducation nationale et de la jeunesse souhaite ajouter une nouvelle langue au programme scolaire des élèves de 6ème : le chinois !"/>
        <Informations name="Publié par Mr Chafoin" like="12" comment="15" date="Il y a 3 heures" />
        <ButtonContainer />
    </div>
</template>
<script>
    import Content from '@/components/traps/post/Content';
    import Informations from '@/components/traps/post/Informations';
    import ButtonContainer from '@/components/traps/post/ButtonContainer';
    export default {
        name: "FakeNews",
        components: { Content, Informations, ButtonContainer },
        data: () => ({
          
        }),
    }
</script>

<style scoped lang="scss">
    .FakeNews-container {
        background-color: #fff;
        background-color: #fff;
        padding: 2rem;
    }
</style>