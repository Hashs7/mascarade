<template>
    <v-form
            ref="form"
            v-model="valid"
            lazy-validation
    >
        <v-text-field
                v-model="className"
                class="field-class"
                label="Nom de la classe"
                required
        ></v-text-field>
        <button
                class="validate"
                @click.prevent="validate"
        >
            Démarrer une session
        </button>
    </v-form>
</template>

<script>
    export default {
        name: "NewSession",
        data: () => ({
            valid: true,
            sessionCreated: false,
            className: '',
        }),
        methods: {
            validate() {
                if (!this.$refs.form.validate()) return;
                this.$store.dispatch('addSession', this.className);
                this.className = '';
            }
        }
    }
</script>

<style scoped lang="scss">
    .field-class {
        max-width: 200px;
        display: inline-block;
    }
    .validate {
        margin-left: 20px;
        display: inline-block;
        background-color: $violet !important;
        color: $white;
        border: 2px solid $violet;
        padding: 0.6rem 3rem;
        border-radius: 0.6rem;
        transition: 0.2s ease;
        &:hover {
            background: $white !important;
            color: $violet;
        }
    }
</style>