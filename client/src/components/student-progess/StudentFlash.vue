<template>
    <div class="flash-container">
        <span class="title">Flash ton ami</span>
        <span class="flash-current">Tu as reçu {{currentFlash}} flash</span>

        <div class="flash-contact" v-if="students" v-for="(student, i) in students" :key="i">
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
            sendFlash: function({receiver, amount}) {
                if(receiver !== this.$store.state.studentId) return;
                console.log('flash receive');
                this.$store.state.flash.currentFlash = amount;
            },
            newConnection: function() {
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

<style scoped>
    .title {
        display: block;
    }
</style>