<script>
    export default {
        name: 'modalStory',
        template: '#modalStory',
        data: () => ({
          isModalVisible: false,
        }),
        props: [
            "name",
            "src",
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
            closeDelay() {
              setTimeout(this.close(), 50);
            }
        },
    };
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modalStory"
                 role="dialog"
                 aria-labelledby="modalTitle"
                 aria-describedby="modalDescription"
                 :style="`background-image: url(${src})`"
            >
                <header
                        class="modal-header"
                        id="modalTitle"
                >
                    <slot name="header">
                        Publié par {{name}}

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
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
    }

    .modalStory {
        background-repeat: no-repeat;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        width: 35rem;
        height: 60rem;
        border-radius: 2rem;
        background-size: cover;
    }

    .modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50rem;
        text-align: center;
        color: $white;
        text-transform: uppercase;
        font-size: 40px;
      img {
        max-width: 35rem;
      }
    }
    .modal-header,
    .modal-footer,
    .button-footer {
        padding: 15px;
        display: flex;
        font-weight: 500;
    }

    .button-footer {
        padding: 0px 0px 15px 15px;
    }

    .modal-header {
        justify-content: space-between;
        color: $white;
    }

    .modal-footer {
        font-weight: 500;
    }

    .modal-body {
        position: relative;
        padding: 0px 15px;
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
        color: cornflowerblue;
        background: white;
        border: 2px solid cornflowerblue;
        border-radius: 2px;
        padding: 0.2rem 0.6rem;

        &:first-child {
            margin-right: 1rem;
        }
    }
</style>