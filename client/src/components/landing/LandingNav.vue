<template>
    <div class="o-container">
        <h2>{{ $t('navigation.title')}}</h2>
        <p>{{ $t('navigation.subtitle')}}</p>

        <div class="btn-container">
            <router-link to="room" class="button">{{ $t('navigation.studentBtn')}}</router-link>
            <router-link to="teacher/login" class="button">{{ $t('navigation.teacherBtn')}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingNav"
    }
</script>

<style scoped>

</style>