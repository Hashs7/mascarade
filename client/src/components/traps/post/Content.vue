<template>
    <div class="content__container">
        <div class="content__header">
            <img class="content__image" alt="" :src="fakeNews"/>
            <Informations name="Le monde" date="Il y a 3 heures"/>
        </div>
        <div class="content__group">
            <p class="content__title">{{title}}</p>
            <div class="content__separate"></div>
            <p class="content__description">{{description}}</p>
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
    .content {
        &__title {
            font-weight: bold;
            font-size: 2rem;
            line-height: 2.8rem;
            text-transform: uppercase;
            margin-top: 1.3rem;
            max-width: 85%;
        }

        &__description {
            font-size: 1.4rem;
            line-height: 2.5rem;
            margin-bottom: 0;
        }

        &__separate {
            margin-top: 2rem;
            margin-bottom: 2rem;
            background: $black;
            height: 2px;
            width: 3rem;
        }

        &__group {
            padding: 0 7rem 0 7rem;
        }

        &__header {
            img {
                width: 100%;
                height: 28rem;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
        }
    }
</style>