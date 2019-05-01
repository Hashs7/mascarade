<template>
    <v-data-table
            :headers="headers"
            :items="students"
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
        data () {
            return {
                headers: [
                    {
                        text: 'Prénom',
                        align: 'left',
                        // sortable: false,
                        value: 'firstname'
                    },
                    { text: 'Nom', value: 'surname', align: 'left' },
                    { text: 'Genre', value: 'gender' },
                ],
                students: [
                    {
                        firstname: 'Frozen',
                        surname: 'Yogurt',
                        gender: 'Homme'
                    }
                ]
            }
        },
        mounted() {
            const socket = openSocket(BASE_API_URL);
            socket.on('student-connection', student => {
                console.log(student);
                this.students.push(student)
            })
        }
    }
</script>

<style scoped>

</style>