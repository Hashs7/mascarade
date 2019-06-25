<template>
    <div class="intro-container">
        <h1>{{ $t('header.baseline')}}</h1>
        <button @click="changeLocale('fr')">FR</button>
        <button @click="changeLocale('en')">EN</button>
    </div>
</template>

<script>
    export default {
        name: "Intro",
        methods: {
            changeLocale(locale) {
                this.$i18n.set(locale)
            }
        }
    }
</script>

<style scoped>
    .intro-container {
        height: 100vh;
        color: white;
        background: linear-gradient(55deg, #4d02ff, #00d7ff);
        background-size: 400% 400%;
        animation: bgAnimate 14s ease infinite;

        @keyframes bgAnimate {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
    }
</style>