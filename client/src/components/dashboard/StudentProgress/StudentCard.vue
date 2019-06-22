<template>
    <div
            class="mx-auto"
    >
        <div>
            <span class="card__title">{{firstname}} {{surname}}</span>

            <div class="layout-points">
                <span>Points</span>
                <span>{{points}}</span>
                <span>·</span>
                <span>Partages</span>
                <span>{{shares}}</span>
                <span>·</span>
                <span>Signalements</span>
                <span>{{reports}}</span>
            </div>
<!--
            <span class="subheading mr-2">Avancement global</span>
            <v-progress-linear v-model="valueDeterminate"></v-progress-linear>-->
        </div>

        <div class="card__button">
            <button flat block @click="showProfile" >Voir le profil</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentCard",
        props: ['points', 'shares','reports', 'progress', 'firstname', 'surname', 'id'],
        data: () => ({
            valueDeterminate: 10
        }),
        methods: {
            showProfile() {
                this.$store.dispatch('updateInfo', this.id);
            }
        }
    }
</script>

<style scoped lang="scss">
    .card {
        &__title {
            font-size: 16px;
            display: block;
            margin-bottom: 8px;
        }
        &__button {
            display: flex;
            justify-content: center;
            height: 25px;
            transition: 0.2s ease;
            border-radius: 6px;
            button {
                text-transform: uppercase;
            }
            &:hover {
                background: $violet;
                color: $white;
            }
        }
    }
    .layout-points {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        span {
            font-size: 10px;
            margin-right: 5px;
        }
    }
</style>