<template>
    <transition name="fade">
        <div class="modal-backdrop" v-if="visible">
            <div class="modal"
                 role="dialog"
                 aria-labelledby="modalTitle"
                 aria-describedby="modalDescription"
            >
                <div class="modal-image">
                    <Notification />
                </div>
                <div class="modal-content">
                    <header
                            class="modal-header"
                            id="modalTitle"
                    >
                        <slot name="header">
                            {{title}}

                            <button
                                    type="button"
                                    class="btn-close"
                                    @click="close"
                                    aria-label="Close modal"
                            >
                                <Cross />
                            </button>
                        </slot>
                    </header>
                    <section
                            class="modal-body"
                            id="modalDescription"
                    >
                        <slot name="body">
                            {{description}}
                        </slot>
                    </section>
                    <footer class="modal-footer">
                        <slot name="footer">
                            {{question}}
                        </slot>
                    </footer>
                    <div class="button-footer">
                        <button
                                class="Button-response"
                                @click="firstButton"
                                aria-label="Close modal"
                        >
                            {{buttonFirst}}
                        </button>
                        <button v-if="buttonSecond"
                                class="Button-response"
                                @click="close"
                                aria-label="Close modal"
                        >
                            {{buttonSecond}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Notification from '@/assets/notification.svg';
    import RippleButton from '@/components/UI/RippleButton';
    import Cross from '@/assets/cross.svg';

    export default {
        name: 'modal',
        components: { Notification, RippleButton, Cross },
        template: '#modal',
        props: [
            "visible",
            "title",
            "description",
            "question",
            "buttonFirst",
            "buttonFirstAction",
            "buttonSecond"
        ],
        watch: {
            visible: function(isVisible) {
                //TODO ajuster le css pour ne pas remonter en haut
                /*if(isVisible) {
                    document.body.classList.add('modal-open')
                } else {
                    document.body.classList.remove('modal-open')
                }*/
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            firstButton() {
                this.close();
                // document.body.classList.remove('modal-open');
                this.buttonFirstAction();
                this.$emit('firstAction');
            }
        },
    };
</script>

<style scoped lang="scss">
    .fade-enter-active  {
        transition: background-color .3s;
        .modal {
            transition: transform .3s ease;
        }
    }
    .fade-leave-active {
        transition: background-color .2s;
        .modal {
            transition: transform .2s ease;
        }
    }
    .fade-enter, .fade-leave-to {
        background-color: rgba(255, 255, 255, 0) !important;
        .modal {
            transform: scaleY(0);
        }
    }
    
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 40;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        position: relative;
        background: $violet;
        border-radius: 0.8rem;
        overflow-x: auto;
        display: flex;
        flex-direction: initial;
        width: 46rem;
        color: $white;
        transform: scale(1);

        &-image {
            width: 7rem;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
    }

    .modal-header,
    .modal-footer,
    .button-footer {
        padding: 1.5rem;
        display: flex;
        font-weight: 500;
    }

    .button-footer {
        padding: 0px 0px 2.8rem 1.5rem;
    }

    .modal-header {
        font-weight: bold;
        justify-content: space-between;
        font-size: 1.4rem;
        padding-top: 3.5rem;
    }

    .modal-footer {
        font-weight: 500;
        font-size: 1.4rem;
    }

    .modal-body {
        position: relative;
        padding: 0px 15px;   
        font-size: 1.4rem;
        line-height: 2.5rem;
    }

    .btn-close {
        position: absolute;
        width: 30px;
        top: 10px;
        right: 10px;
        padding: 6px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        color: $white;
        background: transparent;
    }

</style>