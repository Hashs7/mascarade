<template>
    <div class="session__container">
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
    .session {
        padding: 1.2rem 3rem;
        margin-left: 3rem;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        cursor: pointer;
        &__container {
            margin-top: 4rem;
        }
        &:hover {
            background: $light--blue;
        }
    }
    .active {
        background-color: $violet;
        color: $white;
        &:hover {
            background: $violet;
        }
    }
</style>