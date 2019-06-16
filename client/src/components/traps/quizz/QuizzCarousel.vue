<template>
    <div class="carousel">
        <div class="controls">

        </div>
        <carousel :per-page="1"
                  :mouse-drag="false"
                  paginationColor="black"
                  paginationActiveColor="white">

            <slide v-for="(slide, i) in slides" :key="i">
                <h3>{{slide.label}}</h3>
                <ul>
                    <li v-for="(res, j) in slide.responses" :key="j">
                        <input type="radio" :id="sub(res)+j" :name="slide.label" :value="res">
                        <label :for="sub(res)+j">{{res}}</label>
                    </li>
                </ul>
            </slide>

        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    //TODO binder la valeur pour chaque réponses et ajouter les controles
    export default {
        name: "QuizzSlide",
        components: {
            Carousel,
            Slide
        },
        data: () => ({
            slides: [{
                label: "Si tu devais être l'égérie d'une marque, ce serait...",
                responses: ['Chanel', 'Balmain', 'Dior', 'Ta propre marque']
            },{
                label: "Tu définis ton style comme...",
                responses: ['Classique, fidèle à à toi même', 'Très naturel, jogging toute la journée', 'Très décalé', 'Jamais sans maquillage']
            },{
                label: "Quand tu es dans la rue, tu veux que les gens...",
                responses: ['Te remarquent et t’admirent !', 'Te regardent à tout prix, tu aimes choquer et être vu', 'Te trouvent élégant/e', 'Te trouvent discret/e sans pour autant être effacé/e']
            },{
                label: "Avec qui tu pourrais te mettre en couple ?",
                responses: ['Un chanteur', 'Un rappeur', 'Un DJ', 'Un mannequin']
            },{
                label: "Sur les réseaux sociaux, tu es plutôt...",
                responses: ['Toujours présent', 'Très discret', 'Tu postes de temps en temps', 'Un(e) roi/reine']
            }]
        }),
        methods: {
            sub(id) {
                return id.slice(0, 8)
            }
        }
    }
</script>

<style scoped>

</style>