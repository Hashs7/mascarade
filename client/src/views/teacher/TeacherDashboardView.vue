<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Teacher dashboard</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            Bienvenue sur le dashboard
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
            <div v-if="sessionCreated">
                <p>Partagez ce lien à vos élèves: {{ linkToShare }}</p>
                <StudentTable />
            </div>

        </v-content>
    </div>
</template>

<script>
    import {api} from "../../utils/API";
    import {ROUTE_TEACHER_NEW_SESSION} from "../../utils/constant";
    import TableStudent from '@/components/TableStudent';

    export default {
        name: 'TeacherDashboard',
        components: {
            TableStudent
        },
        data: () => ({
            valid: true,
            sessionCreated: false,
            className: '',
            linkToShare: ''
        }),
        methods: {
            validate() {
                if (!this.$refs.form.validate()) return;
                const token = localStorage.getItem('token');
                const teacherId = localStorage.getItem('teacherId');
                const data    = {
                    className: this.className,
                    teacherId
                };
                const options = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token
                    },
                    data: JSON.stringify(data),
                    url: ROUTE_TEACHER_NEW_SESSION
                };

                api(options)
                    .then(res => {
                        console.log(res);
                        this.linkToShare = window.location.origin + '/student/signup?room=' + res.data.shareId
                        this.sessionCreated = true
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        },

    }
</script>
