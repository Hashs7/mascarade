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
                <div class="indicator"></div>
            </div>
        </div>
        <form  class="charity-content" action="">
            <input type="text" class="student-response charity-title" name="title" placeholder="Ajoute un titre">
            <textarea class="student-response charity-description" name="description" placeholder="Ajoute une description (minimum 50 mots)"></textarea>
            <div class="Button-container">
                <div class="Button-group">
                <button class="Button-share" type="submit" @click.prevent="shareCharity">Partager</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Pollution from '@/assets/img/charity/pollution.jpg'
    import Homophobie from '@/assets/img/charity/homophobie.jpg'
    import Racism from '@/assets/img/charity/racism.jpg'
    import Starvation from '@/assets/img/charity/starvation.jpg'
    import Violences from '@/assets/img/charity/violences.jpg'
    import War from '@/assets/img/charity/war.jpg'

    export default {
        name: "Charity",
        data: () => ({
            images: [{
                src: Starvation,
                type: 'starvation',
                title: 'Faim dans le monde',
                selected: false
            },{
                src: Violences,
                type: 'violences',
                title: 'Violences',
                selected: false
            },{
                src: War,
                type: 'war',
                title: "Guerre",
                selected: false
            },{
                src: Racism,
                type: 'racism',
                title: "Racisme",
                selected: false
            },{
                src: Homophobie,
                type: 'homophobie',
                title: "Homophobie",
                selected: true
            },{
                src: Pollution,
                type: 'pollution',
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
    .charity {
        &-container {
            margin: 50px 0;
            border: 1.5px solid $white;
        }
        &-title, &-description {
            display: block;
            color: $yellow;
            box-shadow: 0px 0px 20px $yellow;
            border-radius: 1rem;
            padding: 2rem;
            margin-bottom: 2rem;
            font-size: 1.4rem;
        }
        &-titleImage {
            opacity: 0;
            background-color: $grey--dark;
            color : $white;
            border-radius: 1.2rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-content {
            padding: 0 7rem 3.8rem 7rem;
            margin-top: 3rem;
        }

    }
    .img-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem;
    }
    .img-select {
        position: relative;
        cursor: pointer;
        width: 18rem;
        height: 120px;
        border: 1px solid grey;
        border-radius: 1.2rem;
        background-size: cover;
        background-position: center;
        margin-bottom: 1.4rem;
        &.selected .indicator{
            opacity: 1;
            box-shadow: 0px 0px 20px $yellow;
            border-radius: 1.2rem;   
            height: 100%;
        }
        &.selected {
            .charity-titleImage {
                display: none;
            }
        }
        &:hover {
            .charity-titleImage {
                opacity: 0.8;
            }
        }
    }
    .indicator {
        opacity: 0;
        text-align: center;
    }

    .student-response {
        max-width: 100%;
        min-width: 100%;
        min-height: 40px;
    }
    .Button {
      &-container {
        margin-top: 2rem;  
        display: flex;
        justify-content: flex-end;
      }

      &-share, &-report {
        box-shadow: 0px 0px 20px $yellow;
        border-radius: 0.6rem;
        padding: 1rem 1.3rem;
        color: $yellow;
        font-size: 1.4rem;
      }
    }
</style>