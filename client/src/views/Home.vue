<template>
    <div class="landing">
        <Intro />
        <KeyPoints />
        <LandingNav />
        <Team />
    </div>
</template>

<script>
    import Intro from '@/components/landing/Intro'
    import KeyPoints from '@/components/landing/KeyPoints'
    import LandingNav from '@/components/landing/LandingNav'
    import Team from '@/components/landing/Team'
    export default {
        components: {
            Intro,
            KeyPoints,
            LandingNav,
            Team
        },
        mounted() {
            localStorage.clear();
        }
    }
</script>

<style>
    .v-content__wrap {
        justify-content: center;
    }
    .home-links {
        display: block;
    }
    .landing {
        background: white;
    }
</style>
