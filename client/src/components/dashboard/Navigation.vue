<template>
    <v-navigation-drawer
            v-model="drawer"
            permanent
    >
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ teacherName }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click="changeView(item.id)"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "Navigation",
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'Tableau de bord', icon: 'home', id: 'board' },
                    { title: 'Élèves', icon: 'face', id: 'student' },
                ],
                mini: true,
                right: null,
                teacherName: ''
            }
        },
        created() {
            this.teacherName = this.$store.state.teacherName
        },
        methods: {
            ...mapMutations({
                updateView: 'updateDashboardView'
            }),
            changeView(item) {
                this.updateView(item);
                console.log(item);
            },

        }
    }
</script>

<style>
    .v-navigation-drawer {
        display: inline-block;
    }
</style>