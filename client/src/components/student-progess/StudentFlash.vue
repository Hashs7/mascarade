<template>
    <div class="flash__container">
        <span class="flash__title">Flash ton ami</span>
        <span class="flash__current">{{currentFlash}} flash reçus </span>

        <div class="flash__contact" v-if="students" v-for="(student, i) in students" :key="i">
            <Flash @click="sendFlashTo(student._id)" />
            <span class="flash__name">{{student.firstname}}</span>
        </div>
    </div>
</template>

<script>
    import Flash from '@/assets/flash.svg';
    export default {
        name: "StudentFlash",
        components: { Flash },
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
            top: 6rem;
            right: 0;
            transform: translateX(100%);
        }
        &__title {
            display: block;
            color: $violet;
            font-weight: bold;
        }
        &__current {
            font-size: 1.5rem;
        }
        &__contact {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            &:first-of-type {
                margin-top: 20px;
            }
            svg {
                width: 18px;
                cursor: pointer;
                g {
                    &:hover {
                        transition: 0.2s ease;
                        fill: $blue;
                    }
                }
            }
        }
        &__name {
            color: $blue;
            font-size: 16px;
            margin-left: 10px;
        }
    }
</style>