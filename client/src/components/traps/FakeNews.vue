<template>
    <div class="FakeNews-container">
        <Content />
        <Informations />
    </div>

</template>
<script>
    import Content from '@/components/traps/post/Content';
    import Informations from '@/components/traps/post/Informations';
    export default {
        name: "FakeNews",
        components: { Content, Informations },
        data: () => ({
          
        }),
    }
</script>

<style scoped lang="scss">
    .FakeNews-container {
        background-color: #fff;
    }
</style>