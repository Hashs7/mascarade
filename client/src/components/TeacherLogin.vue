<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Hint</h3>
                    <p>Login: admin@dev.com</p>
                    <p>Password: admin</p>
                </div>
            </v-card-title>
        </v-card>

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
    </div>

</template>

<script>
    import {ROUTE_TEACHER_LOGIN} from "../utils/constant";
    import {api} from "../utils/API";

    export default {
        name: 'TeacherLogin',
        data: () => ({
            valid: true,
            snackbar: false,
            responseMsg: '',
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
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('teacherId', res.data.teacherId);
                        this.$store.commit('initSessions', res.data.sessions);

                        this.$router.push('/dashboard');
                    })
                    .catch(err => {
                        this.responseMsg = 'Les données saisies sont incorrectes';
                        this.snackbar = true;
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