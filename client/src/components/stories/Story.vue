<template>
    <div class="Stories-container">
        <div class="Story" id="modalStory" @click="showModal" :style="`background-image: url(${src})`"></div>
        <modalStory    
            v-show="isModalVisible"
            @close="closeModal"
            :name=name
            :description=description
            :src=src
            />
    </div>
</template>
<script>
    import ModalStory from '@/components/modal/ModalStory';
    import {initStory} from '../stories/stories';
    export default {
        name: "Story",
        components: {ModalStory, initStory},
        data: () => ({
            isModalVisible: false,
        }),
        props: ['src', 'name', 'description'],
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
         computed: {
            /*...mapGetters([
                'getStory',
            ]),*/
            stories() {
                return initStory.stories;
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