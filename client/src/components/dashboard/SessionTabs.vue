<template>
    <div v-if="currentSessions.length">
        <v-tabs
                v-model="tabIndex"
                dark
                show-arrows
        >
            <v-tabs-slider color="primary"></v-tabs-slider>

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
                    <div class="session-link">
                        <span>Lien de partage de la session: </span>
                        <span class="link">{{ linkSignup + session.shortId }}</span>
                    </div>
                    <p>Total d'élèves connectés : {{session.students.length}}</p>
                    <v-btn @click="goStudent">Voir le détail par élève</v-btn>
                    <v-btn @click="sendStory">Envoyer une nouvelle story</v-btn>
                    <div>
                        <ProgressCard
                                label="Élèves qui ont répondu à la cause"
                                :value="charityAnswered"
                                :pourcent="session.students.length ? (charityAnswered/session.students.length) * 100 : 0"
                        />
                    </div>

<!--                    <TableStudent :session="session"/>-->
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>
    </div>

</template>

<script>
    import {getSessions} from "../../utils/API";
    import ProgressCard from '@/components/dashboard/StudentProgress/ProgressCard';
    import TableStudent from '@/components/dashboard/TableStudent';
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "SessionTabs",
        components: {
            TableStudent,
            ProgressCard
        },
        data: () => ({
            value: 10,
            linkSignup: window.location.origin + '/student/signup/',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }),
        computed: {
            ...mapGetters([
                'charityAnswered',
            ]),
            currentSessions() {
                console.log('update sessions');
                return this.$store.state.sessions
            },
            tabIndex: {
                get() { return this.$store.state.tabIndex },
                set(value){ this.$store.commit("updateIndex", value );}
            },
        },
        methods: {
            ...mapMutations({
                updateView: 'updateDashboardView'
            }),
            goStudent() {
                this.updateView('student')
            },
            sendStory() {
                console.log('sendStory', this.$socket);
                const story = {
                    src: "https://picsum.photos/300/500",
                    name: "Le monde",
                    description: "Une future explosion ?",
                    delay: 1500,
                };

                this.$socket.emit('newStory', story)
            }
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

<style scoped lang="scss">
.session-link {
    padding: 8px 16px;
    background-color: white;
    margin: 16px 0;
    .link {
        color: #4D01FF;
    }
}
</style>