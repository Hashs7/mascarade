<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Teacher dashboard</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <Navigation />
            <div class="content">
                <p>Bienvenue sur le dashboard</p>
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
                    <TableStudent />
                </div>
                <SessionTabs />
            </div>
        </v-content>
    </div>
</template>

<script>
    import {api} from "../../utils/API";
    import {ROUTE_TEACHER_NEW_SESSION} from "../../utils/constant";
    import Navigation from '@/components/dashboard/Navigation';
    import TableStudent from '@/components/dashboard/TableStudent';
    import SessionTabs from '@/components/dashboard/SessionTabs';

    export default {
        name: 'TeacherDashboard',
        components: {
            TableStudent,
            Navigation,
            SessionTabs
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
                        this.linkToShare = window.location.origin + '/student/signup/' + res.data.shareId
                        this.sessionCreated = true
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        },

    }
</script>

<style lang="scss">
    .v-content {
        height: calc(100vh - 3px)
    }
    .content {
        display: inline-block;
        vertical-align: top;
        width: calc(100% - 300px);
    }
</style>
