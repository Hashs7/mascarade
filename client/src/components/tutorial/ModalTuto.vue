<script>
    import TutoSlider from '@/components/tutorial/TutoSlider';
    export default {
        name: 'modalTuto',
        components: { TutoSlider },
        template: '#modalTuto',
        data: () => ({
            buttonVisible: false
        }),
        props: [
            "title",
            "description",
        ],
        methods: {
            close() {
                this.$emit('close');
                console.log('close modal');
            },
            showButton(show) {
                setTimeout(() => {
                    this.buttonVisible = show
                }, 1500)
                console.log("show button play", show);
            },
        },
    };
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modalTuto"
                 role="dialog"
                 aria-labelledby="modalTitle"
                 aria-describedby="modalDescription"
            >
            <TutoSlider @isLast="showButton" />
            <div class="modal-buttonContainer">
                <button class="modal-button" v-if="buttonVisible" @click="close">C'est parti !</button>
            </div>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
    }

    .modalTuto {
        background-image: url('~@/assets/img/background_tuto.png');
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 750px;
        height: 520px;
        position: relative;
    }

    .modal-body {
        display: flex;
        color: $white;
        font-size: 18px;
        line-height: 35px;
        max-width: 55%;
        margin-top: 30px;
    }
    .button-footer {
        padding: 0px 0px 15px 15px;
    }

    .modal-header {
        justify-content: center;
        color: $white;
        font-size: 45px;
        line-height: 50px;
        max-width: 55%;
        font-weight: bold;
        display: flex;
        padding: 50px 15px 15px 15px;
    }

    .modal-footer {
        font-weight: 500;
    }

    .modal-body {
        padding: 0px 15px;
    }

    .modal-buttonContainer {
        position: absolute;
        bottom: 35%;
        left: 24%;
    }

    .modal-button {
        color: $violet;
        background: $white;
        border: 1px solid $violet;
        border-radius: 2.1rem;
        padding: .6rem 2.2rem;
        font-size: 1.8rem;
        transition: 0.2s ease;
        text-transform: uppercase;
        &:hover {
           opacity: 0.9;
        }
    }
</style>