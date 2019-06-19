<template>
    <div class="nav-container">
        <button
                v-for="item in items"
                :key="item.title"
                class="nav-btn"
                :class="{active: $store.state.dashboardView === item.id}"
                @click="changeView(item.id)"
        >
            {{ item.title }}
        </button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "Navigation",
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'Accueil', id: 'home' },
                    { title: 'Tableau de bord', id: 'board' },
                    { title: 'Élèves', id: 'student' },
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
            },

        }
    }
</script>

<style lang="scss">
    .nav-container{
        display: flex;
    }
    .nav-btn {
        margin: 0 19px;
        padding: 8px 0;
        border-radius: 12px;
        width: 186px;
        background-color: white;
        color: black;
        opacity: 0.4;
        &.active {
            opacity: 1;
        }
    }
</style>