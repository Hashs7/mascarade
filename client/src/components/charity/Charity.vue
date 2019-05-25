<template>
    <div class="charity-container">
        <div class="img-container">
            <div class="img-select"
                 v-for="(img, i) in images"
                 :style="`background-image: url(${img.src})`"
                 :class="{selected: img.selected}"
                 @click="selectImg(i)">
                <div class="indicator">Sélectionné</div>
            </div>
        </div>
        <label class="charity-title" for="title">Rejoins notre cause !</label>
        <textarea class="student-response" name="title" placeholder="Ajoute une description"></textarea>
        <p>800 millions  de personnes dans le monde ne mangent pas à leur faim, soit 1 personne sur 10. Vous pouvez participer à notre cause en partageant cet article.</p>
        <button @click.prevent="shareCharity">Partager</button>
    </div>
</template>

<script>
    export default {
        name: "Charity",
        data: () => ({
            images: [{
                src: 'https://picsum.photos/200/300',
                selected: false
            },{
                src: 'https://picsum.photos/200/300',
                selected: false
            },{
                src: 'https://picsum.photos/200/300',
                selected: false
            },{
                src: 'https://picsum.photos/200/300',
                selected: false
            },{
                src: 'https://picsum.photos/200/300',
                selected: true
            },{
                src: 'https://picsum.photos/200/300',
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
    .img-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .img-select {
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