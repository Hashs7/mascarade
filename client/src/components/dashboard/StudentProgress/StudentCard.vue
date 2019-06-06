<template>
    <v-card
            class="mx-auto"
            max-width="400"
    >
        <v-card-text class="card-txt">
            <span class="title">{{firstname}} {{surname}}</span>

            <div class="layout-points">
                <span class="subheading mr-2">Points</span>
                <span class="subheading mr-2">{{points}}</span>
                <span class="mr-2">·</span>
                <span class="subheading mr-2">Partages</span>
                <span class="subheading mr-2">{{shares}}</span>
                <span class="mr-2">·</span>
                <span class="subheading mr-2">Signalements</span>
                <span class="subheading mr-2">{{reports}}</span>
            </div>

            <span class="subheading mr-2">Avancement global</span>
            <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
        </v-card-text>

        <v-card-actions>
            <v-btn flat block @click="showProfile" >Voir le profil</v-btn>
        </v-card-actions>
    </v-card>
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
                // todo pass student datas
                this.$store.commit('toggleModal')
            }
        }
    }
</script>

<style scoped>
    .title {
        display: block;
        margin-bottom: 8px;
    }
    .card-txt {
        padding-bottom: 0;
    }
    .layout-points {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
</style>