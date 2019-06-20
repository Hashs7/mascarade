<template>
    <div class="flash__container">
        <span class="flash__title">Flash ton ami</span>
        <span class="flash__current">Tu as reçu {{currentFlash}} flash</span>

        <div class="flash__contact" v-if="students" v-for="(student, i) in students" :key="i">
            <span class="name">{{student.firstname}}</span>
            <v-btn @click="sendFlashTo(student._id)">Flasher</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentFlash",
        computed: {
            students() {
                return this.$store.state.flash.studentSession
            },
            currentFlash() {
                return this.$store.state.flash.currentFlash
            }
        },
        sockets: {
            sendFlash({receiver, amount}) {
                console.log(receiver, amount);
                if(receiver !== this.$store.state.studentId) return;
                console.log('flash receive');
                this.$store.state.flash.currentFlash = amount;
            },
            newConnection() {
                console.log('new connection');
                this.getStudents();
            }
        },
        methods: {
            sendFlashTo(id) {
                const studentId = this.$store.state.studentId;
                this.$store.dispatch('sendFlash', {sender: studentId, receiver: id});
            },
            getStudents() {
                const sessionId = this.$store.state.sessionId;
                const studentId = this.$store.state.studentId;
                this.$store.dispatch('initFlash', {sessionId, studentId});
            }
        },
        mounted() {
            this.getStudents();
        }
    }
</script>

<style scoped lang="scss">
    .flash {
        &__container {
            position: absolute;
            top: 3rem;
            right: 0;
            transform: translateX(100%);
        }
        &__title {
            display: block;
            color: $violet;
            font-weight: bold;
        }
        &__current {
            font-size: 1.4rem;
        }
    }
</style>