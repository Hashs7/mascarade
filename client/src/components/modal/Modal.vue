<script>
  export default {
    name: 'modal',
    template: '#modal',
    data: () => ({
      isModalVisible: false,
    }),
    methods: {
      close() {
        this.$emit('close');
      },
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
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            Notifications

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
            Renseigne toi sur internet via Google pour savoir si cette information est vraie ou fausse. 
Vérifie la source de l’information pour pouvoir te faire ton propre avis.
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
           L’information est-elle correcte ? 
          </slot>
        </footer>
        <div class="button-footer">
        <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Oui
        </button>
        <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Non
        </button>
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
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 30rem;
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