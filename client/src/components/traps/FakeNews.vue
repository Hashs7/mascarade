<template>
    <div class="FakeNews-container">
        <Content />
    </div>

</template>
<script>
    import Content from '@/components/traps/post/Content';
    export default {
        name: "FakeNews",
        components: { Content },
        data: () => ({
          
        }),
    }
</script>

<style scoped lang="scss">
    .FakeNews-container {
        background-color: #fff;
    }
</style>