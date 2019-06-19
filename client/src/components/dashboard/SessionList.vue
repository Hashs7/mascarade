<template>
    <div class="session-container">
        <div
             v-for="(session, i) in currentSessions"
             class="session"
             :class="{active: tabIndex === 'tab-'+i}"
             :key="i"
             @click="selectSession('tab-' + i)">
            <span>{{ session.className }}</span>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "SessionList",
        computed: {
            ...mapGetters([
                'charityAnswered',
            ]),
            currentSessions() {
                return this.$store.state.sessions;
            },
            tabIndex() {
                return this.$store.state.tabIndex;
            },
        },
        methods: {
            selectSession(value) {
                this.$store.commit("updateIndex", value )
            }
        }
    }
</script>

<style scoped lang="scss">
    .active {
        background-color: $violet;
    }
</style>