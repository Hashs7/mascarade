<template>
    <div class="o-container navigation">
        <p class="navigation__title">{{ $t('navigation.title')}}</p>
        <p class="navigation__subtitle">{{ $t('navigation.subtitle')}}</p>

        <div class="btn-container">
            <router-link to="room" class="navigation__button">{{ $t('navigation.studentBtn')}}</router-link>
            <router-link to="teacher/login" class="navigation__button">{{ $t('navigation.teacherBtn')}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingNav"
    }
</script>

<style scoped lang="scss">
    .navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 22px;
        &__title {
            margin-top: 3rem;
            max-width: 60%;
            text-align: center;
        }
        &__subtitle {
            margin-top: 1.5rem;
            margin-bottom: 8rem;
        }
        &__button {
            background: $gradient;
            border-radius: 2.1rem;
            padding: 1.4rem 2rem;
            color: $white;
            font-size: 1.4rem;
            &:first-child {
                margin-right: 50px;
            }
            &:hover {
                opacity: 0.8;
            }
        }
    }
</style>