<template>
    <div class="intro-container bg-anim">
        <div class="intro__language">
            <button @click="changeLocale('fr')" :class="{active: currentLang === 'fr' }">FR</button>
            <p>/</p>
            <button @click="changeLocale('en')" :class="{active: currentLang === 'en' }" >EN</button>
        </div>
        <div class="intro__content">
            <LogoLanding />
            <h1>{{ $t('header.baseline')}}</h1>
            <h2>{{ $t('header.intro')}}</h2>
        </div>
        <div class="scroll-btn">
            <Mouse v-scroll-to="{
                el: '.datas'
            }" />
        </div>
    </div>
</template>

<script>
    import LogoLanding from '@/assets/logo_landing.svg';
    import Mouse from '@/assets/mouse.svg';

    export default {
        name: "Intro",
        components: { LogoLanding, Mouse },
        data: () => ({
            currentLang: 'fr'
        }),
        methods: {
            changeLocale(locale) {
                this.currentLang = locale;
                this.$i18n.set(locale)
            }
        }
    }
</script>

<style scoped lang="scss">
    .intro-container {
        position: relative;
        display: flex;
        height: 100vh;
    }
    .scroll-btn {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        margin: auto;
        width: 45px;
    }
    .intro {
        &__content {
            text-align: center;
            margin: auto;
            h1 {
                font-family: $font-avenir;
                font-weight: 300;
                text-transform: uppercase;
                font-size: 40px;
                margin-top: 28px;
            }
            h2 {
                font-family: $font-avenir;
                font-size: 30px;
                line-height: 40px;
                text-align: center;
                max-width: 60%;
                font-weight: 400;
                margin: 70px auto 0 auto;
            }
        }

        &__language {
            top: 0;
            right: 50px;
            position: fixed;
            display: flex;
            justify-content: flex-end;
            padding-top: 20px;
            padding-bottom: 40px;
            color: $white;

            button {
                opacity: 0.6;
                transition: 0.2s ease;
                position: relative;
                text-decoration: none;
                padding-bottom: 0.2rem;

                &:hover, &.active {
                    opacity: 1;
                    font-weight: bold;
                }
                &:before, &:after {
                    content: '';
                    position: absolute;
                    transition: transform .5s ease;
                }

                &:before {
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: $white;
                    transform: scaleX(0);
                }

                &:hover:before {
                    transform: scaleX(1);
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