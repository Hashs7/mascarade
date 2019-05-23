<template>
    <div class="FakeNews-container">
        <Content />
        <Informations />
        <Button />
    </div>

</template>
<script>
    import Content from '@/components/traps/post/Content';
    import Informations from '@/components/traps/post/Informations';
    import Button from '@/components/traps/post/Button';
    export default {
        name: "FakeNews",
        components: { Content, Informations, Button },
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