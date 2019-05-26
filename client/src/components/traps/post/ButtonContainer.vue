<template>
    <div class="Button-container">
        <div class="Button-group">
            <button class="Button-share" type="button" id="show-modal" @click="showModal()">{{title_1}}</button>
            <button class="Button-report" type="button">{{title_2}}</button>
            <modal v-show="isModalVisible" @close="closeModal()" />
        </div>
    </div>
</template>

<script>
    import Modal from '@/components/modal/Modal';
    export default {
        name: "ButtonContainer",
        components: { Modal },
        data: () => ({
          isModalVisible: false,
        }),
        props: [
          "title_1",
          "title_2"
        ],
         methods: {
          showModal() {
            this.isModalVisible = true;
          },
          closeModal() {
            this.isModalVisible = false;
          }
        },
    }
</script>

<style scoped lang="scss">
    .Button {
      &-container {
       margin-top: 2rem;
      }
      &-share {
        margin-right: 1rem;
      }
      &-share, &-report {
        border: 2px solid cornflowerblue;
        padding: 0.2rem 0.6rem;
        color: cornflowerblue;
      }
    }
     
</style>