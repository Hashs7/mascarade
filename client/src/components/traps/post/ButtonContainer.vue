<template>
    <div class="Button-container">
        <div class="Button-group">
            <button class="Button-share" type="button" id="show-modal" @click="showModal">{{titleFirst}}</button>
            <button class="Button-report" type="button" @click="updateReport">{{titleSecond}}</button>
            <modal v-show="isModalVisible"
                   @close="closeModal()"
                   title="Notifications"
                   description="Renseigne toi sur internet via Google pour savoir si cette information est vraie ou fausse. Vérifie la source de l’information pour pouvoir te faire ton propre avis."
                   question="L’information est-elle correcte ?"
                   buttonFirst="Oui"
                   :buttonFirstAction="updateShare"
                   buttonSecond="Non"/>
        </div>
    </div>
</template>

<script>
    import Modal from '@/components/modal/Modal';

    export default {
        name: "ButtonContainer",
        components: {Modal},
        data: () => ({
            isModalVisible: false,
        }),
        props: [
            "titleFirst",
            "titleSecond"
        ],
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