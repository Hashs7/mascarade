<template>
    <v-form
            ref="form"
            v-model="valid"
            lazy-validation
    >
        <v-text-field
                v-model="className"
                label="Nom de la classe"
                required
        ></v-text-field>
        <v-btn
                :disabled="!valid"
                color="success"
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

<style scoped>

</style>