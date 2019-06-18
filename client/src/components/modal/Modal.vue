<script>
    import Notification from '@/assets/notification.svg';
    import RippleButton from '@/components/UI/RippleButton';

    export default {
        name: 'modal',
        components: { Notification, RippleButton },
        template: '#modal',
        data: () => ({
            isModalVisible: false,
        }),
        props: [
            "title",
            "description",
            "question",
            "buttonFirst",
            "buttonFirstAction",
            "buttonSecond"
        ],
        methods: {
            close() {
                this.$emit('close');
            },
            firstButton() {
                this.buttonFirstAction();
                this.close();
            }
        },
    };
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
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
                            x
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
                    <RippleButton
                            :clickAction="firstButton"
                            aria-label="Close modal"
                            :name=buttonFirst
                    >
                        {{buttonFirst}}
                    </RippleButton>
                    <RippleButton
                            :clickAction="close"
                            aria-label="Close modal"
                            :name=buttonSecond
                    >
                        {{buttonSecond}}
                    </RippleButton>
                </div>
            </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
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
        background: $blue;
        border-radius: 0.8rem;
        overflow-x: auto;
        display: flex;
        flex-direction: initial;
        width: 46rem;
        color: $white;
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
        border: none;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        color: $white;
        background: transparent;
    }

    .btn-green {
        border: 1px solid $violet;
        border-radius: 2.1rem;
        padding: 0.8rem 1.8rem;
        color: $violet;
        font-size: 1.4rem;
        &:hover {
            transition: ease 0.2s;
            background: $violet;
            color: $white;
            //transform: scale(1.05);
        }

        &:first-child {
            margin-right: 1rem;
        }
    }
    .Button-share {
        &.btn-ripple {
            background: transparent !important;
        }
    }
</style>