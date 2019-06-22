<script>
    import TutoSlider from '@/components/tutorial/TutoSlider';
    export default {
        name: 'modalTuto',
        components: { TutoSlider },
        template: '#modalTuto',
        data: () => ({
          isModalVisible: true,
        }),
        props: [
            "title",
            "description",
        ],
        methods: {
            close() {
                this.$emit('close');
            },
            firstButton() {
                this.buttonFirstAction();
                this.close();
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
                <!--<header
                        class="modal-header"
                        id="modalTitle"
                >
                    <slot name="header">
                        {{title}}
                    </slot>
                </header>
                <section
                        class="modal-body"
                        id="modalDescription"
                >
                    <slot name="body">
                        {{description}}
                    </slot>
                </section>-->
                <TutoSlider />
                  
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
        background-color: rgba(0, 0, 0, 0.7);
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
        height: 510px;
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
</style>