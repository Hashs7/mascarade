<template>
    <div class="FakeNews-container">
        <Content title="La nasa envisage de faire exploser la lune…" description="Edgar Phillips-Garret est l’homme qui se cache derrière cette idée folle d’envoyer sur la Lune une sonde équipé d’une charge explosive suffisamment forte pour définitivement la faire disparaître. "/>    
        <div class="FakeNews-group">
           <a class="FakeNews-link"
               target="_blank"
               rel="nofollow noopener"
               href="http://www.legorafi.fr/2019/02/11/la-nasa-envisage-de-faire-exploser-la-lune-pour-en-etudier-les-consequences/"
            >Lire la suite</a>
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
                this.$store.dispatch('updateScene', {sceneType: 'fakeNews', action: 'reports'});
                this.$store.dispatch('updateAchievement', {type: 'reports', amount: 1})
            },
            updateShare() {
                this.$store.dispatch('updateScene', {sceneType: 'fakeNews', action: 'shares'});
                this.$store.dispatch('updateAchievement', {type: 'shares', amount: 1})
            }
        },
    }
</script>

<style scoped lang="scss">
    .FakeNews {
        &-container {
            margin-top: 2rem;
        }
        &-group {
            padding: 0 7rem 3.8rem 7rem;
        }
        &-link {
            color: $violet;
            font-size: 1.2rem;
            margin: 0;
            position: relative;
            text-decoration: none;
            padding-bottom: 0.2rem;
            &:before, &:after {
                content: '';
                position: absolute;
                transition: transform .5s ease;
            }
            &:before {
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background: $violet;
                transform:  scaleX(0);
            }
            &:hover:before {
                transform:  scaleX(1);
            }
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
        border: 1px solid $violet;
        border-radius: 2.1rem;
        padding: 1rem 1.3rem;
        color: $violet;
        font-size: 1.4rem;
        &:hover {
            transition: ease 0.2s;
            background: $violet;
            color: $white;
            //transform: scale(1.05);
        }
      }
    }
    .Informations-group {
        padding: 0 7rem 3.8rem 7rem;
    }
</style>