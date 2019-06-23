<template>
    <div class="carousel__container">
        <carousel :per-page="1"
                  :mouse-drag="false"
                  :navigationEnabled="true"
                  :paginationEnabled="false"
                  @page-change="slideChange">

            <slide class="tutoSlider__slide" v-for="(slide, i) in slides" :key="i">
               <header
                    class="modal-header"
                    id="modalTitle"
                >
                    <slot name="header">
                        {{slide.title}}
                    </slot>
                </header>
                <section
                    class="modal-body"
                    id="modalDescription"
                >
                    <slot name="body">
                       {{slide.description}}
                    </slot>
                </section>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: "TutoSlider",
        components: {
            Carousel,
            Slide
        },
        data: () => ({
            slides: [{
                title: "Bienvenue sur Mascarade !",
                description: "Mascarade c'est LE nouveau réseau social du moment ! Story, chat, flash, tout ce qu'il te faut pour rester connecté ! Attention on devient vite accro ;)",
            },{
                title: "Comment ça fonctionne ?",
                description: "Des publications ont déjà été postées, réagis à ces publications pour passer à l'étape suivante. Gagne des points en faisant les bons choix, mais attention tu peux aussi en perdre ! ",
            },{
                title: "Besoin d'aide ? Pas de panique !",
                description: "Clique sur le bouton aide en haut à droite de l’écran. L'animateur viendra t'aider :)",
            }]
        }),
        methods: {
            sub(id) {
                return id.slice(0, 8)
            },
            slideChange(i) {
                console.log(i);
                console.log(this.slides.length -1);
                this.slides.length -1 === i ? this.$emit("isLast", true) : this.$emit("isLast", false); 
            }
        }
    }
</script>

<style scoped lang="scss">
    .tutoSlider {
        &__listTitle { 
          justify-content: center;
          color: $white;
          font-size: 45px;
          line-height: 50px;
          max-width: 55%;
          font-weight: bold;
          display: flex;
          padding: 50px 15px 15px 15px;
        }
        &__slide {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        &__description {
          display: flex;
          color: $white;
          font-size: 18px;
          line-height: 35px;
          max-width: 55%;
          margin-top: 30px;
          padding: 0px 15px;
        }
    }

   .modal-body {
        display: flex;
        color: $white;
        font-size: 18px;
        line-height: 35px;
        max-width: 55%;
        margin-top: 30px;
    }

    .modal-header {
        justify-content: center;
        color: $white;
        font-size: 45px;
        line-height: 50px;
        max-width: 55%;
        font-weight: bold;
        display: flex;
        padding: 50px 15px 15px 15px;
    }

    .modal-footer {
        font-weight: 500;
    }

    .modal-body {
        padding: 0px 15px;
    }
</style>