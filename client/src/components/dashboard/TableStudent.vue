<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="session.students"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.firstname }}</td>
                <td class="text-xs-left">{{ props.item.surname }}</td>
                <td class="text-xs-left">{{ props.item.gender }}</td>
                <td class="text-xs-left">
                    <v-progress-linear v-model="props.item.scene" />
                </td>
            </template>
        </v-data-table>
    </div>

</template>

<script>
    export default {
        name: "StudentTable",
        props: ['session'],
        data () {
            return {
                studentCounter: 0,
                headers: [
                    { text: 'Prénom', align: 'left', value: 'firstname' },
                    { text: 'Nom', value: 'surname', align: 'left' },
                    { text: 'Genre', value: 'gender' },
                    { text: 'Compteur', value: 'Scène' },
                ]
            }
        },
        sockets: {
            poke: function(data) {
                this.$store.commit('updateStudentScene', data);

            },
            newConnection: function({ student, sessionId }) {
                this.$store.commit('addStudent', {student, sessionId});
            }
        },
    }
</script>

<style scoped>

</style>