<script>
    import Notification from '@/assets/notification.svg';
    export default {
        name: 'modal',
        components: { Notification },
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
                    <button
                            type="button"
                            class="btn-green"
                            @click="firstButton"
                            aria-label="Close modal"
                    >
                        {{buttonFirst}}
                    </button>
                    <button
                            type="button"
                            class="btn-green"
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
    }

    .modal {
        background: $grey--dark;
        border-radius: 0.8rem;
        overflow-x: auto;
        display: flex;
        flex-direction: initial;
        width: 46rem;
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
        color: lightgray;
        background: transparent;
    }

    .btn-green {
        box-shadow: 0px 0px 2rem $yellow;
        border-radius: 0.6rem;
        padding: 0.8rem 1.8rem;
        color: $yellow;
        font-size: 1.4rem;

        &:first-child {
            margin-right: 1rem;
        }
    }
</style>