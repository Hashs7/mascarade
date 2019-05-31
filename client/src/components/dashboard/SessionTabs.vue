<template>
    <div v-if="currentSessions.length">
        <v-tabs
                v-model="tabIndex"
                dark
                show-arrows
        >
            <v-tabs-slider color="blue"></v-tabs-slider>

            <v-tab
                    v-for="(session, i) in currentSessions"
                    :key="i"
                    :href="'#tab-' + i"
            >
                {{ session.className }}
            </v-tab>
            <v-tabs-items>
                <v-tab-item
                        v-for="(session, i) in currentSessions"
                        :key="i"
                        :value="'tab-' + i"
                >
                    <p>Lien de partage de la session: {{ linkSignup + session.shortId }}</p>
                    <TableStudent :session="session"/>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>
    </div>

</template>

<script>
    import {getSessions} from "../../utils/API";
    import TableStudent from '@/components/dashboard/TableStudent';

    export default {
        name: "SessionTabs",
        components: {
            TableStudent
        },
        data () {
            return {
                linkSignup: window.location.origin + '/student/signup/',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        computed: {
            currentSessions() {
                console.log('update sessions');
                return this.$store.state.sessions
            },
            tabIndex: {
                get() { return this.$store.state.tabIndex },
                set(value){ this.$store.commit("updateIndex", value );}
            }
        },
        methods: {
        },
        mounted() {
            // if(this.$store.state.sessions !== null) return;

            getSessions()
                .then(res => {
                    console.log('initSessions', res.data.sessions);
                    this.$store.commit('initSessions', res.data.sessions);
                })
                .catch(err => console.log(err))
        }
    }
</script>

<style scoped>

</style>