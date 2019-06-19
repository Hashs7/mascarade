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
        <v-btn
                class="validate"
                :disabled="!valid"
                @click="validate"
        >
            Démarrer une session
        </v-btn>
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

                this.$store.dispatch('addSession', this.className)
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
    }
</style>