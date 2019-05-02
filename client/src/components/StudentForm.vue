<template>
    <div>
        <v-snackbar
                v-model="snackbar"
                :timeout="6000"
                top
                right
        >
            {{ responseMsg }}
            <v-btn
                    color="blue"
                    flat
                    @click="snackbar = false"
            >
                Fermer
            </v-btn>
        </v-snackbar>
        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
        >
            <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="Prénom"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="surname"
                    :rules="nameRules"
                    label="Nom"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Mot de passe"
                    type="password"
                    required
            ></v-text-field>

            <v-select
                    v-model="gender"
                    :items="items"
                    :rules="[v => !!v || 'Le genre est requis']"
                    label="Genre"
                    required
            ></v-select>

            <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'Vous devez accepter pour continuer']"
                    label="Do you agree?"
                    required
            ></v-checkbox>

            <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="validate"
            >
                Validate
            </v-btn>

            <v-btn
                    color="error"
                    @click="reset"
            >
                Reset Form
            </v-btn>

            <v-btn
                    color="warning"
                    @click="resetValidation"
            >
                Reset Validation
            </v-btn>
        </v-form>
    </div>
</template>

<script>
    import {api} from "../utils/API";
    import {ROUTE_STUDENT_SIGNUP} from "../utils/constant";

    export default {
        name: 'StudentForm',
        data: () => ({
            snackbar: false,
            responseMsg: '',
            valid: true,
            firstname: '',
            surname: '',
            nameRules: [
                v => !!v || 'Le champs est requis',
            ],
            email: '',
            emailRules: [
                v => !!v || 'Un e-mail est requis',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Un mot de passe est requis',
                v => v.length > 5 || 'Le mot de passe doit faire au moins 5 caractères'
            ],
            gender: null,
            items: [
                'Homme',
                'Femme'
            ],
            checkbox: false
        }),

        methods: {
            validate() {
                if (!this.$refs.form.validate()) return;
                const roomId = this.$route.params.room;
                const data    = {
                    firstname: this.firstname,
                    surname: this.surname,
                    email: this.email,
                    password: this.password,
                    gender: this.gender,
                };
                const options = {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    data: JSON.stringify(data),
                    url: ROUTE_STUDENT_SIGNUP + roomId
                };

                api(options)
                    .then(res => {
                        this.responseMsg = res.data.message;
                        this.snackbar = true;
                        setTimeout(() => {
                            this.$router.push('/student/first')
                        }, 3000)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            }
        }
    }
</script>

<style scoped>

</style>