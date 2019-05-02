<template>
    <v-data-table
            :headers="headers"
            :items="session.students"
            class="elevation-1"
    >
        <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.firstname }}</td>
            <td class="text-xs-left">{{ props.item.surname }}</td>
            <td class="text-xs-left">{{ props.item.gender }}</td>
        </template>
    </v-data-table>
</template>

<script>
    import openSocket from 'socket.io-client';
    import {BASE_API_URL} from "../../utils/constant";

    export default {
        name: "StudentTable",
        props: ['session'],
        data () {
            return {
                headers: [
                    { text: 'Prénom', align: 'left', value: 'firstname' },
                    { text: 'Nom', value: 'surname', align: 'left' },
                    { text: 'Genre', value: 'gender' },
                ]
            }
        },
        mounted() {
            const socket = openSocket(BASE_API_URL);
            socket.on('student-connection', ({ student, sessionId }) => {
                this.$store.commit('addStudent', {student, sessionId});
            })
        }
    }
</script>

<style scoped>

</style>