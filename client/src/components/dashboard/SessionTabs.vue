<template>
    <div v-if="currentSessions">
        <div class="session-link">
            <span>Lien de partage de la session: </span>
            <span class="link">{{ linkSignup + currentSessions.shortId }}</span>
        </div>
        <div>
            <InteractContainer />
            <ProgressCard
                    label="Élèves qui ont répondu à la cause"
                    :value="charityAnswered"
                    :pourcent="currentSessions.students.length ? (charityAnswered/currentSessions.students.length) * 100 : 0"
            />
        </div>
    </div>
</template>

<script>
    import {getSessions} from "../../utils/API";
    import ProgressCard from '@/components/dashboard/StudentProgress/ProgressCard';
    import TableStudent from '@/components/dashboard/TableStudent';
    import InteractContainer from '@/components/dashboard/interactions/InteractContainer';
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "SessionTabs",
        components: {
            TableStudent,
            ProgressCard,
            InteractContainer
        },
        data: () => ({
            value: 10,
            linkSignup: window.location.origin + '/student/signup/',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }),
        computed: {
            ...mapGetters([
                'charityAnswered',
                'currentSessions'
            ]),
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