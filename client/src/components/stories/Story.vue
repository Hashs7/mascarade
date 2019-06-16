<template>
    <div class="Stories-container">
        <div class="Story" id="modalStory"  @click="showModal" :style="`background-image: url(${src})`"></div>
        <modalStory    
            v-show="isModalVisible"
            @close="closeModal"
            :name=name
            :description=description
            :src="src"
            />
        <!--<button @click="newStory">Ajouter une story</button>-->
    </div>
</template>
<script>
    import ModalStory from '@/components/modal/ModalStory';
    import {initStory} from '../stories/stories';
    import Story from '@/components/stories/Story';
    import {mapMutations} from "vuex";
    export default {
        name: "Story",
        components: {ModalStory, initStory, Story},
        data: () => ({
            isModalVisible: false,
        }),
        props: ['src', 'name', 'description'],
        methods: {
            showModal() {
                this.isModalVisible = true;
                setTimeout(this.closeModal, 8000);
            },
            closeModal() {
                this.isModalVisible = false;
            },
             updateReport() {
                this.$store.dispatch('updateAchievement', {type: 'reports', amount: 1})
            },
            updateShare() {
                this.$store.dispatch('updateAchievement', {type: 'shares', amount: 1})
            },
            newStory() {
                this.$store.commit('addStory', {src : '', name : "Testtest", description: 'fbdbfdbsi', delay:2000});
            }
        },
         computed: {
            stories() {
                return this.$store.state.stories.allStories;
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
        border: 1px solid $violet;
        border-radius: 100%;
        width: 6rem;
        height: 6rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        cursor: pointer;
        margin-right: 2rem;
    }
</style>