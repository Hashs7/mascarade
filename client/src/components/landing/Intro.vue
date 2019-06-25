<template>
    <div class="intro-container">
        <div class="intro__language">
            <button @click="changeLocale('fr')">FR</button>
            <p>/</p>
            <button @click="changeLocale('en')">EN</button>
        </div>
        <div class="intro__content">
            <LogoLanding />
            <h1>{{ $t('header.baseline')}}</h1>
            <h2>{{ $t('header.intro')}}</h2>
        </div>
    </div>
</template>

<script>
    import LogoLanding from '@/assets/logo_landing.svg';

    export default {
        name: "Intro",
        components: { LogoLanding },
        methods: {
            changeLocale(locale) {
                this.$i18n.set(locale)
            }
        }
    }
</script>

<style scoped lang="scss">
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
    .intro {
        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 80vh;
            h1 {
                text-transform: uppercase;
                font-weight: 400;
                font-size: 40px;
                margin-top: 28px;
            }
            h2 {
                font-size: 30px;
                line-height: 40px;
                text-align: center;
                max-width: 60%;
                font-weight: 400;
                margin-top: 70px;
            }
        }
        &__language {
            display: flex;
            justify-content: flex-end;
            padding-top: 20px;
            padding-bottom: 40px;
            color: $white;
            button {
                opacity: 0.6;
                transition: 0.2s ease;
                &:last-child {
                    margin-right: 50px;
                }
                &:hover {
                    opacity: 1;
                    font-weight: bold;
                }
            }
            p {
                margin-bottom: 0;
                margin-right: 20px;
                margin-left: 20px
            }
        }
    }
</style>