<template>
    <div class="flash__container">
        <div class="flash__current">
            <span class="counter">{{currentFlash}}</span>
            <span class="icon"><Flash /></span>
        </div>
        <div class="flash__contact">
            <div>
                <Flash @click="sendFlashTo('fake')" />
                <span class="flash__name">Cédric</span>
            </div>
            <span class="number">{{counter}}</span>
        </div>
        <div class="flash__contact" v-if="students" v-for="(student, i) in students" :key="i">
            <div>
                <Flash @click="sendFlashTo(student._id)" />
                <span class="flash__name">{{student.firstname}}</span>
            </div>
            <span class="number">0</span>
        </div>
    </div>
</template>

<script>
    import Flash from '@/assets/flash.svg';

    export default {
        name: "StudentFlash",
        components: { Flash },
        data: () => ({
            counter: 0,
        }),
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
                if(id === 'fake') {
                    this.counter++;
                    return;
                }
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
            top: 12rem;
            right: 0;
            transform: translateX(100%);
        }
        &__title {
            display: block;
            color: $violet;
            font-weight: bold;
        }
        &__current {
            color: $medium--blue;
            font-size: 35px;
            line-height: 1;
            display: flex;
            font-family: $font-palanquin;
            font-weight: 900;
            margin-bottom: 30px;
            .counter {
                margin-right: 10px;
            }
            .icon {
                width: 20px;
                svg { vertical-align: bottom}
            }
        }
        &__contact {
            width: 130px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            color: white;
            user-select: none;
            &:first-of-type {
                margin-top: 20px;
            }
            .number {
                margin-left: 20px;
                font-size: 16px;
                font-family: $font-avenir;
            }
            svg {
                width: 18px;
                cursor: pointer;
                &:hover path {
                    fill: $orange;
                }
                path {
                    transition: 0.2s ease;
                }
            }
        }
        &__name {
            vertical-align: top;
            color: white;
            font-size: 16px;
            margin-left: 10px;
        }
    }
</style>