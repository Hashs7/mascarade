<template>
    <div class="o-container navigation">
        <p class="navigation__title">{{ $t('navigation.title')}}</p>
        <p class="navigation__subtitle">{{ $t('navigation.subtitle')}}</p>

        <div class="btn-container">
            <RippleButton :name="$t('navigation.studentBtn')" :clickAction="pushRoom" />
            <RippleButton :name="$t('navigation.teacherBtn')" :clickAction="pushTeacherLogin" />
        </div>
    </div>
</template>

<script>
    import RippleButton from '@/components/UI/RippleButton';
    export default {
        name: "LandingNav",
        components: { RippleButton },
        methods: {
            pushRoom() {
                console.log(this);
                this.$router.push('/room');
            }, 
            pushTeacherLogin() {
                this.$router.push('/teacher/login');
            }
        },
    }
</script>

<style scoped lang="scss">
    .navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 25px;
        font-family: $font-avenir;

        &__title {
            margin-top: 3rem;
            max-width: 60%;
            text-align: center;
        }
        &__subtitle {
            margin-top: 1.5rem;
            margin-bottom: 8rem;
        }
    }
</style>