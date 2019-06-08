<template>
    <div class="FakeNews-container">
        <Content title="La nasa envisage de faire exploser la lune…" description="Edgar Phillips-Garret est l’homme qui se cache derrière cette idée folle d’envoyer sur la Lune une sonde équipé d’une charge explosive suffisamment forte pour définitivement la faire disparaître. "/>
        <div class="FakeNews-group">
            <!--<Informations name="Publié par Mr Chafoin" like="12" comment="15" date="Il y a 3 heures" /-->
            <a class="FakeNews-link" href="http://www.legorafi.fr/2019/02/11/la-nasa-envisage-de-faire-exploser-la-lune-pour-en-etudier-les-consequences/">Lire la suite</a>
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
    .FakeNews {
        &-container {
            border: 1.5px solid $white;
            margin-top: 2rem;
        }
        &-group {
            padding: 0 7rem 3.8rem 7rem;
        }
        &-link {
            color: $yellow;
            font-size: 1.2rem;
            margin: 0;
        }
    }
    .Button {
      &-container {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
      }

      &-share {
          margin-right: 1rem;
      }

      &-share, &-report {
        box-shadow: 0px 0px 20px $yellow;
        border-radius: 0.6rem;
        padding: 1rem 1.3rem;
        color: $yellow;
        font-size: 1.4rem;
      }
    }
    .Informations-group {
        padding: 0 7rem 3.8rem 7rem;
    }
</style>