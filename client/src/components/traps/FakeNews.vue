<template>
    <div class="fakeNews__container">
        <Indicator :type="isValid ? 'valid' : 'invalid'"/>

        <Content title="La nasa envisage de faire exploser la lune…"
                 description="Edgar Phillips-Garret est l’homme qui se cache derrière cette idée folle d’envoyer sur la Lune une sonde équipée d’une charge explosive suffisamment forte pour définitivement la faire disparaître. "/>
        <div class="fakeNews__group">
            <a class="fakeNews__link"
               target="_blank"
               rel="nofollow noopener"
               href="http://www.legorafi.fr/2019/02/11/la-nasa-envisage-de-faire-exploser-la-lune-pour-en-etudier-les-consequences/"
            >Lire la suite</a>
            <div class="button__container">
                <div class="button__group" v-if="showButtons">
                    <RippleButton id="show-modal" :clickAction="showModal" name="Partager"></RippleButton>
                    <RippleButton :clickAction="updateReport" name="Signaler"></RippleButton>
                    <modal
                        :visible="isModalVisible"
                        @close="closeModal"
                        title="Notifications"
                        description="Va sur un moteur de recherche te renseigner pour savoir si cette information est vraie ou fausse. Vérifie la source de l’information pour pouvoir te faire ton propre avis."
                        question="L’information est-elle correcte ?"
                        buttonFirst="Oui"
                       @firstAction="hideBtn"
                        :buttonFirstAction="updateShare"
                        buttonSecond="Non"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Content from '@/components/traps/post/Content';
    import RippleButton from '@/components/UI/RippleButton';
    import Informations from '@/components/traps/post/Informations';
    import Modal from '@/components/modal/Modal';
    import Indicator from '@/components/traps/Indicator';

    export default {
        name: "FakeNews",
        components: {Content, Informations, Modal, RippleButton, Indicator},
        data: () => ({
            isModalVisible: false,
            showButtons: true
        }),
        computed: {
            isValid: {
                get: function () {
                    return this.$store.state.validTrap.fakeNew;
                },
                set: function (val) {
                    this.$store.state.validTrap.fakeNew = val;
                    this.$store.dispatch('checkValidateAll');
                }
            }
        },
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            hideBtn() {
                this.showButtons = false;
                this.isValid = true;
            },
            updateReport() {
                this.hideBtn();
                this.$store.dispatch('updateScene', {sceneType: 'fakeNews', action: 'reports'});
                this.$store.dispatch('updateAchievement', {type: 'reports', amount: 1});
                this.$store.dispatch('updateAchievement', {type: 'points', amount: 10});
            },
            updateShare() {
                this.$store.dispatch('updateScene', {sceneType: 'fakeNews', action: 'shares'});
                this.$store.dispatch('updateAchievement', {type: 'points', amount: -10});
                this.$store.dispatch('updateAchievement', {type: 'shares', amount: 1});
            }
        },
    }
</script>

<style scoped lang="scss">
    .fakeNews {
        &__container {
            position: relative;
            background: $white;
            margin-top: 2rem;
            border-radius: 10px;
        }

        &__group {
            padding: 0 7rem 3.8rem 7rem;
        }

        &__link {
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
                transform: scaleX(0);
            }

            &:hover:before {
                transform: scaleX(1);
            }
        }
    }

    .informations__group {
        padding: 0 7rem 3.8rem 7rem;
    }
</style>