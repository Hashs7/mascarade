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
                    label="Prénom*"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="surname"
                    :rules="nameRules"
                    label="Nom*"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail*"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Mot de passe*"
                    type="password"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="phone"
                    label="Téléphone"
            ></v-text-field>

            <v-select
                    v-model="gender"
                    :items="items"
                    :rules="[v => !!v || 'Le genre est requis']"
                    label="Genre*"
                    required
            ></v-select>

         <!--   <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
            >
                <template v-slot:activator="{ on }">
                    <v-text-field
                            v-model="dateFormatted"
                            label="Date de naissance"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>-->
            <!--
            <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'Vous devez accepter pour continuer']"
                    label="Acceptez-vous les conditions d'utilisation ?"
                    required
            ></v-checkbox>-->

            <v-btn
                    :disabled="!valid"
                    color="primary"
                    @click="validate"
                    class="ml-0"
            >
                S'inscrire
            </v-btn>
        </v-form>
    </div>
</template>

<script>
    import {api} from "../../utils/API";
    import {ROUTE_STUDENT_SIGNUP} from "../../utils/constant";
    import {routePath} from "../../router/routes";

    export default {
        name: 'StudentForm',
        data: () => ({
            snackbar: false,
            responseMsg: '',
            valid: true,
            date: new Date(2008, 1, 1).toISOString().substr(0, 10),
            menu: false,
            schoolName: '',
            phone: '',
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
                v => v.length > 6 || 'Le mot de passe doit faire au moins 6 caractères'
            ],
            gender: null,
            items: [
                'Homme',
                'Femme'
            ],
            checkbox: false
        }),
        sockets: {
            newStory(data) {
                this.$store.commit('addStory', data);
            },
        },
        computed: {
            dateFormatted() {
                return this.formatDate(this.date)
            }
        },
        methods: {
            formatDate (date) {
                if (!date) return null;

                const [year, month, day] = date.split('-');
                console.log(year, month, day, 'date');
                return `${day}/${month}/${year}`;
            },
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

                        this.$store.commit('initStudent', {
                            studentId: res.data.studentId,
                            sessionId: res.data.sessionId,
                            firstname: this.firstname,
                            surname: this.surname
                        });
                        setTimeout(() => {
                            this.$router.push(routePath.STUDENT_HOME)
                        }, 2000)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    }
</script>

<style scoped>

</style>