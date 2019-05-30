<template>
    <div class="FakeNews-container">
        <Content title="Au programme des 6e le chinois !" description="Le ministère de l’éducation nationale et de la jeunesse souhaite ajouter une nouvelle langue au programme scolaire des élèves de 6ème : le chinois !"/>
        <Informations name="Publié par Mr Chafoin" like="12" comment="15" date="Il y a 3 heures" />
        <div class="Button-container">
          <div class="Button-group">
          <button class="Button-share" type="button" id="show-modal" @click="showModal">Partager</button>
          <button class="Button-report" type="button" @click="updateReport">Signaler</button>
          <modal v-show="isModalVisible"
                  @close="closeModal"
                  title="Notifications"
                  description="Renseigne toi sur internet via Google pour savoir si cette information est vraie ou fausse. Vérifie la source de l’information pour pouvoir te faire ton propre avis."
                  question="L’information est-elle correcte ?"
                  buttonFirst="Oui"
                  :buttonFirstAction="updateShare"
                  buttonSecond="Non"/>
          </div>
        </div>
    </div>
</template>
<script>
    import Content from '@/components/traps/post/Content';
    import Informations from '@/components/traps/post/Informations';
    import Modal from '@/components/modal/Modal';
    export default {
        name: "FakeNews",
        components: { Content, Informations, Modal},
        data: () => ({
          isModalVisible: false,
        }),
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            updateReport() {
                this.$store.dispatch('updateAchievement', {type: 'reports', amount: 1})
            },
            updateShare() {
                this.$store.dispatch('updateAchievement', {type: 'shares', amount: 1})
            }
        },
    }
</script>

<style scoped lang="scss">
    .FakeNews-container {
        background-color: #fff;
        background-color: #fff;
        padding: 2rem;
        border: 1px solid grey;
        margin-top: 2rem;
    }
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