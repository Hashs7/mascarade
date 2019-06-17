<template>
    <div class="Content-container">
        <div class="Content-header">
            <img class="Content-image" alt="" :src="fakeNews"/>
            <Informations name="Le monde" date="Il y a 3 heures"/>
        </div>
        <div class="Content-group">
            <p class="Content-title">{{title}}</p>
            <div class="Content-separate"></div>
            <p class="Content-description">{{description}}</p>
        </div>
    </div>
</template>

<script>
    import FakeNews from "@/assets/img/fakenews.jpg";
    import Informations from '@/components/traps/post/Informations';

    export default {
        name: "Content",
        components: { Informations},
        data: () => ({
            fakeNews: FakeNews
        }),
        props: [
            "title",
            "description"
        ]
    }
</script>

<style scoped lang="scss">
    .Content {
        &-title {
            font-weight: bold;
            font-size: 2rem;
            line-height: 2.8rem;
            text-transform: uppercase;
            margin-top: 1.3rem;
            max-width: 85%;
        }

        &-description {
            font-size: 1.4rem;
            line-height: 2.5rem;
            margin-bottom: 0;
        }

        &-separate {
            margin-top: 2rem;
            margin-bottom: 2rem;
            background: $black;
            height: 2px;
            width: 3rem;
        }

        &-group {
            padding: 0 7rem 0 7rem;
        }

        &-header {
            img {
                width: 100%;
                height: 28rem;
            }
        }
    }
</style>