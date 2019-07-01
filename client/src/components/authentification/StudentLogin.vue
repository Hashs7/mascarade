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
    import {ROUTE_STUDENT_LOGIN} from "../../utils/constant";
    import {api} from "../../utils/API";
    import {routePath} from "../../router/routes";

    export default {
        name: 'StudentLogin',
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
            validate() {
                if (!this.$refs.form.validate()) return;
                const data    = {
                    email: this.email,
                    password: this.password,
                };
                const options = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    data: JSON.stringify(data),
                    url: ROUTE_STUDENT_LOGIN
                };


                api(options)
                    .then(res => {
                        console.log(res.data);
                        this.$store.commit('initStudent', {
                            studentId: res.data.studentId,
                            sessionId: res.data.sessionId
                        });
                        this.$router.push(routePath.STUDENT_HOME)
                    })
                    .catch((err) => {
                        this.responseMsg = res.data.message;
                        this.snackbar    = true;
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
    button {
        margin-left: 0;
    }
</style>