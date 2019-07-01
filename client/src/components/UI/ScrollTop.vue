<template>
    <transition name="translate" >
        <span
            v-if="hasNew && scrollY > 50"
            class="new-story button__share"
            v-scroll-to="{
                 el: '.application--wrap',
                 duration: 700,
                 easing: 'ease-in-out',
                 force: true,
                 cancelable: true,
                 onStart: hideBtn,
                 x: false,
                 y: true
             }">
            Afficher la nouvelle story
        </span>
    </transition>
</template>

<script>
    export default {
        name: "ScrollTop",
        data: () => ({
            scrollY: null
        }),
        mounted() {
            this.scrollY = window.scrollY;

            window.addEventListener('scroll', () => {
                this.scrollY = window.scrollY;
                if(this.hasNew && window.scrollY < 10) {
                    this.$store.state.stories.scrollBtnVisible = false;
                }
            })
        },
        computed: {
            hasNew() {
                return this.$store.state.stories.scrollBtnVisible;
            }
        },
        methods: {
            hideBtn() {
                this.$store.state.stories.scrollBtnVisible = false
            },
        }
    }
</script>

<style scoped lang="scss">
    .new-story {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        width: 200px;
        color: white;
        text-align: center;
        margin: auto;
        z-index: 30;
        background-color: $violet;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
        }
    }
    .translate-enter-active, .translate-leave-active {
        transition: transform .5s;
    }
    .translate-enter, .translate-leave-to {
        transform: translateY(-100px);
    }
</style>