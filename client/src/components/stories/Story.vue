<template>
    <div class="Stories-container">
        <div class="Story" id="show-modal" @click="showModal" :style="`background-image: url(${src})`"></div>
        <modal v-show="isModalVisible"
                @close="closeModal"
                title="Publié par Thomas Paratle"
                description="Renseigne toi sur internet via Google pour savoir si cette information est vraie ou fausse. Vérifie la source de l’information pour pouvoir te faire ton propre avis."
                question="L’information est-elle correcte ?"
                buttonFirst="Oui"
                :buttonFirstAction="updateShare"
                buttonSecond="Non"/>
    </div>
</template>
<script>
    import Modal from '@/components/modal/Modal';
    export default {
        name: "Story",
        components: {Modal},
        data: () => ({
            isModalVisible: false,
        }),
        props: ['src'],
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
    .Stories {
        &-container {
            display: flex;
        }
    }
    .Story {
        border: 2px solid grey;
        border-radius: 100%;
        width: 6rem;
        height: 6rem;
        //background-image: url('../../assets/logo.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        cursor: pointer;
        margin-right: 2rem;
    }
</style>