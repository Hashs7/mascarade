<template>
    <div class="charity-container">
        <div class="img-container">
            <div class="img-select"
                 v-for="(img, i) in images"
                 :style="`background-image: url(${img.src})`"
                 :class="{selected: img.selected}"
                 :title="img.title"
                 @click="selectImg(i)"
                 >
                <div class="charity-titleImage">{{img.title}}</div>
                <div class="indicator">Sélectionné</div>
            </div>
        </div>
        <form action="">
            <input type="text" class="student-response charity-title" name="title" placeholder="Ajoute un titre">
            <textarea class="student-response" name="description" placeholder="Ajoute une description (minimum 50 mots)"></textarea>
            <button type="submit" @click.prevent="shareCharity">Partager</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Charity",
        data: () => ({
            images: [{
                src: 'https://picsum.photos/200/300',
                title: 'Faim dans le monde',
                selected: false
            },{
                src: 'https://picsum.photos/200/300',
                title: 'Violences',
                selected: false
            },{
                src: 'https://picsum.photos/200/300',
                title: "Guerre",
                selected: false
            },{
                src: 'https://picsum.photos/200/300',
                title: "Racisme",
                selected: false
            },{
                src: 'https://picsum.photos/200/300',
                title: "Homophobie",
                selected: true
            },{
                src: 'https://picsum.photos/200/300',
                title: "Pollution",
                selected: false
            }]
        }),
        methods: {
            selectImg(index) {
                this.images.map(img => img.selected = false);
                this.images[index].selected = true;
            },
            shareCharity() {
                console.log('add charity to db and +1 share');
                this.$store.dispatch('updateAchievement', {type: 'shares', amount: 1})
            }
        }
    }
</script>

<style scoped lang="scss">
    .charity-container {
        margin: 50px 0;
        border: 1px solid gray;
    }
    .charity-title {
        display: block;
    }
    .charity-titleImage {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0;
        background-color: $grey--dark;
        color : $white;
    }
    .img-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .img-select {
        position: relative;
        cursor: pointer;
        width: calc(100% / 3);
        height: 120px;
        border: 3px solid #43425D;
        background-size: cover;
        background-position: center;
        &.selected .indicator{
            opacity: 1;
            background-color: red;
        }
        &.selected {
            .charity-titleImage {
                display: none;
            }
        }
        &:hover {
            .charity-titleImage {
                opacity: 1;
            }
        }
    }
    .indicator {
        opacity: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .student-response {
        max-width: 100%;
        min-width: 100%;
        min-height: 40px;
    }
</style>