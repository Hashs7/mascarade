<template>
    <div v-if="currentSessions">
        <div class="session-link">
            <span>Identifiant de la session : </span>
            <span class="link">{{currentSessions.shortId }}</span>
        </div>
        <div class="session-link">
            <span>Lien de partage de la session : </span>
            <span class="link">{{ linkSignup + currentSessions.shortId }}</span>
        </div>
        <div>
            <InteractContainer />
        </div>
    </div>
</template>

<script>
    import {getSessions} from "../../utils/API";
    import TableStudent from '@/components/dashboard/TableStudent';
    import InteractContainer from '@/components/dashboard/interactions/InteractContainer';
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "SessionTabs",
        components: {
            TableStudent,
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
                    name: "Le Gorafi",
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
    box-shadow: 0px 2px 5px -4px rgba(0,0,0,0.75);
    padding: 8px 16px;
    background-color: white;
    margin-top: 14px;
    margin-bottom: 30px;
    width: 860px;
    border-radius: 0.6rem;
    .link {
        color: $violet;
    }
}
</style>