<template>
    <v-form
            ref="form"
            v-model="valid"
            lazy-validation
    >

        <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
        ></v-text-field>

        <v-text-field
                v-model="password"
                label="Password"
                required
                type="password"
        ></v-text-field>

        <v-btn
                :disabled="!valid"
                color="success"
                @click="validate"
        >
            Connexion
        </v-btn>
    </v-form>
</template>

<script>
    import {ROUTE_TEACHER_LOGIN} from "../utils/constant";
    import {api} from "../utils/API";

    export default {
        name: 'TeacherLogin',
        data: () => ({
            valid: true,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        }),

        methods: {
            validate () {
                if (!this.$refs.form.validate()) return;
                const data    = {
                    email: this.email,
                    password: this.password,
                };
                const options = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    data: JSON.stringify(data),
                    url: ROUTE_TEACHER_LOGIN
                };

                api(options)
                    .then(res => {
                        setTimeout(() => {
                            this.$router.push('/dashboard')
                        }, 3000)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            }
        }
    }
</script>

<style scoped>

</style>